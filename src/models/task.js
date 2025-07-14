import TaskStatus from "../utilities/taskstatus.js";

export default class Task{
    constructor({title="", description="",priority="Normal", status=TaskStatus.TODO, tags=[], dueDate = new Date(), project=""}){
        this.id = crypto.randomUUID();
        this.title = title;
        this.description;
        this.priority = priority;
        this.status = status;
        this.tags = [];
        this.dueDate = dueDate;
        this.project = project;
    }
    
   
}


