const modal = document.getElementById("subscribe-modal");
const modalClose = document.querySelector(".modal__close");

function getCookie(name) {
    const value = ";" + document.cookie;
    let parts = value.split(";" + name + "=");
    if(parts.length === 2) {
        return parts.pop().split(";").shift();
    }
}

if(getCookie("isClosed") != "true") {
    modal.classList.add("modal_active");
}

modalClose.addEventListener("click", () => {
    modal.classList.remove("modal_active");
    document.cookie = "isClosed=true";
})


