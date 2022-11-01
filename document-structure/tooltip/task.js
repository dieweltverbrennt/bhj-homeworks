const tooltipArray = Array.from(document.querySelectorAll(".has-tooltip"));

tooltipArray.forEach(item => item.addEventListener("click", (event) => {
    event.preventDefault();
    const activeTip = tooltipArray.findIndex(item => item.nextSibling.classList != undefined);
    activeTip != -1 ? tooltipArray[activeTip].nextSibling.remove() : 0;
    if(tooltipArray[activeTip] != item) {
        addTip(item);
    }
}))

function addTip(item) {
    // left coordinate
    const coordinate = item.offsetLeft;
    const tipText = `<div class="tooltip tooltip_active" style="left:${coordinate}px">${item.getAttribute("title")}</div>`;
    item.insertAdjacentHTML("afterend", tipText);
}
