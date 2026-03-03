import {type Contact, deleteContact} from "./contactLogic";

export function createContactElement(contact: Contact, onEdit: (contact: Contact) => void): HTMLLIElement {
    const li = document.createElement("li");
    li.dataset.id = String(contact.id);
    const span = document.createElement("span");

    function renderContactText(): void {
        span.textContent = `${contact.name} | ${contact.phone} | ${contact.email}`;
    }

    renderContactText();
    li.append(span);

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.addEventListener("click", () => {
        li.remove();
        deleteContact(contact.id);
    });
    li.append(deleteButton);

    const editButton = document.createElement("button");
    editButton.textContent = "Edit";
    editButton.addEventListener("click", () => {
        onEdit(contact);
    });

    li.append(editButton);
    return li;
}