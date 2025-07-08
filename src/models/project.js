

export default class Project{
    constructor(title, description = "", tasks = []){
        this.id = crypto.randomUUID();
        this.title = title;
        this.description = description;
        this.tasks = tasks;
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