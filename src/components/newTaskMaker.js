import TaskEditor from './taskEditor.js';
import Task from '../models/task.js';

export default class newTaskMaker extends TaskEditor{
    constructor()
    {
        super(new Task({}));
        this.windowTitle = "New Task";
    }

    createEditButton(){
        let editButton = document.createElement('button');
        editButton.innerHTML = "Save";
        return editButton;
    }
}