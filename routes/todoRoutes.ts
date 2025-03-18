import express from 'express';
import { Todo } from '../models/Todo';

const router = express.Router();

// Hämta alla todos
router.get('/', async (req, res) => {
    const todos = await Todo.find();
    res.json(todos);
});

// Skapa en ny todo
router.post('/', async (req, res) => {
    try {
        const newTodo = new Todo(req.body);
        await newTodo.save();
        res.status(201).json(newTodo);
    } catch (error) {
        res.status(400).json(error);
    }
});

// Uppdatera en todo (titel, beskrivning, status)
router.put('/:id', async (req, res) => {
    const updatedTodo = await Todo.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updatedTodo);
});

// Ta bort en todo
router.delete('/:id', async (req, res) => {
    await Todo.findByIdAndDelete(req.params.id);
    res.sendStatus(204);
});

export default router;
