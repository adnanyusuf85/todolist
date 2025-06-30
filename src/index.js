import "./styles/style.css"
import Task from './models/task.js'
import NewTaskCreatorUIComp from './components/newTaskCreator.js'

let task1 = new Task();
task1.title = "my task";

let para = document.createElement("p");
para.innerHTML = task1.title;

let newTaskButton = document.createElement('button');
newTaskButton.textContent = "Add New Task";
newTaskButton.addEventListener("click",addNewTask);
document.body.appendChild(para);
document.body.appendChild(newTaskButton);

let overlay_screen = document.createElement('div');
overlay_screen.id = "overlay-screen";
overlay_screen.classList.add("focused_overlay");
overlay_screen.classList.add("hidden");
document.body.appendChild()



function addNewTask(){
    let newTaskCreator = new NewTaskCreatorUIComp(new Task("My Task"));
    let newTaskCreatorElement = newTaskCreator.getDOM();
    let overlayscreen = document.getElementById("overlay-screen");
    overlayscreen.appendChild(newTaskCreatorElement);
}
