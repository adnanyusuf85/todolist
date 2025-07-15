import TaskCard from './taskCard.js';

export default function generateTaskCards(project, onEdit, onDelete){

    if (project.tasks.length === 0){
        let container = document.createElement("div");
        let message = document.createElement("p");
        message.innerText = "No tasks in this project";
        container.appendChild(message);
        return container;

    }

    else {
        return getTasksDOM(project, onEdit, onDelete);
    }

    

    function getTasksDOM(project, onEdit, onDelete){
        let container = document.createElement("div");
        project.tasks.forEach(task => {
            let taskCard = new TaskCard(task, onEdit, onDelete);
            container.appendChild(taskCard.getDOM());
        });
        return container;

        
    }
}

