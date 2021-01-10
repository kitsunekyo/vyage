export class Modal {
    constructor(name) {
        this.name = name;
        this.$modal = document.querySelector(`[data-modal="${this.name}"]`);
        this.registerButtons();
    }
    registerButtons() {
        this.$body = document.querySelector("body");

        const modalButton = document.querySelector(`[data-modal-open="${this.name}"]`);
        if (!modalButton) return;

        document.querySelector(`[data-modal-open="${this.name}"]`).addEventListener("click", (e) => {
            e.preventDefault();
            this.openModal();
        });

        document.querySelector(".overlay").addEventListener("click", () => {
            this.closeModal();
        });
    }

    openModal() {
        this.$body.classList.add("show-overlay");
        this.$modal.style.display = "block";
    }

    closeModal() {
        this.$body.classList.remove("show-overlay");
        this.$modal.style.removeProperty("display");
    }
}
