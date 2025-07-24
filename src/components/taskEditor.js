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
        this.renderedDOM = null;
        this.saveCallback = ()=> {
            console.error("No save callback set in task editor.");
        }
        
    }

    setSaveCallback(callback){
        this.saveCallback = callback;
    }
    

    createEditButton(){
        let editButton = document.createElement('button');
        editButton.innerHTML = "Save";
        editButton.addEventListener('click', ()=> {
            let statusbar = this.renderedDOM.querySelector('#statusbar');
            // statusbar.innerHTML = "Saving...";    
            let task = this.getUpdatedTask();
            this.saveCallback(task);
            this.closeSubWindow();
            // statusbar.innerHTML = "Saved";
        });
        return editButton;
    }

    getUpdatedTask(){
        let projectName = this.container.querySelector('#projectName').value;
        let taskTitle = this.container.querySelector('#taskTitle').value;
        let taskDescription = this.container.querySelector('#taskDescription').value;
        let dueDate = this.container.querySelector('#dueDate').value;
        let dueTime = this.container.querySelector('#dueTime').value;
        let timeDate = new Date(
            dueDate.substring(0,4), 
            dueDate.substring(5,7), 
            dueDate.substring(8,10),
            dueTime.substring(0,2),
            dueTime.substring(3,5)
        );
        let tags = this.container.querySelector('#tags').value;
        
        this.task.title = taskTitle;
        this.task.project = projectName;
        this.task.description = taskDescription;
        this.task.dueDate = timeDate;
        return this.task;
    }
    getDOM(){    
        let windowTitle = document.createElement('h2');
        windowTitle.innerHTML = this.windowTitle;
        windowTitle.classList.add('spbtm_32');

        var projectNameLabel = document.createElement('label');
        projectNameLabel.innerHTML = "Project Name";
        projectNameLabel.setAttribute('for', 'projectName');
        
        var projectName = document.createElement('select');
        projectName.id = 'projectName';
        let option1 = document.createElement('option');
        option1.innerHTML = "The Option";
        
        let option2 = document.createElement('option');
        option2.innerHTML = "The Other Option";
        option2.selected = true;
        projectName.append(option1, option2);
        
        var taskTitleLabel = document.createElement('label');
        taskTitleLabel.innerHTML = "Task Title";
        taskTitleLabel.setAttribute('for', 'taskTitle');

        var taskTitle = document.createElement('input');
        taskTitle.id = 'taskTitle';
        taskTitle.setAttribute('type', 'text');
        taskTitle.value = this.task.title;

        var taskDescriptionLabel = document.createElement('label');
        taskDescriptionLabel.innerHTML = "Task Description";
        taskDescriptionLabel.setAttribute('for', taskDescription);
        

        var taskDescription = document.createElement('textarea');
        taskDescription.id = "taskDescription";
        taskDescription.style.height = '100px';
        taskDescription.value = this.task.description;

        var dueDateLabel = document.createElement("label");
        dueDateLabel.innerHTML = "Due Date";
        dueDateLabel.setAttribute('for', 'dueDate');

        var dueDate = document.createElement("input");
        dueDate.setAttribute("type", "date");
        dueDate.id = 'dueDate';
        let formatedDueDate = this.getFormatedDate(this.task.dueDate);
        // dueDateElement = this.task.dueDate;
        dueDate.value = formatedDueDate;

        var dueTimeLabel = document.createElement("label");
        dueTimeLabel.innerHTML = "Due Time";
        dueTimeLabel.setAttribute('for', 'dueTime');

        var dueTime = document.createElement("input");
        dueTime.setAttribute("type", "time");
        dueTime.id = 'dueTime';
        let formatedDueTime = this.getFormatedTime(this.task.dueDate);
        // dueDateElement = this.task.dueDate;
        dueTime.value = formatedDueTime;

        let tagLabel = document.createElement('label');
        tagLabel.innerHTML = "Tags";

        var tag = document.createElement('textarea');
        tag.classList.add('spbtm_32');
        var taglist = this.task.tags;
        let tagString = "";
        taglist.forEach(tagItem =>{
            //tag.innerHTML += `<span class='${style.tags}'>${tagItem}</span> `   
            tagString += tagItem + ', ';
        });
        tag.innerText = tagString.substring(0, tagString.length-2);
        tag.id = 'tags';

        let statusbar = document.createElement('p');
        statusbar.id = 'statusbar';

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
            dueDate,
            dueTimeLabel,
            dueTime,
            tagLabel,
            tag,
            statusbar,
            editButton,
            cancelButton
        );

        this.renderedDOM = this.container;
        
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

    getFormatedTime(jsDate){
        let hours = parseInt(jsDate.getUTCHours());
        let minutes = jsDate.getUTCMinutes();
        console.log(`${hours}:${minutes}`);
        let paddedHours = String(hours).padStart(2, '0');
        let paddedMinutes = String(minutes).padStart(2,'0');
        return `${paddedHours}:${paddedMinutes}`;
    }

    closeSubWindow(){
        this.container.remove();
    }


}


export default TaskEditor;
