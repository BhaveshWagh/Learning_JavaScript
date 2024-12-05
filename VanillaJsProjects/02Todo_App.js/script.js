const form = document.querySelector("#form");
const input = document.querySelector("#item");
const todoList = document.querySelector(".todos");

// add todo's function

const addTodo = (todo) => {
  todo.preventDefault();

  const inputValue = input.value;

  if (inputValue === "") {
    showAlert("Please fill in the field", "danger");
  } else {
    // create todo:
    const newTodo = document.createElement("div");
    newTodo.classList = "todo";
    newTodo.innerHTML = `
    <li>${inputValue}</li>
    <i class="fa-solid fa-xmark delete"></i>
    `;

    // append new Todo the todo List

    todoList.appendChild(newTodo);
  }
  input.value = "";
};

// Remove todo from the todo list
const deleteTodo = (e) => {
  const todo = e.target;
  if (todo.classList.contains("delete")) {
    todo.parentElement.remove();
    showAlert("Todo removed", "success");
  }
  console.log(todo);
};

// Show alert
const showAlert = (message, classname) => {
  const div = document.createElement("div");
  div.className = `alert alert-${classname}`;
  div.appendChild(document.createTextNode(message));
  const container = document.querySelector(".content");
  container.insertBefore(div, form);

  setTimeout(() => document.querySelector(".alert").remove(), 1000);
};
form.addEventListener("submit", addTodo);
todoList.addEventListener("click", deleteTodo);
