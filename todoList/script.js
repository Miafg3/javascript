const taskInput = document.getElementById("task");
const addButton = document.getElementById("add");
const todosList = document.getElementById("todos");

const getTodos = () => JSON.parse(localStorage.getItem("todos")) || [];

const saveTodos = (todos) =>
    localStorage.setItem("todos", JSON.stringify(todos));

const renderTodos = () => {
    todosList.innerHTML = "";

    const todos = getTodos();

    todos.forEach((todo, index) => {
        const li = document.createElement("li");
        li.textContent = todo;

        const button = document.createElement("button");
        button.textContent = "Delete";
        button.classList.add("remove");
        button.dataset.index = index;

        li.appendChild(button);
        todosList.appendChild(li);
    });
};

const addTodo = () => {
    const task = taskInput.value.trim();
    if (!task) return;

    const todos = getTodos();
    todos.push(task);
    saveTodos(todos);

    taskInput.value = "";
    renderTodos();
};

const deleteTodo = (e) => {
    if (!e.target.classList.contains("remove")) return;

    const index = e.target.dataset.index;
    const todos = getTodos();

    todos.splice(index, 1);
    saveTodos(todos);
    renderTodos();
};

addButton.addEventListener("click", addTodo);
todosList.addEventListener("click", deleteTodo);

renderTodos();