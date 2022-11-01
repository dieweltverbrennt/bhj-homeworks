const taskInput = document.getElementById("task__input");
const taskList = document.getElementById("tasks__list");
const taskAddButton = document.getElementById("tasks__add");

taskAddButton.addEventListener("click", (e) => {
    e.preventDefault();
    if(taskInput.value.trim() != "") {
        addTask(taskInput.value.trim());
        taskInput.value = "";
    }
})

function addTask(value) {
    const insertedTask = 
    `<div class="task">
        <div class="task__title">${value}</div>
        <a href="#" class="task__remove">&times;</a>
    </div>`
    taskList.insertAdjacentHTML("beforeend", insertedTask);
}

taskList.addEventListener("click", event => {
    if(event.target.tagName === "A") {
        event.target.closest(".task").remove();
   }
})
