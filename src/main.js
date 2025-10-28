// class Todo - template for the todo-list
import { Todo } from "./models/list";
import "./style.css";

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

// Hard-coded list
    const todos = [
    new Todo("Clean the house", false),
    new Todo("Grocery shopping", false),
    new Todo("Walk the dog", false),
];
// Function for every todo
const todoList = (todo) => {
        // Create li
        const li = document.createElement("li");
        // Create input of the type "checkbox" added class for styling
        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.classList.add("checkbox");
        // Create p-element with the value from the hard-coded list
        const text = document.createElement("p");
        text.innerHTML = todo.text;
        // Create remove-button
        const removeBttn = document.createElement("div");
        removeBttn.textContent = "Remove";
        removeBttn.classList.add("removeBttn");
        // Create up-arrow for sorting list
        const upBttn = document.createElement("span");
        upBttn.innerHTML = "&#11014;";
        upBttn.classList.add("moveBttn");
        // Create down-arrow for sorting list
        const downBttn = document.createElement("span");
        downBttn.innerHTML = "&#11015;";
        downBttn.classList.add("moveBttn");
        
        li.appendChild(upBttn);
        li.appendChild(downBttn);
        li.appendChild(text);
        li.appendChild(checkbox);
        li.appendChild(removeBttn);

        ul.appendChild(li);

        // Checkbox eventListener, if checked put li in finished list otherwise in unfinished list
        checkbox.addEventListener("change", () => {
            todo.done = checkbox.checked;
            if(todo.done){
                finishedList.appendChild(li);
                    // Tailwind styling
                text.classList.add("line-through");

            } else {
                ul.appendChild(li);
                    // Remove Tailwind styling
                text.classList.remove("line-through");

            }
            if(finishedList.children.length > 0){
                containerFinished.classList.add("show");
            } else {
                containerFinished.classList.remove("show");
            }
            if(ul.children.length > 0){
                containerList.classList.remove("hide");
            } else {
                containerList.classList.add("hide");
            }
            if(ul.children.length === 0){
                containerFinished.classList.add("done");
                containerFinished.appendChild(youAreDoneText);
            } else {
                containerFinished.classList.remove("done");
                youAreDoneText.remove();
            }
        });
            // Remove-button eventListener
        removeBttn.addEventListener("click" , () => {
            // removes li when pressed
            li.remove();
            if(finishedList.children.length === 0){
                containerFinished.classList.remove("show");
            }
            if(ul.children.length === 0) {
                containerList.classList.add("hide");
                containerFinished.classList.add("done");
                containerFinished.appendChild(youAreDoneText);
            } else {
                containerFinished.classList.remove("done");
                youAreDoneText.remove();
            }
        });
        // Up-button eventListener
        upBttn.addEventListener("click", () => {
            const parentList = li.parentElement;
            const before = li.previousElementSibling;
            if(before) {
                parentList.insertBefore(li, before);
            }
        });
        // Down-button eventListener
        downBttn.addEventListener("click", () => {
            const parentList = li.parentElement;
            const after = li.nextElementSibling;
            if (after) {
                parentList.insertBefore(after, li);
            }
        });
}

todos.forEach(todoList);

// function for when form button is pressed
const handleClick = () => {
        const todoInput = document.getElementById("todoInput");

        const inputValue = todoInput.value;

        if(inputValue === "") return;

        const newTodo = new Todo(inputValue, false);
        todos.push(newTodo);

        todoList(newTodo);

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
    
    formSubmit.addEventListener("submit", (e) => {
            e.preventDefault();
            handleClick();
    });

    todoBttn.addEventListener("click", handleClick);
