import { Modal } from "./modules/modal.js";
import { PolaroidGridComponent } from "./modules/polaroid-grid.js";
import { TravelCategoryNav } from "./modules/travel-category-nav.js";

(function () {
    function loadPosts() {
        fetch("/api/posts.php")
            .then((res) => res.json())
            .then((posts) => {
                const polaroidGrid = new PolaroidGridComponent("posts-grid", posts);
            });
    }

    function registerCreatePost() {
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
                    },
                    (e) => {
                        console.log(e);
                    }
                );
        });
    }

    document.addEventListener("DOMContentLoaded", function () {
        const travelCategoryNav = new TravelCategoryNav(".category-nav");
        const createPostModal = new Modal("create-post");

        loadPosts();
        registerCreatePost();
    });
})();
