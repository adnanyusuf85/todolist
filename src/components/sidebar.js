import * as style from "./common.module.css";
import projectslist from "./projectsList.js";

export default function getSideBar(){
    let containing_div = document.createElement("div");
    let title = document.createElement("p");
    title.innerText = "Taskdo"
    title.classList.add(style.apptitle);
    containing_div.appendChild(title);
    
    return containing_div;
}