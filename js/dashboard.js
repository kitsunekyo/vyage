import { PolaroidGridComponent } from "./modules/polaroid-grid.js";
import { TravelCategoryNav } from "./modules/travel-category-nav.js";

(function () {
    document.addEventListener("DOMContentLoaded", function () {
        const travelCategoryNav = new TravelCategoryNav(".category-nav");

        fetch("/api/posts.php")
            .then((res) => res.json())
            .then((posts) => {
                const polaroidGrid = new PolaroidGridComponent("posts-grid", posts);
            });
    });
})();
