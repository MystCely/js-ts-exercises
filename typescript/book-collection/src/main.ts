import {createBookElement} from "./bookDOM.ts";
import {addBook} from "./bookLogic.ts";

const app = document.getElementById("app");
if (!app) {
    throw new Error("Could not find app");
}

const h1 = document.createElement("h1");
h1.textContent = "Book Collection";

const titleInput = document.createElement("input");
titleInput.type = "text";
titleInput.placeholder = "Title";
const authorInput = document.createElement("input");
authorInput.type = "text";
authorInput.placeholder = "Author";

const addButton = document.createElement("button");
addButton.type = "button";
addButton.textContent = "Add Book";

const bookList = document.createElement("ul");

app.appendChild(h1);
app.appendChild(titleInput);
app.appendChild(authorInput);
app.appendChild(addButton);

app.appendChild(bookList);

export function handleBook(): void {
    const titleInputValue = titleInput.value.trim();
    const authorInputValue = authorInput.value.trim();

    if (titleInputValue === "") {
        return;
    }
    if (authorInputValue === "") {
        return;
    }

    const book = addBook(titleInputValue, authorInputValue);
    const bookElement = createBookElement(book);
    bookList.appendChild(bookElement);

    titleInput.value = "";
    authorInput.value = "";
}

addButton.addEventListener("click", handleBook);
titleInput.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        handleBook();
    }
});
authorInput.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        handleBook();
    }
});