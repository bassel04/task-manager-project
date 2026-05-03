function addTask() {
    let taskInput = document.getElementById("taskInput");
    let deadlineInput = document.getElementById("deadlineInput");
    let taskList = document.getElementById("taskList");

    let taskText = taskInput.value;
    let deadline = deadlineInput.value;

    if (taskText === "") {
        alert("Please enter a task");
        return;
    }

    let li = document.createElement("li");

    li.innerHTML = `
        <span>${taskText} - Deadline: ${deadline || "No deadline"}</span>
        <button onclick="deleteTask(this)">Delete</button>
    `;

    taskList.appendChild(li);

    taskInput.value = "";
    deadlineInput.value = "";
}

function deleteTask(button) {
    button.parentElement.remove();
}