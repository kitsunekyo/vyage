import { PolaroidGridComponent } from "./polaroid-grid.js";

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

    async _login(credentials) {
        await fetch("/app/auth/login.php", {
            method: "POST",
            body: credentials,
            headers: {
                "Content-Type": "application/json",
            },
        });
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
        this._registerLoginModal();
    }
}

class Header {
    _$body;

    constructor() {
        this._registerLoginButton();
        this._registerLogoutButton();
    }

    async _logout() {
        const res = await fetch("/app/auth/logout.php", {
            method: "POST",
        });
        if (res.status === 200) {
            location.reload();
        }
    }

    _registerLogoutButton() {
        const $logout = document.getElementById("logout");
        if (!$logout) return;

        $logout.addEventListener("click", (e) => {
            e.preventDefault();
            this._logout();
        });
    }

    _registerLoginButton() {
        this._$body = document.querySelector("body");

        const modalButton = document.querySelector('[data-modal-open="login"]');
        if (!modalButton) return;

        document.querySelector('[data-modal-open="login"]').addEventListener("click", (e) => {
            e.preventDefault();
            this._openModal();
        });

        document.querySelector(".overlay").addEventListener("click", (e) => {
            this._closeModal();
        });
    }

    _openModal() {
        this._$body.classList.add("show-overlay");
        this._$body.classList.add("show-modal");
    }

    _closeModal() {
        this._$body.classList.remove("show-overlay");
        this._$body.classList.remove("show-modal");
    }
}

(function () {
    document.addEventListener("DOMContentLoaded", function (event) {
        const header = new Header();
        const modalTabs = new Tabs();
        // const loginForm = new LoginForm(); // not needed because sessions :(
        const polaroidGrid = new PolaroidGridComponent("landingpage-polaroid-grid");
    });
})();
