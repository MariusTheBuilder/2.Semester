// Array to hold all tasks
let tasks = [];

function addTask() {
  const input = document.getElementById("taskInput");
  const text = input.value.trim();

  if (text === "") return; // don't add empty tasks

  tasks.push({ text: text, done: false });
  input.value = "";
  renderTasks();
}

function toggleTask(index) {
  tasks[index].done = !tasks[index].done;
  renderTasks();
}

function deleteTask(index) {
  tasks.splice(index, 1); // remove 1 item at position index
  renderTasks();
}

function renderTasks() {
  const list = document.getElementById("taskList");
  list.innerHTML = ""; // clear current list

  tasks.forEach(function(task, index) {
    const li = document.createElement("li");
    li.textContent = task.text;
    if (task.done) li.classList.add("done");

    li.addEventListener("click", function() {
      toggleTask(index);
    });

    // Delete button inside each list item
    const btn = document.createElement("button");
    btn.textContent = "✕";
    btn.style.marginLeft = "10px";
    btn.addEventListener("click", function(e) {
      e.stopPropagation(); // prevent toggling when deleting
      deleteTask(index);
    });

    li.appendChild(btn);
    list.appendChild(li);
  });
}

// Allow pressing Enter to add task
document.getElementById("taskInput").addEventListener("keydown", function(e) {
  if (e.key === "Enter") addTask();
});