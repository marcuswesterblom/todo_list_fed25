// function controlling visability of containers depending on if the lists in respective container has any children
export const updateVisability = (todo, li, text, ul, finishedList, containerList, containerFinished, youAreDoneText) => {
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
        };