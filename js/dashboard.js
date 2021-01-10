import { Modal } from "./modules/modal.js";
import { PolaroidGridComponent } from "./modules/polaroid-grid.js";
import { TravelCategoryNav } from "./modules/travel-category-nav.js";

(function () {
    document.addEventListener("DOMContentLoaded", function () {
        const travelCategoryNav = new TravelCategoryNav(".category-nav");
        const createPostModal = new Modal("create-post");

        fetch("/api/posts.php")
            .then((res) => res.json())
            .then((posts) => {
                const polaroidGrid = new PolaroidGridComponent("posts-grid", posts);
            });
    });
})();
