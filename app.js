const form = document.getElementById("todo-form");
const input = document.getElementById("todo-input");
const todoList = document.getElementById("todo-list");
const itemsLeft = document.getElementById("items-left");
const clearBtn = document.getElementById("clear-completed");
const filterBtns = document.querySelectorAll(".filter");

let todos = [];

// Add task
form.addEventListener("submit", function(event) {
    event.preventDefault();
    const text = input.value.trim();
    if (!text) return;

    const todo = { id: Date.now(), text, completed: false };
    todos.push(todo);
    input.value = "";
    render();
});

// Render list
function render() {
    const activeFilter = document.querySelector(".filter.active").dataset.filter;

    const filtered = todos.filter(todo => {
        if (activeFilter === "active") return !todo.completed;
        if (activeFilter === "completed") return todo.completed;
        return true;
    });

    todoList.innerHTML = "";
    filtered.forEach(todo => {
        const li = document.createElement("li");
        li.textContent = todo.text;
        if (todo.completed) li.classList.add("completed");

        // Toggle on click
        li.addEventListener("click", function() {
            todo.completed = !todo.completed;
            render();
        });

        // Delete button
        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "Delete";
        deleteBtn.addEventListener("click", function(e) {
            e.stopPropagation();
            todos = todos.filter(t => t.id !== todo.id);
            render();
        });

        li.appendChild(deleteBtn);
        todoList.appendChild(li);
    });

    // Update count
    const remaining = todos.filter(t => !t.completed).length;
    itemsLeft.textContent = `${remaining} items left`;
}

// Filter buttons
filterBtns.forEach(btn => {
    btn.addEventListener("click", function() {
        filterBtns.forEach(b => b.classList.remove("active"));
        btn.classList.add("active");
        render();
    });
});

// Clear completed
clearBtn.addEventListener("click", function() {
    todos = todos.filter(t => !t.completed);
    render();
});

render();