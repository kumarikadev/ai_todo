const form = document.getElementById("todo-form");
const input = document.getElementById("todo-input");
const list = document.getElementById("todo-list");
const count = document.getElementById("todo-count");

const STORAGE_KEY = "todos";

let todos = loadTodos();

function loadTodos() {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
  } catch {
    return [];
  }
}

function saveTodos() {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(todos));
  } catch {
    // Storage unavailable; tasks just won't persist.
  }
}

function render() {
  list.innerHTML = "";

  todos.forEach((todo) => {
    const li = document.createElement("li");
    li.className = "todo-item" + (todo.done ? " done" : "");

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = todo.done;
    checkbox.addEventListener("change", () => toggleTodo(todo.id));

    const text = document.createElement("span");
    text.textContent = todo.text;

    const deleteBtn = document.createElement("button");
    deleteBtn.className = "delete-btn";
    deleteBtn.textContent = "✕";
    deleteBtn.title = "Remove task";
    deleteBtn.addEventListener("click", () => removeTodo(todo.id));

    li.append(checkbox, text, deleteBtn);
    list.appendChild(li);
  });

  const remaining = todos.filter((t) => !t.done).length;
  count.textContent = todos.length
    ? `${remaining} of ${todos.length} task${todos.length === 1 ? "" : "s"} remaining`
    : "No tasks yet… eerily quiet 👻";
}

function addTodo(text) {
  todos.push({ id: Date.now(), text, done: false });
  saveTodos();
  render();
}

function toggleTodo(id) {
  const todo = todos.find((t) => t.id === id);
  if (todo) todo.done = !todo.done;
  saveTodos();
  render();
}

function removeTodo(id) {
  todos = todos.filter((t) => t.id !== id);
  saveTodos();
  render();
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const text = input.value.trim();
  if (!text) return;
  addTodo(text);
  input.value = "";
  input.focus();
});

render();
