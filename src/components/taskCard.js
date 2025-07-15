import * as style from './taskcard.module.css';
export default class TaskCard{
    constructor(task, onEdit, onDelete){
        this.task = task;
        this.onDelete = onDelete;
        this.onEdit = onEdit;
    }

    getDOM(){
        let taskCard = document.createElement('div');
        taskCard.classList.add(style.taskcard);
        let title = document.createElement('p');
        let project = document.createElement('p');
        let time = document.createElement('p');
        let dueDate = document.createElement('p');
        let editButton = document.createElement('button');
        editButton.classList.add(style.editbutton);
        editButton.innerHTML = "Edit";
        editButton.addEventListener("click", this.onEdit.bind(null,this.task));

        title.innerHTML = this.task.title;
        project.innerHTML = this.task.project;
        time.innerHTML = `${this.task.dueDate.getHours().toString().padStart(2,'0')}:${this.task.dueDate.getMinutes().toString().padStart(2,'0')}`;
        dueDate.innerHTML = `${this.task.dueDate.getDate().toString().padStart(2,'0')} ${getMonthInString(this.task.dueDate.getMonth())}, ${this.task.dueDate.getFullYear()} `;
        taskCard.append(title, project, time, dueDate, editButton);
        return taskCard;
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