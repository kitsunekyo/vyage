import { PolaroidGridComponent } from "./polaroid-grid.js";
import { TravelCategoryNav } from "./travel-category-nav.js";

(function () {
    document.addEventListener("DOMContentLoaded", function (event) {
        const travelCategoryNav = new TravelCategoryNav(".category-nav");

        fetch("/app/api/posts.php")
            .then((res) => res.json())
            .then((posts) => {
                const polaroidGrid = new PolaroidGridComponent("posts-grid", posts);
            });
    });
})();
