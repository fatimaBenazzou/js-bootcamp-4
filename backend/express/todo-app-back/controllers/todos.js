import Todo from "../models/Todo.js";

export const getTodos = async (req, res) => {
    try {
        const todos = await Todo.find().sort({ createdAt: -1 });
        res.status(200).json(todos);
    } catch (error) {
        console.error(error);
        res.status(500).json("Failed to get todos");
    }
};

export const createTodo = async (req, res) => {
    const { text } = req.body;
    if (typeof text !== "string" || !text.trim()) {
        return console.log("Text is required");
    }

    try {
        const newTodo = new Todo({ text: text.trim() });
        await newTodo.save();
        res.status(200).json(newTodo);
    } catch (error) {
        console.error(error);
        res.status(500).json("Failed to create todo");
    }
};
