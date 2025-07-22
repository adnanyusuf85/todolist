import Task from "../models/task.js"
import * as style from "./task-creator-style.module.css"

class TaskEditor{
    constructor(task){
        this.task = task;
        this.container = document.createElement('div');
        this.container.className = style.container;
        this.container.id = "new-task-creator-window";
        this.created = true;
        this.windowTitle = 'Task Editor';
    }

    createEditButton(){
        let editButton = document.createElement('button');
        editButton.innerHTML = "Edit";
        return editButton;
    }

    getDOM(){    
        let windowTitle = document.createElement('h2');
        windowTitle.innerHTML = this.windowTitle;
        windowTitle.classList.add('spbtm_32');

        var projectNameLabel = document.createElement('label');
        projectNameLabel.innerHTML = "Project Name";

        
        var projectName = document.createElement('select');
        let option1 = document.createElement('option');
        option1.innerHTML = "The Option";
        
        let option2 = document.createElement('option');
        option2.innerHTML = "The Other Option";
        option2.selected = true;
        projectName.append(option1, option2);
        projectName.classList.add('spbtm_16');
        
        var taskTitleLabel = document.createElement('label');
        taskTitleLabel.innerHTML = "Task Title";

        var taskTitle = document.createElement('input');
        taskTitle.setAttribute('type', 'text');
        taskTitle.value = this.task.title;

        var taskDescriptionLabel = document.createElement('label');
        taskDescriptionLabel.innerHTML = "Task Description";
        

        var taskDescription = document.createElement('textarea');
        taskDescription.classList.add('padding_8');
        taskDescription.style.height = '100px';

        var dueDateLabel = document.createElement("label");
        dueDateLabel.innerHTML = "Due Date";

        var dueDateElement = document.createElement("input");
        dueDateElement.setAttribute("type", "date");
        let formatedDueDate = this.getFormatedDate(this.task.dueDate);
        // dueDateElement = this.task.dueDate;
        dueDateElement.value = formatedDueDate;

        var tag = document.createElement('p');
        tag.classList.add('spbtm_32');
        var taglist = ['Urgent', 'New', 'Technology'];
        taglist.forEach(tagItem =>{
            tag.innerHTML += `<span class='${style.tags}'>${tagItem}</span> `   
        });

        var editButton = this.createEditButton();

        var cancelButton = document.createElement('button');
        cancelButton.innerHTML = "Cancel";
        cancelButton.addEventListener('click', () => this.closeSubWindow());

        var exitButton = document.createElement('button');
        exitButton.innerHTML = "X";
        exitButton.addEventListener('click', () => this.closeSubWindow());

        this.container.append(
            windowTitle,
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

    getFormatedDate(jsDate){
        let year = jsDate.getYear() + 1900;
        let month = jsDate.getMonth();
        let day = jsDate.getDate();
        let yearPadded = String(year).padStart(4, '0');
        let monthPadded = String(month).padStart(2, '0');
        let dayPadded = String(day).padStart(2, '0');
            
        return `${yearPadded}-${monthPadded}-${dayPadded}`;
    }

    closeSubWindow(){
        this.container.remove();
    }


}


export default TaskEditor;
