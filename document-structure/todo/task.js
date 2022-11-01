const taskInput = document.getElementById("task__input");
const taskList = document.getElementById("tasks__list");
const taskAddButton = document.getElementById("tasks__add");
let taskArray = [];
let localStorage = [];


taskAddButton.addEventListener("click", (e) => {
    e.preventDefault();
    if(taskInput.value != "") {
        addTask(taskInput.value);
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
    const taskListItem = document.querySelector(".task");
    const removeTaskButton = document.querySelector(".task__remove");
    removeTaskButton.addEventListener("click", () => taskListItem.remove());
}

