import Task from "../models/task.js"
import * as style from "./task-creator-style.module.css"

class NewTaskCreatorUIComp{
    constructor(task){
        this.task = task;
    }

    getDOM(){
        var container = document.createElement('div');
        container.className = style.container;

        var projectNameLabel = document.createElement('label');
        projectNameLabel.innerHTML = "Project Name";

        
        var projectName = document.createElement('input');
        projectName.setAttribute('type', 'text');
        
        var taskTitleLabel = document.createElement('label');
        taskTitleLabel.innerHTML = "Task Title";

        var taskTitle = document.createElement('input');
        taskTitle.setAttribute('type', 'text');
        taskTitle.value = this.task.title;

        var taskDescriptionLabel = document.createElement('label');
        taskDescriptionLabel.innerHTML = "Task Description";

        var taskDescription = document.createElement('textarea');

        var tag = document.createElement('p');
        var taglist = ['Urgent', 'New', 'Technology'];
        taglist.forEach(tagItem =>{
            tag.innerHTML += `<span class='${style.tags}'>${tagItem}</span> `   
        });

        var editButton = document.createElement('button');
        editButton.innerHTML = "Edit";

        var cancelButton = document.createElement('button');
        cancelButton.innerHTML = "Cancel";

        container.append(
            projectNameLabel,
            projectName,
            taskTitleLabel,
            taskTitle,
            taskDescriptionLabel,
            taskDescription,
            tag,
            editButton,
            cancelButton
        );
        return container;
    }

}


export default NewTaskCreatorUIComp;
