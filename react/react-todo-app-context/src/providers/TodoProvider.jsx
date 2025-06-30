import React, { useEffect, useMemo, useState } from "react";
import TodoContext from "../contexts/TodoContext";

export default function TodoProvider({ children }) {
    const [todos, setTodos] = useState(JSON.parse(localStorage.getItem("todos")) || []);
    const [filter, setFilter] = useState("all");

    useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(todos));
    }, [todos]);

    // create
    const addTodo = (text) => {
        if (text.trim() === "") return;

        const newTodo = {
            id: Date.now().toString(),
            text,
            isComplete: false,
        };

        setTodos([...todos, newTodo]);
    };
    // todo Toggle todo
    const toggleCompletion = (id) => {
        setTodos(
            todos.map((todo) => (todo.id === id ? { ...todo, isComplete: !todo.isComplete } : todo))
        );
    };

    // update
    const editTodo = (id, newText) => {
        setTodos(todos.map((todo) => (todo.id === id ? { ...todo, text: newText } : todo)));
    };

    // delete
    const deleteTodo = (id) => {
        setTodos(todos.filter((todo) => todo.id !== id));
    };

    // clear
    const clearCompleted = () => {
        setTodos(todos.filter((todo) => !todo.isComplete));
    };

    // filter
    const filteredTodos = useMemo(
        () =>
            todos.filter((todo) => {
                if (filter === "active") return !todo.isComplete;
                if (filter === "completed") return todo.isComplete;
                return true;
            }),
        [todos, filter]
    );

    //items left
    const itemsLeft = useMemo(() => todos.filter((todo) => !todo.isComplete).length, [todos]);
    return (
        <TodoContext.Provider
            value={{
                setFilter,
                addTodo,
                toggleCompletion,
                editTodo,
                deleteTodo,
                clearCompleted,
                todos: filteredTodos,
                itemsLeft,
            }}
        >
            {children}
        </TodoContext.Provider>
    );
}
