// class Todo - template for the todo-list
import { Todo } from "./models/List";
import "./style.css";

// Exampel list
    const containerListEx = document.getElementById("containerListEx");
        // Heading exampel list
    const exampleListHeading = document.createElement("h3");
    exampleListHeading.textContent = "Ex.";
    exampleListHeading.classList.add("listExample");
        // ul
    const exampleList = document.createElement("ul");
    exampleList.classList.add("list-disc");

    containerListEx.appendChild(exampleListHeading);
    containerListEx.appendChild(exampleList);

// Finished List
    const containerFinished = document.getElementById("containerFinished");
        // ul
    const finishedList = document.createElement("ul");
    finishedList.classList.add("list-disc");

    containerFinished.appendChild(finishedList);

// Hard-coded list
    const todos = [
    new Todo("Städa", false),
    new Todo("Handla mat", false),
    new Todo("Gå ut med återvinning", false),
];

// forEach loop through hard-coded list
    todos.forEach((todo) => {
            // Create li
        const li = document.createElement("li");
            // Create input of the type "checkbox" added class for styling
        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.classList.add("checkbox");
            // Create p element with the value from the hard-coded list
        const text = document.createElement("p");
        text.innerHTML = todo.text;
        
        li.appendChild(text);
        li.appendChild(checkbox);
        exampleList.appendChild(li);
            // Eventlistener - When checkbox is checked li will be placed inside finished list otherwise in exampel-list
        checkbox.addEventListener("change", () => {
            todo.done = checkbox.checked;
            if(todo.done){
                finishedList.appendChild(li);
                    // Tailwind styling
                text.classList.add("line-through");
            } else {
                exampleList.appendChild(li);
                    // Remove Tailwind styling
                text.classList.remove("line-through");
            }
                // When there's more than 0 children (li) inside the finished ul(finishedList) containerFinished will have the class "show" (display:block). Otherwise it will remove the class "show" and go back to display: hidden
                // containerFinished is only visible when finishedList contains li
            if (finishedList.children.length > 0) {
                containerFinished.classList.add("show");
            } else {
                containerFinished.classList.remove("show");
            }
            if(exampleList.children.length > 0) {
                containerListEx.classList.remove("hide");
            } else {
                containerListEx.classList.add("hide");
            }
        });
    });
    
    const containerListForm = document.getElementById("containerListForm");
    const todoInput = document.getElementById("todoInput");
    const todoBttn = document.getElementById("todoBttn");

    const formList = document.createElement("ul");
    formList.classList.add("list-disc");

    containerListForm.appendChild(formList);

    function handleClick() {
        const formLi = document.createElement("li");

        const inputValue = document.createElement("p");
        inputValue.textContent = todoInput.value;

        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.classList.add("checkbox");

        checkbox.addEventListener("change", () => {
            const checkboxChecked = checkbox.checked;

            if(checkboxChecked){
                finishedList.appendChild(formLi);
                    // Tailwind styling
                inputValue.classList.add("line-through");
            } else {
                formList.appendChild(formLi);
                    // Remove Tailwind styling
                inputValue.classList.remove("line-through");
            }
            if(finishedList.children.length > 0){
                containerFinished.classList.add("show");
            } else {
                containerFinished.classList.remove("show");
            }
            if(formList.children.length === 0) {
                containerListForm.classList.remove("show");
            } else {
                containerListForm.classList.add("show");
            }
        });
        
        const removeBttn = document.createElement("div");
        removeBttn.textContent = "Remove";
        removeBttn.classList.add("removeBttn");

        removeBttn.addEventListener("click" , () => {
            formLi.remove();

            if(formList.children.length === 0) {
                containerListForm.classList.remove("show");
            }
            if(finishedList.children.length === 0) {
                containerFinished.classList.remove("show");
            }
        });

        const liContent = document.createElement("div");
        liContent.classList.add("li-content");

        formList.appendChild(formLi);
        liContent.appendChild(inputValue);
        liContent.appendChild(checkbox);
        liContent.appendChild(removeBttn);
        formLi.appendChild(liContent);

        if(formList.children.length > 0){
            containerListForm.classList.add("show");
            formList.appendChild(formLi);
        } else {
            containerListForm.classList.remove("show");
        }
    }

    const formSubmit = document.getElementById("todoForm");

    formSubmit.addEventListener("submit", (e) => {
            e.preventDefault();
            handleClick();
    });

    todoBttn.addEventListener("click", handleClick);
