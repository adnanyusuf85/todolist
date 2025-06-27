import "./styles/style.css"
import Task from './models/task.js'
import NewTaskCreator from './components/newTaskCreator.js'

let task1 = new Task();
task1.title = "my task";

let para = document.createElement("p");
para.innerHTML = task1.title;
document.body.appendChild(para);

let newTaskCreator = new NewTaskCreator(new Task("My Task"));

document.body.appendChild(newTaskCreator.getDOM());