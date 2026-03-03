export interface Contact {
    id: number;
    name: string;
    phone: number;
    email: string;
}

let contacts: Contact[] = [];
let nextId: number = 1;

export function addContact(nameInput: string, phoneInput: number, emailInput: string): Contact {
    const newContact: Contact = {
        id: nextId,
        name: nameInput,
        phone: phoneInput,
        email: emailInput,
    };

    nextId++;
    contacts.push(newContact);
    return newContact;
}

export function deleteContact(id: number): void {
    contacts = contacts.filter(c => c.id !== id);
}

export function editContact(id: number, updates: Partial<Pick<Contact, "name" | "phone" | "email">>): Contact | undefined {
    const contact = contacts.find(c => c.id === id);

    if (!contact) {
        return undefined;
    }

    if (updates.name !== undefined) {
        contact.name = updates.name;
    }
    if (updates.phone !== undefined) {
        contact.phone = updates.phone;
    }
    if (updates.email !== undefined) {
        contact.email = updates.email;
    }

    return contact;
}

