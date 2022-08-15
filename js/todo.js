const todoForm = document.getElementById("todo-form");
const todoInput = todoForm.querySelector("input");
const todoList = document.getElementById("todo-list");

let todos = [];
const TODOS_KEY = "todos";

function saveTodos() {
    localStorage.setItem(TODOS_KEY, JSON.stringify(todos));
}

function deleteTodo(event) {
    const li = event.target.parentElement;
    li.remove();
}

function paintToDo(newTodo) {
    const li = document.createElement("li");
    const span = document.createElement("span");
    const button = document.createElement("button");

    span.innerText = newTodo;
    button.innerText = "🗑";
    button.addEventListener("click", deleteTodo);

    li.appendChild(span);
    li.appendChild(button);
    todoList.appendChild(li);
}

function handleToDoSubmit(event) {
    event.preventDefault();
    
    const newTodo = todoInput.value;
    todoInput.value = "";
    todos.push(newTodo);
    paintToDo(newTodo);
    saveTodos();
}

todoForm.addEventListener("submit", handleToDoSubmit);

const savedTodos = localStorage.getItem(TODOS_KEY);
if(savedTodos) {
    const parsedTodos = JSON.parse(savedTodos);
    todos = parsedTodos
    parsedTodos.forEach(paintToDo);
}