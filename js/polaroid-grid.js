export class PolaroidGridComponent {
    _$root;

    constructor(rootId) {
        this._$root = document.getElementById(rootId);
        this._$root.innerHTML = "";

        this._loadPosts();
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
