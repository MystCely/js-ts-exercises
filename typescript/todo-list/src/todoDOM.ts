import {toggleTodo, deleteTodo, Todo} from "./todoLogic";

export function createTodoElement(todo: Todo): HTMLLIElement {
    const li = document.createElement("li");
    li.textContent = todo.text;

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.addEventListener("click", () => {
        li.remove();
        deleteTodo(todo.id);
    });
    li.appendChild(deleteButton);

    const completeButton = document.createElement("button");
    completeButton.textContent = "Complete";
    completeButton.addEventListener("click", () => {
        toggleTodo(todo.id);
        li.style.textDecoration = todo.completed ? "line-through" : "none";
    })
    li.appendChild(completeButton);

    return li;
}