export default class Task {
    constructor(task) {
        this.id = null;
        this.description = null ;
        this.title = null;
        this.deadLine = null;
        this.priority = null;
        this.tags = null;
        this.assigne = null ;
        this.priority = null;
        this.isDone = null;
    }
    mapTask(task){
        this.id = task.id;
        this.description = task.description;
        this.title = task.title;
        this.deadLine = task.deadLine;
        this.priority = task.priority;
        this.tags = task.tags;
        this.assigne = task.assigne;
        this.priority = task.priority;
        this.isDone = task.isDone;
    }
}