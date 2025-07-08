import Project from './project.js';
import Task from './task.js';

export default class DataManager{
    constructor(){
        this.projectsList = [
            new Project('Default', [new Task(1, "Task 1")]),
            new Project('Learning', [new Task(1, "Task 1")]),

        ];
    }

    getProjectsList(){
        return this.projectsList;
    }
}