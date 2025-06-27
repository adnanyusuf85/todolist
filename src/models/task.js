import TaskStatus from "../utilities/taskstatus.js";

export default class Task{
    constructor(title="", description="",priority="Normal", status=TaskStatus.TODO, tags=[], dueDate = new Date()){
        this.id;
        this.title = title;
        this.description;
        this.priority;
        this.status;
        this.tags = [];
        this.dueDate;
    }
    
   
}


