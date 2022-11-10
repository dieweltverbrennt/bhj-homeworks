const pollTitle = document.getElementById("poll__title");
const pollAnswers = document.getElementById("poll__answers")

const xhr = new XMLHttpRequest();
xhr.open('GET', "https://netology-slow-rest.herokuapp.com/poll.php");
xhr.send();

xhr.addEventListener("load", () => {
    if(xhr.readyState === xhr.DONE && xhr.status === 200) {
        const pollTitleData = JSON.parse(xhr.responseText).data.title;
        const pollAnswersData = JSON.parse(xhr.responseText).data.answers;
        pollTitle.textContent = pollTitleData;
        const pollFragment = new DocumentFragment();
        for(const pollAnswer in pollAnswersData) {
            const pollButton = document.createElement('button');
            pollButton.classList.add("poll__answer")
            pollButton.textContent = pollAnswersData[pollAnswer];
            pollFragment.append(pollButton);
        }
        pollAnswers.append(pollFragment)
    }
    const answers = Array.from(document.querySelectorAll(".poll__answer"));
    answers.forEach((item) => item.addEventListener("click", () => alert("Спасибо, ваш голос засчитан!")))
})