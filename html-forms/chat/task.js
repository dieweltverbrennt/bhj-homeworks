const openChat = document.querySelector(".chat-widget__side");
const chatWidget = document.querySelector(".chat-widget");
const chatInput = document.getElementById("chat-widget__input");
const chatMessages = document.getElementById("chat-widget__messages");

// open chat
openChat.addEventListener("click", () => chatWidget.classList.add("chat-widget_active"));

//send message
function sendMessage() {
    const time = new Date();
    const timeMessageSent = ("0" + time.getHours()).slice(-2) + ":" + ("0" + time.getMinutes()).slice(-2);

    if(chatInput.value != "") {
        chatMessages.innerHTML += 
        `<div class="message message_client">
            <div class="message__time">${timeMessageSent}</div>
            <div class="message__text">
                ${chatInput.value.trim()}
            </div>
        </div>`;
      chatInput.value = "";
      chatMessages.scrollIntoView({block: "end", inline: "end", behavior: "smooth"})
    }
}

// robot`s answer
const answers = [
    'До свидания!',
    'Убирайтесь',
    'Кто тут?',
    'Мы ничего не будем вам продавать!',
    'Где ваша совесть?!'
];

function randomAnswer(arr) {
    const time = new Date();
    const timeMessageSent = ("0" + time.getHours()).slice(-2) + ":" + ("0" + time.getMinutes()).slice(-2);
    let robotAnswer = arr[Math.floor(Math.random() * 5)];
    
    chatMessages.innerHTML += 
    `<div class="message">
        <div class="message__time">${timeMessageSent}</div>
        <div class="message__text">${robotAnswer}</div>
    </div>`;
    chatMessages.scrollIntoView({block: "end", inline: "end", behavior: "smooth"});
}


chatInput.addEventListener("keydown", (event) => {
    if(event.keyCode === 13) {
        sendMessage();
        setTimeout(() => randomAnswer(answers), 1000);
    }
});

// inactivity
const inactivityTime = 30;
let timer = 0;

setInterval(() => {
    if(chatWidget.classList.contains("chat-widget_active")) {
        if(timer === inactivityTime) {
            randomAnswer(answers);
            timer = 0;
        }
        timer++;
    }
    
}, 1000)

document.addEventListener("mousemove", () => timer = 0);
document.addEventListener("keypress", () => timer = 0)

