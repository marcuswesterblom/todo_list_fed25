// class Todo - template for the todo-list
import { Todo } from "./models/List.js";
import "./style.css";
import { getFromLocalStorage, saveToLocalStorage } from "./utils/storage.js";
import { todoList } from "./utils/todolist.js";

    // Container unfinished list
    const containerList = document.getElementById("containerList");
    // ul unfinished list
    const ul = document.createElement("ul");

    containerList.appendChild(ul);

    // Container finished List
    const containerFinished = document.getElementById("containerFinished");
    // ul finished list
    const finishedList = document.createElement("ul");

    const youAreDoneText = document.createElement("h3");
    youAreDoneText.textContent = "Well done! You've finished all of your chores!";

    containerFinished.appendChild(finishedList);


    let todos = getFromLocalStorage();

    if(todos.length === 0) {
        todos = [
        new Todo("Clean the house", false),
        new Todo("Grocery shopping", false),
        new Todo("Walk the dog", false),
        ];
    }

// Render initial todos
todos.forEach((todo, index) => {
    todoList(todo, index, todos, ul, finishedList, containerList, containerFinished, youAreDoneText);
});

// function for when form button is pressed
const handleClick = () => {
        const todoInput = document.getElementById("todoInput");

        const inputValue = todoInput.value;

        if(inputValue === "") return;

        const newTodo = new Todo(inputValue, false);
        todos.push(newTodo);

        todoList(newTodo, todos.length - 1, todos, ul, finishedList, containerList, containerFinished, youAreDoneText);
        saveToLocalStorage(todos);

        containerList.classList.remove("hide");

        todoInput.value = "";

        if(ul.children.length === 0) {
            containerList.classList.add("hide");
            containerFinished.classList.add("done");
            containerFinished.appendChild(youAreDoneText);
        } else {
            containerFinished.classList.remove("done");
            youAreDoneText.remove();
        }
    }

    const formSubmit = document.getElementById("todoForm");
    const todoBttn = document.getElementById("todoBttn");
    // Form = submit, allows to press enter when entering new text in input
    formSubmit.addEventListener("submit", (e) => {
            e.preventDefault();
            handleClick();
    });

    todoBttn.addEventListener("click", handleClick);


