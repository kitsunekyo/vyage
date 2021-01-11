import { Modal } from "./modules/modal.js";
import { PolaroidGridComponent } from "./modules/polaroid-grid.js";

class Tabs {
    constructor() {
        this.$links = document.querySelectorAll("[data-tab-link]");
        this.$tabs = document.querySelectorAll("[data-tab]");

        this.$links.forEach((link) => {
            link.addEventListener("click", (e) => this.handleLinkClick(e));
        });

        this.$tabs[0].style.display = "block";
        this.$links[0].classList.add("tab__header-link--active");
    }

    handleLinkClick(e) {
        const targetTab = e.target.dataset.tabLink;

        this.$links.forEach((link) => {
            link.classList.remove("tab__header-link--active");
        });
        e.target.classList.add("tab__header-link--active");

        this.openTab(targetTab);
    }

    openTab(tabName) {
        const tab = document.querySelector(`[data-tab="${tabName}"]`);
        this.$tabs.forEach((tab) => {
            tab.style.removeProperty("display");
        });
        tab.style.display = "block";
    }
}

class Header {
    constructor() {
        this.registerLogoutButton();
    }

    async logout() {
        const res = await fetch("/auth/logout.php", {
            method: "POST",
        });
        if (res.status === 200) {
            location.reload();
        }
    }

    registerLogoutButton() {
        const $logout = document.getElementById("logout");
        if (!$logout) return;

        $logout.addEventListener("click", (e) => {
            e.preventDefault();
            this.logout();
        });
    }
}

(function () {
    document.addEventListener("DOMContentLoaded", function () {
        const header = new Header();
        const loginModal = new Modal("login");
        const modalTabs = new Tabs();
        const polaroidGrid = new PolaroidGridComponent("landingpage-polaroid-grid");
    });
})();
