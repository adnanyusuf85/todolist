import Project from './project.js';
import Task from './task.js';

export default class DataManager{
    constructor(){
        this.projectsList = [
            new Project('Default', "", 
                [
                    new Task({title:"Wash the Car", description: "Task 1", project: "Default", tags:['Work', 'House Keeping']}),
                    new Task({title:"Exercise HIIT", description: "Task 2", project: "Default", tags:['Health', "Well being"]})
                ]),
            new Project('Learning', "", 
                [
                    new Task({title: "Reinforcment Learning chapter", description: "Task 1", project: "Learning"})
                ]),

        ];
    }

    getProjectsList(){
        return this.projectsList;
    }

    getProjectById(projectID){
        return this.projectsList.filter(project => project.id === projectID)[0];
    }

    saveTask(task){
        console.log(task.title);
        
    }
}