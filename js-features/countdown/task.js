let timer = document.getElementById("timer");

let hours = 0;
let minutes = 0;
let seconds = 5;

timer.textContent = (hours < 10 ? "0" + hours : hours) + ":" + (minutes < 10 ? "0" + minutes : minutes) + ":" + (seconds < 10 ? "0" + seconds : seconds);

setInterval(() => {
    if(hours === 0 && minutes === 0 && seconds === 0) {
        clearInterval();
        alert("Вы победили в конкурсе!");
        location.assign("README.mdd");
    }
    else if(seconds > 0) {
        seconds = seconds - 1;
    }
    else if(minutes > 0 && seconds === 0) {
        minutes = minutes - 1;
        seconds = 59
    }
    else {
        hours = hours - hours;
        minutes = 59;
        seconds = 59;
    }
    timer.textContent = (hours < 10 ? "0" + hours : hours) + ":" + (minutes < 10 ? "0" + minutes : minutes) + ":" + (seconds < 10 ? "0" + seconds : seconds);}, 1000)




