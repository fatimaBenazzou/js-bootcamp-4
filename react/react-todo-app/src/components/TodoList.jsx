import { useState } from "react";
import TodoItem from "./TodoItem";

const TodoList = ({ addTodo, todos, toggleTodo, deleteTodo, editTodo }) => {
    const [newTodoText, setNewTodoText] = useState("");

    const handleAddTodo = () => {
        addTodo(newTodoText);
        setNewTodoText("");
    };

    return (
        <div>
            <div className="card bg-base-100 shadow-lg p-4 mb-4 rounded-lg">
                <div className="flex items-center gap-2">
                    <input
                        type="text"
                        placeholder="Create a new todo..."
                        value={newTodoText}
                        onChange={(e) => setNewTodoText(e.target.value)}
                        onKeyDown={(e) => e.key === "Enter" && handleAddTodo()}
                        className="flex-1 input input-ghost w-full"
                    />
                    <button
                        onClick={handleAddTodo}
                        className="btn btn-circle btn-sm btn-ghost border border-placeholderColor"
                    >
                        <span className="icon-[iwwa--add] text-base-content"></span>
                    </button>
                </div>
            </div>
            <ul className="card bg-base-100 shadow-lg rounded-lg">
                {todos.map((todo) => (
                    <TodoItem
                        key={todo.id}
                        todo={todo}
                        toggleTodo={toggleTodo}
                        deleteTodo={deleteTodo}
                        editTodo={editTodo}
                    />
                ))}
            </ul>
        </div>
    );
};

export default TodoList;
