const menuLinks = Array.from(document.querySelectorAll(".menu__link"));
const subMenuLinks = Array.from(document.querySelectorAll(".menu_sub"))


for(let menuLink of menuLinks) {
    menuLink.onclick = () => {
        const parent = menuLink.parentElement;
        if(parent.querySelector(".menu_active")) {
            parent.querySelector(".menu_active").classList.remove("menu_active");
            return false;
        }
        if(parent.querySelector(".menu_sub")) {
            for(let subMenuLink of subMenuLinks) {
                const activeLink = subMenuLink.classList.contains("menu_active");
                if(activeLink) {
                    subMenuLink.classList.remove("menu_active");
                }
            }
            parent.querySelector(".menu_sub").classList.add("menu_active");
            return false;
        }
        if(!menuLink.closest(".menu_sub")) {
            return false;
        }
    }
}
