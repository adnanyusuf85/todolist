import "./style.css"
import Task from './task.js'


let task1 = new Task();
task1.title = "my task";

let para = document.createElement("p");
para.innerHTML = task1.title;
document.body.appendChild(para);