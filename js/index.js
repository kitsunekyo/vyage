class PolaroidGridComponent {
    _$root;

    constructor(rootId) {
        this._$root = document.getElementById(rootId);
        this._$root.innerHTML = "";

        this._loadPosts();
    }

    async _loadPosts() {
        const res = await fetch("/app/db/db.json");
        const data = await res.json();
        const posts = data.posts;

        this._render(posts);
    }

    _render(posts) {
        this._$root.innerHTML = "";
        const elements = posts.map((post) => this._createPolaroidEl(post));
        elements.forEach((element) => {
            this._$root.appendChild(element);
        });
    }

    _createPolaroidEl(polaroid) {
        const el = document.createElement("div");
        el.classList.add("polaroid");

        // todo: get avatar url and use instead of polaroid.creatorID

        el.innerHTML = `
            <div class="polaroid__image">
                <img src="${polaroid.coverImg}" alt="${polaroid.title}">
            </div>
            <div class="polaroid__meta">
                <div class="polaroid__user">
                    <div class="polaroid__avatar">
                        <img src="${polaroid.creatorID}" alt="${polaroid.creatorID}">
                    </div>
                    <div class="polaroid__username">${polaroid.creatorID}</div>
                </div>
                <div class="polaroid__details">
                    <h3>${polaroid.country}</h3>
                    <p>${polaroid.title}</p>
                </div>
            </div>
        `;

        return el;
    }
}

class LoginForm {
    constructor() {
        const $loginForm = document.getElementById("loginForm");

        $loginForm.addEventListener("submit", (e) => {
            e.preventDefault();
            this._handleSubmit($loginForm);
        });
    }

    _handleSubmit($form) {
        const formData = new FormData($form);
        const username = formData.get("username");
        const password = formData.get("password");
        this._login({ username, password });
    }

    _login(credentials) {
        console.log(credentials);
    }
}

class Tabs {
    _$tabs;
    _$links;

    constructor() {
        this._$links = document.querySelectorAll("[data-tab-link]");
        this._$tabs = document.querySelectorAll("[data-tab]");

        this._$links.forEach((link) => {
            link.addEventListener("click", (e) => this._handleLinkClick(e));
        });

        this._$tabs[0].style.display = "block";
        this._$links[0].classList.add("tab__header-link--active");
    }

    _handleLinkClick(e) {
        const targetTab = e.target.dataset.tabLink;

        this._$links.forEach((link) => {
            link.classList.remove("tab__header-link--active");
        });
        e.target.classList.add("tab__header-link--active");

        this._openTab(targetTab);
    }

    _openTab(tabName) {
        const tab = document.querySelector(`[data-tab="${tabName}"]`);
        this._$tabs.forEach((tab) => {
            tab.style.removeProperty("display");
        });
        tab.style.display = "block";
    }
}

class LandingPageModal {
    _$body;

    constructor() {
        this._registerDOM();
    }

    _registerDOM() {
        this._$body = document.querySelector("body");

        document.querySelector('[data-modal-open="login"]').addEventListener("click", (e) => {
            e.preventDefault();
            this.open();
        });

        document.querySelector(".overlay").addEventListener("click", (e) => {
            this.close();
        });
    }

    open() {
        this._$body.classList.add("show-overlay");
        this._$body.classList.add("show-modal");
    }

    close() {
        this._$body.classList.remove("show-overlay");
        this._$body.classList.remove("show-modal");
    }
}

(function () {
    document.addEventListener("DOMContentLoaded", function (event) {
        const landingPageModal = new LandingPageModal();
        const modalTabs = new Tabs();
        const loginForm = new LoginForm();
        const polaroidGrid = new PolaroidGridComponent("landingpage-polaroid-grid");
    });
})();
