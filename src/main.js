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
        removeBttn.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free v7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.--><path fill="#f34f4f" d="M232.7 69.9C237.1 56.8 249.3 48 263.1 48L377 48C390.8 48 403 56.8 407.4 69.9L416 96L512 96C529.7 96 544 110.3 544 128C544 145.7 529.7 160 512 160L128 160C110.3 160 96 145.7 96 128C96 110.3 110.3 96 128 96L224 96L232.7 69.9zM128 208L512 208L512 512C512 547.3 483.3 576 448 576L192 576C156.7 576 128 547.3 128 512L128 208zM216 272C202.7 272 192 282.7 192 296L192 488C192 501.3 202.7 512 216 512C229.3 512 240 501.3 240 488L240 296C240 282.7 229.3 272 216 272zM320 272C306.7 272 296 282.7 296 296L296 488C296 501.3 306.7 512 320 512C333.3 512 344 501.3 344 488L344 296C344 282.7 333.3 272 320 272zM424 272C410.7 272 400 282.7 400 296L400 488C400 501.3 410.7 512 424 512C437.3 512 448 501.3 448 488L448 296C448 282.7 437.3 272 424 272z"/></svg>';
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
                text.classList.add("line-through");

            } else {
                ul.appendChild(li);
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
            li.remove();

            const index = todos.indexOf(todo);
            if(index > -1) {
                todos.splice(index, 1);
            }

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
// forEach loop
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
