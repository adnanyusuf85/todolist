import Task from "../models/task.js"
import * as style from "./task-creator-style.module.css"

class NewTaskCreatorUIComp{
    constructor(task){
        this.task = task;
        this.container = document.createElement('div');
        this.container.className = style.container;
        this.container.id = "new-task-creator-window";
        this.created = true;
    }

    getDOM(){    

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

        var dueDateLabel = document.createElement("label");
        dueDateLabel.innerHTML = "Due Date";

        var dueDateElement = document.createElement("input");
        dueDateElement.setAttribute("type", "date");


        var tag = document.createElement('p');
        var taglist = ['Urgent', 'New', 'Technology'];
        taglist.forEach(tagItem =>{
            tag.innerHTML += `<span class='${style.tags}'>${tagItem}</span> `   
        });

        var editButton = document.createElement('button');
        editButton.innerHTML = "Edit";

        var cancelButton = document.createElement('button');
        cancelButton.innerHTML = "Cancel";
        cancelButton.addEventListener('click', () => this.closeSubWindow());

        this.container.append(
            projectNameLabel,
            projectName,
            taskTitleLabel,
            taskTitle,
            taskDescriptionLabel,
            taskDescription,
            dueDateLabel,
            dueDateElement,
            tag,
            editButton,
            cancelButton
        );

        
        return this.container;
    }

    closeSubWindow(){
        this.container.remove();
    }


}


export default NewTaskCreatorUIComp;
