export default class Project{
    constructor(title, description = ""){
        this.title = title;
        this.description = description;
        this.tasks = [];
    }

    updateTitle(newTitle){
        this.title = newTitle;
    }

    updateDescription(newDescription){
        this.description = newDescription;
    }

    addTask(task){
        this.tasks.push(task);
    }

    removeTask(taskUUID){
        this.tasks.filter(task => task.UUID == taskUUID);
    }

}