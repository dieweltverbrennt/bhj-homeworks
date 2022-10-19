const dropdownValue = document.querySelector(".dropdown__value");
const dropdownList = document.querySelector(".dropdown__list");
const dropdownItems = document.querySelectorAll(".dropdown__item")

function dropdownMenu() {
    dropdownList.classList.contains("dropdown__list_active") ? dropdownList.classList.remove("dropdown__list_active") : dropdownList.classList.add("dropdown__list_active");
}

dropdownValue.addEventListener("click", dropdownMenu);

for (let dropdownItem of dropdownItems) {
    dropdownItem.onclick = () => {
        dropdownValue.textContent = dropdownItem.textContent;
        dropdownValue.addEventListener("click", dropdownMenu);
        return false;
    }
    dropdownItem.addEventListener("click", dropdownMenu);
}