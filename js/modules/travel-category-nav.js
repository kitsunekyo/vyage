import { TRAVEL_CATEGORIES } from "./constants.js";

export class TravelCategoryNav {
    constructor(selector) {
        this.$root = document.querySelector(selector);
        this.renderNav();
    }

    renderNav() {
        TRAVEL_CATEGORIES.forEach((category) => {
            const $item = this.createNavItem(category);
            this.$root.appendChild($item);
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
        return $item;
    }
}
