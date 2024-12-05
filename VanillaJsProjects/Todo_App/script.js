document.addEventListener("DOMContentLoaded", () => {
  const todoInput = document.getElementById("todoInput");
  const todoList = document.getElementById("todoList");

  // Function to add a new task
  function addTask(taskText) {
    const listItem = document.createElement("li");
    listItem.className = "todo-item";

    const taskSpan = document.createElement("span");
    taskSpan.textContent = taskText;

    const editButton = document.createElement("button");
    editButton.textContent = "Edit";
    editButton.className = "btn btn-edit";
    editButton.onclick = () => editTask(listItem, taskSpan);

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.className = "btn btn-delete";
    deleteButton.onclick = () => deleteTask(listItem);

    listItem.appendChild(taskSpan);
    listItem.appendChild(editButton);
    listItem.appendChild(deleteButton);

    todoList.appendChild(listItem);
  }

  // Function to delete a task
  function deleteTask(taskItem) {
    todoList.removeChild(taskItem);
  }

  // Function to edit a task
  function editTask(taskItem, taskSpan) {
    const newTaskText = prompt("Edit your task:", taskSpan.textContent);
    if (newTaskText !== null && newTaskText.trim() !== "") {
      taskSpan.textContent = newTaskText.trim();
    }
  }

  // Handle input and create a new task
  todoInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
      const taskText = todoInput.value.trim();
      if (taskText) {
        addTask(taskText);
        todoInput.value = "";
      }
    }
  });
});
