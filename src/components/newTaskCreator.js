import Task from "../models/task.js"
class NewTaskCreator{
    constructor(task){
        this.task = task;
    }

    getDOM(){
        var container = document.createElement('div');

        var projectNameLabel = document.createElement('label');
        projectNameLabel.innerHTML = "Project Name";
        var projectName = document.createElement('input');
        projectName.setAttribute('type', 'text');

        var taskTitle = document.createElement('input');
        taskTitle.setAttribute('type', 'text');
        taskTitle.value = this.task.title;

        var taskDescription = document.createElement('textarea');

        var tag = document.createElement('p');

        var editButton = document.createElement('button');
        editButton.innerHTML = "Edit";

        var cancelButton = document.createElement('button');
        cancelButton.innerHTML = "Cancel";

        container.appendChild(projectNameLabel);
        container.appendChild(projectName);
        container.appendChild(taskTitle);
        container.appendChild(taskDescription);
        container.appendChild(tag);
        container.appendChild(editButton);
        container.appendChild(cancelButton);
        return container;
    }

}


export default NewTaskCreator;
