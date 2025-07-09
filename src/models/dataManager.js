import Project from './project.js';
import Task from './task.js';

export default class DataManager{
    constructor(){
        this.projectsList = [
            new Project('Default', "", [new Task("Wash the dishes", "Task 1"),new Task("Exercise HIIT", "Task 2")]),
            new Project('Learning', "", [new Task("Reinforcment Learning chapter", "Task 1")]),

        ];
    }

    getProjectsList(){
        return this.projectsList;
    }

    getProjectById(projectID){
        return this.projectsList.filter(project => project.id === projectID)[0];
    }
}