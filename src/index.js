import "./styles/style.css"
import "@fontsource/jetbrains-mono"
import sidebar from "./components/sidebar.js"
import Task from './models/task.js'
import UIManager from './models/uiManager.js'
import DataManager from './models/dataManager.js'
import ToDoAppManager from './models/toDoAppManager.js'


let uiManager = new UIManager();
let dataManager = new DataManager();

let toDoAppManager = new ToDoAppManager(dataManager, uiManager);

toDoAppManager.init();

// let task1 = new Task();
// task1.title = "my task";

// let para = document.createElement("p");
// para.innerHTML = task1.title;

// let newTaskButton = document.createElement('button');
// newTaskButton.textContent = "Add New Task";
// newTaskButton.addEventListener("click",overlayScreenPaint.bind(null, (new NewTaskCreatorUIComp(new Task())).getDOM()));
// document.body.appendChild(para);
// document.body.appendChild(newTaskButton);

// let overlay_screen = document.createElement('div');
// overlay_screen.id = "overlay-screen";
// overlay_screen.classList.add("focused_overlay");
// overlay_screen.classList.add("hidden");

// document.body.appendChild(overlay_screen);

// var observedNode;
// var observer = new MutationObserver((mutationRecords)=>{
//     mutationRecords.forEach( mutationRecord => {
//         mutationRecord.removedNodes.forEach( removedNode => {
//             if (removedNode.id === observedNode)
//                 overlay_screen.classList.add("hidden");
//         });
//     });
// });
// observer.observe(overlay_screen, {childList:true});



// function overlayScreenPaint(element)
// {
//     overlay_screen.appendChild(element);
//     observedNode = element.id;
//     overlay_screen.classList.remove("hidden");
    
// }

// function addNewTask(target_element){
//     let newTaskCreator = new NewTaskCreatorUIComp(new Task("My Task"));
//     let newTaskCreatorElement = newTaskCreator.getDOM();
//     let overlayscreen = document.getElementById("overlay-screen");
//     overlayscreen.appendChild(newTaskCreatorElement);
// }
