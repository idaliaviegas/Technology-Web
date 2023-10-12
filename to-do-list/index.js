function addTask() {
    var taskInput = document.getElementById("taskInput");
    var taskText = taskInput.value.trim();

    if (taskText !== "") {
        var taskList = document.getElementById("taskList");
        var listItem = document.createElement("li");
        listItem.textContent = taskText;
        taskList.appendChild(listItem);

        // Bersihkan input
        taskInput.value = "";
    }
}