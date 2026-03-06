import {items, removeItem, toggleBought} from "./state";

const appElement = document.querySelector<HTMLDivElement>("#app");
if (!appElement) throw new Error("Could not find #app");
const app = appElement;

let query = "";


function renderList(list: typeof items): string {

    return list.map((item) => {
        const toggleLabel = item.bought ? "Unmark bought" : "Mark as bought";
        const itemName = item.bought
            ? `<span style="text-decoration: line-through;">${item.name}</span>`
            : item.name;
        const actions = `
                <button
                    data-action="toggle"
                    data-id="${item.id}">
                    ${toggleLabel}
                </button>
               <button
                   data-action="remove" 
                   data-id="${item.id}">
                   Remove
               </button>
            `;

        return `
            <li>
                ${itemName}
                ${actions}
            </li>`;
    }).join("");
}


function render(): void {
    app.innerHTML = `
    <main>
        <h1>Shopping list</h1>
        <input data-role="search" type="text" placeholder="Search items..." value="${query}">
        <ul>${renderList(getFilteredItems())}</ul>
    </main>
    `;
}

function getFilteredItems(): typeof items {
    const q = query.trim().toLowerCase();
    return items.filter((item) => item.name.toLowerCase().includes(q));
}

app.addEventListener("click", (e) => {
    const target = e.target;

    if (!(target instanceof HTMLButtonElement)) return;

    const id = Number(target.dataset.id);
    if (Number.isNaN(id)) return;

    const action = target.dataset.action;
    if (action === "toggle") {
        toggleBought(id);
    }
    if (action === "remove") {
        removeItem(id);
    }

    render();
});

render();

app.addEventListener("input", (e) => {
    const target = e.target;
    if (!(target instanceof HTMLInputElement)) return;
    if (target.dataset.role !== "search") return;

    const caretPosition = target.selectionStart ?? target.value.length;
    query = target.value;
    render();

    const nextSearchInput = app.querySelector<HTMLInputElement>("[data-role=\"search\"]");
    if (!nextSearchInput) return;
    nextSearchInput.focus();
    nextSearchInput.setSelectionRange(caretPosition, caretPosition);
});
