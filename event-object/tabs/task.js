const tabs = Array.from(document.querySelectorAll(".tab"));
const tabContents = Array.from(document.querySelectorAll(".tab__content"));

let currentTab;

function changeTab(index) {
    currentTab = tabs.findIndex(item => item.classList.contains("tab_active"));
    tabs[currentTab].classList.remove("tab_active");
    tabContents[currentTab].classList.remove("tab__content_active");
    tabs[index].classList.add("tab_active");
    tabContents[index].classList.add("tab__content_active");
}

for (let i = 0; i < tabs.length; i++) {
    tabs[i].onclick = () => {
        changeTab(i);
    };
}
