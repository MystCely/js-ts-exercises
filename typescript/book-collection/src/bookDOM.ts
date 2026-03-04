import {type Book, deleteBook, toggleBook} from "./bookLogic.ts";

export function createBookElement(book: Book): HTMLLIElement {
    const li = document.createElement("li");
    const span = document.createElement("span");

    function renderBookText(): void {
        span.textContent = `${book.title} || ${book.author}`;
    }

    renderBookText();
    li.appendChild(span);

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.addEventListener("click", () => {
        li.remove();
        deleteBook(book.id);
    });
    li.appendChild(deleteButton);

    const completeButton = document.createElement("button");
    completeButton.textContent = "Complete";
    completeButton.addEventListener("click", () => {
        toggleBook(book.id);
        li.style.color = book.hasRead ? "grey" : "black";
    });
    li.appendChild(completeButton);

    return li;
}