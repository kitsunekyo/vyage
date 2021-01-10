import { LANDINGPAGE_POLAROIDS, LANDINGPAGE_USERS } from "./constants.js";

export class PolaroidGridComponent {
    _$root;
    _isDemo = false;

    constructor(rootId, posts = []) {
        this._$root = document.getElementById(rootId);
        this._$root.innerHTML = "";

        this._isDemo = posts.length <= 0;

        if (this._isDemo) {
            this._getDemoPosts();
        } else {
            this._render(posts);
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
