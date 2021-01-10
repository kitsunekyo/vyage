import { LANDINGPAGE_POLAROIDS, LANDINGPAGE_USERS } from "./constants.js";

export class PolaroidGridComponent {
    _$root;
    _isDemo = false;

    constructor(rootId, isDemo = false) {
        this._$root = document.getElementById(rootId);
        this._$root.innerHTML = "";

        this._isDemo = isDemo;

        if (isDemo) {
            this._getDemoPosts();
        } else {
            this._loadPosts();
        }
    }

    async _getDemoPosts() {
        const data = LANDINGPAGE_POLAROIDS.map((p) => {
            const user = LANDINGPAGE_USERS.find((u) => u.id === p.creatorID);
            return {
                ...p,
                user,
            };
        });
        this._render(data);
    }

    async _loadPosts() {
        const res = await fetch("/app/api/posts.php");
        const data = await res.json();
        const posts = data;

        this._render(posts);
    }

    _render(posts) {
        this._$root.innerHTML = "";

        const grid = document.createElement("div");
        grid.classList.add("polaroid-grid__container");

        if (this._isDemo) {
            grid.classList.add("polaroid-grid__container--demo");
        }

        const elements = posts.map((post) => this._createPolaroidEl(post));

        elements.forEach((element) => {
            grid.appendChild(element);
        });

        this._$root.appendChild(grid);
    }

    _createPolaroidEl(polaroid) {
        const el = document.createElement("div");
        el.classList.add("polaroid");
        const image = new Image();
        image.src = polaroid.coverImg;

        // todo: get avatar url and use instead of polaroid.creatorID

        el.innerHTML = `
            <div class="polaroid__image">
                <img src="${polaroid.coverImg}" alt="${polaroid.title}">
            </div>
            <div class="polaroid__meta">
                <div class="polaroid__user">
                    <div class="polaroid__avatar">
                        <img src="${polaroid.user.profilePic}" alt="${polaroid.user.username}">
                    </div>
                    <div class="polaroid__username">${polaroid.user.username}</div>
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
