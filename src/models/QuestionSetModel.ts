import mongoose from "mongoose";

const QuestionSetSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    questions: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Question'
        }
    ],
    createdAt: {
        type: Date,
        default: Date.now
    }
});

const QuestionSchema= new mongoose.Schema({
    question: {
        type: String,
        required: true
    },
    options: [
        {
            type: String,
            required: true
        }
    ],
    correctOption: {
        type: String,
        required: true
    },
    marks: {
        type: Number,
        required: true
    }
});

export const QuestionSet = mongoose.model('QuestionSet', QuestionSetSchema);
export const Question = mongoose.model('Question', QuestionSchema);