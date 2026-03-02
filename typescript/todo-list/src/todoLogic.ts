export interface Todo {
    id: number;
    text: string;
    completed: boolean;
}

let todos: Todo[] = [];
let nextId = 1;

export function addTodo(inputText: string): Todo {

    const newTodo: Todo = {
        id: nextId,
        text: inputText,
        completed: false,
    }

    nextId++;
    todos.push(newTodo);
    return newTodo;
}

export function deleteTodo(id: number): void {
    todos = todos.filter(t => t.id !== id);
}

export function toggleTodo(id: number): void {
    const todo = todos.find((t) => t.id === id);

    if (todo) {
        todo.completed = !todo.completed;
    }
}