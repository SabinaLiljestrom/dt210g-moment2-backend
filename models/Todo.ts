import mongoose from 'mongoose';

const TodoSchema = new mongoose.Schema({
    title: { type: String, required: true, minlength: 3 },
    description: { type: String, maxlength: 200 },
    status: { type: String, enum: ['Ej påbörjad', 'Pågående', 'Avklarad'], default: 'Ej påbörjad' }
});

export const Todo = mongoose.model('Todo', TodoSchema);
