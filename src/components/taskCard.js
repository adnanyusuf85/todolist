import * as style from './taskcard.module.css';
export default function getTaskCard(task){
    let taskCard = document.createElement('div');
    taskCard.classList.add(style.taskcard);
    let title = document.createElement('p');
    let project = document.createElement('p');
    let time = document.createElement('p');
    let dueDate = document.createElement('p');
    let editButton = document.createElement('button');
    editButton.classList.add(style.editbutton);
    editButton.innerHTML = "Edit";

    title.innerHTML = task.title;
    project.innerHTML = task.project;
    time.innerHTML = `${task.dueDate.getHours().toString().padStart(2,'0')}:${task.dueDate.getMinutes().toString().padStart(2,'0')}`;
    dueDate.innerHTML = `${task.dueDate.getDate().toString().padStart(2,'0')} ${getMonthInString(task.dueDate.getMonth())}, ${task.dueDate.getFullYear()} `;
    taskCard.append(title, project, time, dueDate, editButton);
    return taskCard;
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