import mongoose from "mongoose";

const taskSchema = new mongoose.Schema({
    _id: { type: Number, unique: true },
    name: String,
    creationDate: Date,
    dueDate: Date,
    recurrency: Number
}, { timestamps: true });
