import mongoose from 'mongoose';


const UserSchema = new mongoose.Schema({
    _id: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    tests: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Test'
        }
    ],
    createdAt: {
        type: Date,
        default: Date.now
    },
    questionSets:[
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'QuestionSet'
        }
    ],
    activeTests: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Test'
        }
    ]
});

export const User = mongoose.model('User', UserSchema);