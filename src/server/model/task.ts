import mongoose from "mongoose";

class Task {
    private id: number;
    private name: string;
    private creationDate: Date;
    private dueDate: Date;
    private recurrency: number;

    constructor(name: string, dueDate?: Date) {
        this.id = 0;
        this.name = name;
        this.creationDate = new Date();
        this.dueDate = dueDate;
    }
}
const taskSchema = new mongoose.Schema({
    _id: { type: Number, unique: true },
    name: String,
    creationDate: Date,
    dueDate: Date,
    recurrency: Number
}, { timestamps: true });
