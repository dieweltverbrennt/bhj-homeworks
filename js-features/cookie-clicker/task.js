let timeStart = new Date();

const cookie = document.getElementById("cookie");
let clicker__counter = document.getElementById("clicker__counter");
let clicker__speed = document.getElementById("clicker__speed");

cookie.onclick = () => {
    clicker__counter.textContent = Number(clicker__counter.textContent) + 1;
    cookie.width === 200 ? cookie.width = 300 : cookie.width = 200;
    const timeEnd = new Date();
    clicker__speed.textContent = (clicker__counter.textContent / (timeEnd - timeStart) * 1000).toFixed(2);
};

