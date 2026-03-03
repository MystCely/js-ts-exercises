import {addContact, type Contact, editContact} from "./contactLogic";
import {createContactElement} from "./contactDOM";

const app = document.getElementById("app");
if (!app) {
    throw new Error("Missing #app");
}

const form = document.createElement("form");

let editingId: number | null = null;

const nameInput = document.createElement("input");
nameInput.type = "text";
nameInput.placeholder = "Name";
const phoneInput = document.createElement("input");
phoneInput.type = "text";
phoneInput.placeholder = "Phone number";
const emailInput = document.createElement("input");
emailInput.type = "email";
emailInput.placeholder = "Email address";

const submitButton = document.createElement("button");
submitButton.type = "submit";
submitButton.textContent = "Add Contact";

const contactList = document.createElement("ul");

form.appendChild(nameInput);
form.appendChild(phoneInput);
form.appendChild(emailInput);
form.appendChild(submitButton);

app.appendChild(form);
app.appendChild(contactList);

const handleEdit = (selected: Contact) => {
    editingId = selected.id;
    nameInput.value = selected.name;
    phoneInput.value = String(selected.phone);
    emailInput.value = String(selected.email);
    submitButton.textContent = "Update Contact";
};


form.addEventListener("submit", (e) => {
    e.preventDefault();
    const nameValue = nameInput.value.trim();
    const phoneValue = phoneInput.value.trim();
    const emailValue = emailInput.value.trim();

    if (nameValue.length === 0) {
        return;
    }
    if (emailValue.length === 0) {
        return;
    }

    const parsedPhoneValue = Number(phoneValue);
    if (phoneValue.length === 0 || Number.isNaN(parsedPhoneValue)) {
        return;
    }

    if (editingId === null) {
        const newContact = addContact(nameValue, parsedPhoneValue, emailValue);
        const li = createContactElement(newContact, handleEdit);
        contactList.appendChild(li);
    }
    else {
        const updated = editContact(editingId, {name: nameValue, phone: parsedPhoneValue, email: emailValue});

        if (updated) {
            const existingLi = contactList.querySelector(`li[data-id="${updated.id}"]`);
            const newLi = createContactElement(updated, handleEdit);

            if (existingLi) existingLi.replaceWith(newLi);
        }

        editingId = null;
        submitButton.textContent = "Add Contact";
    }

    nameInput.value = "";
    phoneInput.value = "";
    emailInput.value = "";
});
