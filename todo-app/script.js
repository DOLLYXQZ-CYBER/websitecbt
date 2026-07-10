const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");

// Load saved tasks when the page opens
window.onload = function () {
    loadTasks();
};

// Add a new task
function addTask() {

    const task = taskInput.value.trim();

    if (task === "") {
        alert("Please enter a task.");
        return;
    }

    createTask(task);

    saveTasks();

    taskInput.value = "";
}

// Create a task element
function createTask(taskText, completed = false) {

    const li = document.createElement("li");

    if (completed) {
        li.classList.add("completed");
    }

    const span = document.createElement("span");
    span.textContent = taskText;

    const actions = document.createElement("div");
    actions.className = "actions";

    // Complete button
    const completeBtn = document.createElement("button");
    completeBtn.textContent = "✔";
    completeBtn.className = "complete-btn";

    completeBtn.onclick = function () {
        li.classList.toggle("completed");
        saveTasks();
    };

    // Delete button
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "🗑";
    deleteBtn.className = "delete-btn";

    deleteBtn.onclick = function () {
        li.remove();
        saveTasks();
    };

    actions.appendChild(completeBtn);
    actions.appendChild(deleteBtn);

    li.appendChild(span);
    li.appendChild(actions);

    taskList.appendChild(li);
}

// Save tasks
function saveTasks() {

    const tasks = [];

    document.querySelectorAll("#taskList li").forEach(li => {

        tasks.push({
            text: li.querySelector("span").textContent,
            completed: li.classList.contains("completed")
        });

    });

    localStorage.setItem("tasks", JSON.stringify(tasks));
}

// Load tasks
function loadTasks() {

    const saved = JSON.parse(localStorage.getItem("tasks")) || [];

    saved.forEach(task => {
        createTask(task.text, task.completed);
    });

}

// Press Enter to add a task
taskInput.addEventListener("keydown", function(event){

    if(event.key === "Enter"){
        addTask();
    }

});