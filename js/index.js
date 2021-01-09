class LandingPageModal {
    _$body;

    constructor() {
        this._registerDOM();
    }

    _registerDOM() {
        this._$body = document.querySelector("body");

        document.querySelector('[data-modal-open="login"]').addEventListener("click", (e) => {
            e.preventDefault();
            this.open();
        });

        document.querySelector(".overlay").addEventListener("click", (e) => {
            this.close();
        });
    }

    open() {
        this._$body.classList.add("show-overlay");
        this._$body.classList.add("show-modal");
    }

    close() {
        this._$body.classList.remove("show-overlay");
        this._$body.classList.remove("show-modal");
    }
}

(function () {
    document.addEventListener("DOMContentLoaded", function (event) {
        const landingPageModal = new LandingPageModal();
    });
})();
