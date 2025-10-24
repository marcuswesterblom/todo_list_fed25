import { Todo } from "./models/List";
import "./style.css";

const todos = [
    new Todo("Städa"),
    new Todo("Handla mat"),
    new Todo("Gå ut med återvinning"),
];

    const containerListEx = document.getElementById("containerListEx");
    const exampleList = document.createElement("ul");
    const finishedList = document.createElement("ul");
    exampleList.classList.add("list-disc");
    finishedList.classList.add("list-disc");

    const exampleListHeading = document.createElement("h3");
    exampleListHeading.textContent = "Ex.";
    exampleListHeading.classList.add("listExample");

    containerListEx.appendChild(exampleListHeading);
    containerListEx.appendChild(exampleList);

    const finishedHeading = document.createElement("h3");
    finishedHeading.textContent = "Klara";

    const containerFinished = document.getElementById("containerFinished");
    containerFinished.appendChild(finishedHeading);
    containerFinished.appendChild(finishedList);

todos.forEach((todo) => {
    const li = document.createElement("li");

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.classList.add("checkbox");

    const text = document.createElement("p");
    text.innerHTML = todo.text;

    checkbox.addEventListener("change", () => {
        todo.done = checkbox.checked;
        if(todo.done){
            finishedList.appendChild(li);
            text.classList.add("line-through");
        } else {
            exampleList.appendChild(li);
            text.classList.remove("line-through");
        }
    });

    li.appendChild(text);
    li.appendChild(checkbox);
    exampleList.appendChild(li);
});
