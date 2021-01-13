import { Modal } from "./modules/modal.js";
import { PolaroidGridComponent } from "./modules/polaroid-grid.js";
import { COUNTRIES, TRAVEL_CATEGORIES } from "./modules/constants.js";

class DashboardComponent {
    constructor() {
        this.posts = [];
        this.$categoryNav = document.querySelector(".category-nav");
        this.polaroidGrid = new PolaroidGridComponent("posts-grid", this.posts);

        document.querySelector(".category-search").addEventListener("change", (e) => {
            const searchValue = e.target.value;
            this.clearFilter();
            this.filterPosts(["title", "country"], searchValue);
            e.target.value = searchValue; // reset value as clearFilter deletes it
        });

        this.renderCategoryFilter();
        this.loadPosts();
    }

    filterPosts(keys, value) {
        const regex = new RegExp(typeof value === "string" ? value.toLowerCase() : value);

        const filteredPosts = this.posts.filter((post) =>
            keys.some((key) => {
                // convert value to string, and set to all lowercase -> otherwise regex search wont be possible
                const val =
                    post[key] === null
                        ? ""
                        : typeof post[key] !== "string"
                        ? post[key].toString().toLowerCase()
                        : post[key].toLowerCase();
                return val && val.match(regex) ? true : false;
            })
        );
        document.querySelector(".category-nav__clear").removeAttribute("disabled");
        this.polaroidGrid.render(filteredPosts);
    }

    clearFilter() {
        document.querySelector(".category-search").value = "";
        document.querySelector(".category-nav__clear").setAttribute("disabled", "");
        this.resetCategoryNavItemClasses();
        this.polaroidGrid.render(this.posts);
    }

    renderCategoryFilter() {
        TRAVEL_CATEGORIES.forEach((category) => {
            const $item = this.createNavItem(category);
            this.$categoryNav.appendChild($item);
        });

        document.querySelector(".category-nav__clear").addEventListener("click", (e) => {
            this.clearFilter();
        });
    }

    createNavItem(category) {
        const $item = document.createElement("a");
        $item.classList.add("category-nav__item");
        $item.innerHTML = `
                <div class="category-nav__icon">
                    <img src="${category.categoryIcon}" alt="${category.travelCategory}">
                </div>
                <span>${category.travelCategory}</span>
            `;

        $item.addEventListener("click", (e) => {
            this.clearFilter();
            e.currentTarget.classList.add("category-nav__item--active");
            this.filterPosts(["categoryID"], parseInt(category.categoryID));
        });

        return $item;
    }

    resetCategoryNavItemClasses() {
        document.querySelectorAll(".category-nav__item").forEach((navItem) => {
            navItem.classList.remove("category-nav__item--active");
        });
    }

    loadPosts() {
        fetch("/api/posts.php")
            .then((res) => res.json())
            .then((posts) => {
                this.posts = posts;
                this.polaroidGrid.render(posts);
            });
    }
}

(function () {
    function setupCreatePostDialog() {
        const $form = document.querySelector("#createPostForm");
        $form.addEventListener("submit", (e) => {
            e.preventDefault();
            fetch("/api/posts.php", {
                method: "POST",
                body: new FormData($form),
            })
                .then((res) => {
                    if (!res.ok) {
                        throw new Error(res.statusText);
                    }
                    return res.json();
                })
                .then(
                    (data) => {
                        console.log(data);
                        location.reload();
                    },
                    (e) => {
                        console.log(e);
                    }
                );
        });

        // register country select
        const $countrySelect = $form.querySelector('select[name="country"]');
        COUNTRIES.forEach((country) => {
            const $option = document.createElement("option");
            $option.value = country.name;
            $option.innerText = country.name;

            $countrySelect.appendChild($option);
        });

        // register category select
        const $categorySelect = $form.querySelector('select[name="categoryID"]');
        TRAVEL_CATEGORIES.forEach((category) => {
            const $option = document.createElement("option");
            $option.value = category.categoryID;
            $option.innerText = category.travelCategory;

            $categorySelect.appendChild($option);
        });
    }

    document.addEventListener("DOMContentLoaded", function () {
        const createPostModal = new Modal("create-post");
        const dashboardComponent = new DashboardComponent();

        setupCreatePostDialog();
    });
})();
