import mongoose from "mongoose";

export type TaskDocument = mongoose.Document & {
    id: number;
    name: string;
    creationDate: Date;
    dueDate: Date;
    recurrency: number[];
}

const taskSchema = new mongoose.Schema({
    id: String,
    name: String,
    creationDate: Date,
    dueDate: Date,
    recurrency: String
});

export const Task = mongoose.model<TaskDocument>("Task", taskSchema);
