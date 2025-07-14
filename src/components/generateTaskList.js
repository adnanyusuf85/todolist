import * as style from './taskcard.module.css';
import getTaskCard from './taskCard.js';

export default function generateTaskList(project){

    if (project.tasks.length === 0){
        let container = document.createElement("div");
        let message = document.createElement("p");
        message.innerText = "No tasks in this project";
        container.appendChild(message);
        return container;

    }

    else {
        return getTasksDOM(project);
    }

    

    function getTasksDOM(project){
        let container = document.createElement("div");
        project.tasks.forEach(task => {
            let taskCardDOM = getTaskCard(task);
            container.appendChild(taskCardDOM);
        });
        return container;
    }
}

function getMonthInString(index){
    let months = 
    [
        'January', 'February', 'March', 'April',
        'May', 'June', 'July', 'August',
        'September', 'October', 'November', 'December'          
    ];
    return months[index];
}