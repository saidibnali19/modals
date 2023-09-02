const modal = document.querySelector("[data-modal]");
const openModalButton = document.querySelector("[data-open-modal]");
const closeModalButton = document.querySelector("[data-close-modal]");

openModalButton.addEventListener("click", () => modal.showModal());
closeModalButton.addEventListener("click", () => modal.close());
