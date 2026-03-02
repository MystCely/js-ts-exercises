import {addTodo} from "./todoLogic";
import {createTodoElement} from "./todoDOM";

const app = document.getElementById("app");
if (!app) {
    throw new Error("Could not find app");
}

const input = document.createElement("input");
input.type = "text";
input.placeholder = "Add to do…";

const addButton = document.createElement("button");
addButton.textContent = "Add";

const ul = document.createElement("ul");

app.appendChild(input);
app.appendChild(addButton);
app.appendChild(ul);

export function handleAddTodo(): void {
    const text = input.value.trim();
    if (text === "") {
        return;
    }
    const todo = addTodo(text);
    const todoElement = createTodoElement(todo);
    ul.appendChild(todoElement);
    input.value = "";
}

addButton.addEventListener("click", handleAddTodo);
input.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        handleAddTodo();
    }
});