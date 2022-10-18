const popupArray = Array.from(document.querySelectorAll('div.modal__close_times'));
const modalMain = document.getElementById("modal_main");
const modalSuccess = document.getElementById("modal_success");
const showSuccess = document.querySelector('div.modal a.btn_danger');

modalMain.classList.add("modal_active");
popupArray.forEach((element) => (element.onclick = () => (element.closest("div.modal").classList.remove("modal_active"))));
showSuccess.onclick = () => {
    modalMain.classList.remove('modal_active');
    modalSuccess.classList.add('modal_active');
}

