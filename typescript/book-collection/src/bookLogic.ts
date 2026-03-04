export interface Book {
    id: number;
    title: string
    author: string;
    hasRead: boolean;
}

let books: Book[] = [];
let nextId:number = 1;

export function addBook(titleInput: string, authorInput: string): Book {
    const newBook: Book = {
        id: nextId,
        title: titleInput,
        author: authorInput,
        hasRead: false,
    }
    nextId++;
    books.push(newBook);
    return newBook;
}

export function deleteBook(id: number) {
    books = books.filter((book) => book.id !== id);
}

export function toggleBook(id: number) {
    const book = books.find((book) => book.id === id);
    if (book) {
        book.hasRead = !book.hasRead;
    }
}