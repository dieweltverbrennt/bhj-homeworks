const pollTitle = document.getElementById("poll__title");
const pollAnswers = document.getElementById("poll__answers")

const xhr = new XMLHttpRequest();
xhr.open('GET', "https://netology-slow-rest.herokuapp.com/poll.php");
xhr.send();

xhr.addEventListener("readystatechange", () => {
    if(xhr.readyState === xhr.DONE && xhr.status === 200) {
        const pollTitleData = JSON.parse(xhr.responseText).data.title;
        const pollAnswersData = JSON.parse(xhr.responseText).data.answers;
        pollTitle.textContent = pollTitleData;
        for(let pollAnswer in pollAnswersData) {
            const insertedPollAnswer = `<button class="poll__answer">${pollAnswersData[pollAnswer]}</button>`;
            pollAnswers.insertAdjacentHTML("beforeend", insertedPollAnswer)
        }
        const answers = Array.from(document.querySelectorAll(".poll__answer"));
        answers.forEach((item) => item.addEventListener("click", () => alert("Спасибо, ваш голос засчитан!")))
    }
})