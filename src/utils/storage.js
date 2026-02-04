import { Todo } from "../models/List.js";
// Local storage

// Save in local storage
export const saveToLocalStorage = (todos) => {
    localStorage.setItem("todos", JSON.stringify(todos));
};
// Get from local storage
export const getFromLocalStorage = () => {
    const stored = localStorage.getItem("todos");
    if(stored) {
        return JSON.parse(stored).map(obj => new Todo(obj.text, obj.done));
    }
    return[];
};
// Save the sorting order in local storage
export const saveTodosOrder = (ul, finishedList, todos) => {
    const newTodos = [];

    ul.querySelectorAll("li").forEach(li => {
        const todo = todos.find(t => t.id === li.dataset.id);
        if(todo) newTodos.push(todo);
    });
    finishedList.querySelectorAll("li").forEach(li => {
        const todo = todos.find(t => t.id === li.dataset.id);
        if(todo) newTodos.push(todo);
    });
    saveToLocalStorage(newTodos);
};