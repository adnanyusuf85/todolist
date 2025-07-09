export default function generateTaskList(projects){

    if (projects.tasks.length === 0){
        let container = document.createElement("div");
        let message = document.createElement("p");
        message.innerText = "No tasks in this project";
        container.appendChild(message);
        return container;

    }

    else {
        let container = document.createElement("div");
        projects.tasks.forEach(task => {
            let taskCard = document.createElement('div');
            taskCard.innerHTML = task.title;
            container.appendChild(taskCard);
        });
        return container;
    }
}