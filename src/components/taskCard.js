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
        title.classList.add(style.title, 'primary-text');
        
        let project = document.createElement('p');
        project.classList.add(style.project, 'secondary-text');

        let taskDetail = document.createElement('p');
        taskDetail.classList.add(style.taskDetail, 'secondary-text');

        let time = document.createElement('p');
        time.classList.add(style.time);


        let dueDate = document.createElement('p');
        dueDate.classList.add(style.date);

        let editButton = document.createElement('button');
        editButton.classList.add(style.editbutton);
        editButton.innerHTML = "Edit";
        editButton.addEventListener("click", this.onEdit.bind(null,this.task));

        let deleteButton = document.createElement('button');
        deleteButton.classList.add(style.deleteButton, 'cautious-button');
        deleteButton.innerHTML = "Delete";
        deleteButton.addEventListener("click", this.onDelete.bind(null,this.task));
        
        let buttonArray = document.createElement('div');
        buttonArray.classList.add(style.button_array);
        buttonArray.append(editButton, deleteButton);

        let tags = document.createElement('p');
        tags.classList.add(style.tags);
        console.log(this.task);
        this.task.tags.forEach(tag => {
            let tagDOM = document.createElement('span');
            tagDOM.classList.add('tag');
            tagDOM.innerHTML = tag;
            tags.appendChild(tagDOM);
        });

        title.innerHTML = this.task.title;
        project.innerHTML = 'Project: '+ this.task.project;
        taskDetail.innerHTML = this.task.description;
        time.innerHTML = `Due by: ${this.task.dueDate.getHours().toString().padStart(2,'0')}:${this.task.dueDate.getMinutes().toString().padStart(2,'0')}`;
        dueDate.innerHTML = `Due Date: ${this.task.dueDate.getDate().toString().padStart(2,'0')} ${getMonthInString(this.task.dueDate.getMonth())}, ${this.task.dueDate.getFullYear()} `;
        taskCard.append(project, title,  taskDetail, time, dueDate, tags, buttonArray);
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