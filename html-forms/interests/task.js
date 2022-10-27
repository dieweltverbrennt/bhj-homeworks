const interestsCheckboxes = Array.from(document.getElementsByClassName("interest__check"));
let parentList = [];

for(let interest of interestsCheckboxes) {
    if(!interest.closest("ul").classList.contains("interests")) {
        parentList.push(interest);
    }
}

for(let parent of parentList) {
    parent.addEventListener("change", () => {
        const childrenList = Array.from(parent.closest("li").querySelector(".interests").querySelectorAll(".interest__check"));
        if(parent.checked) {
            childrenList.forEach(item => item.checked = true);
        }
        else {
            childrenList.forEach(item => item.checked = false); 
        }
    });
}



