import { Worklog } from "./worklog";

class Task {
    private id: number;
    private name: string;
    private creationDate: Date;
    private dueDate: Date;
    private recurrency: number;
    private workLog: Worklog;

    constructor(name: string, dueDate?: Date) {
        this.id = 0;
        this.name = name;
        this.creationDate = new Date();
        this.dueDate = dueDate;
        this.recurrency = 0;
        this.workLog = null;
    }
}

export default Task;