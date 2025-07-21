import * as style from "./common.module.css";
import projectslist from "./projectsList.js";

export default function getSideBar(){
    let containing_div = document.createElement("div");
    let title = document.createElement("p");
    title.innerText = "Taskdo"
    title.classList.add(style.apptitle, 'primary-text');
    containing_div.appendChild(title);
    
    let addTaskButton = document.createElement("button");
    addTaskButton.id = "addTaskButton";
    addTaskButton.innerHTML = "+ Add Task";
    addTaskButton.classList.add("spbtm_16");
    containing_div.appendChild(addTaskButton);
    
    return containing_div;
}