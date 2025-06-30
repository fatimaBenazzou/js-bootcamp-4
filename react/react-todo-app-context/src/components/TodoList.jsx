import { useRef, useState } from "react";
import TodoItem from "./TodoItem";
import useTodos from "../hooks/useTodos";

const TodoList = () => {
    const [newTodoText, setNewTodoText] = useState("");
    const { addTodo, todos, editTodo } = useTodos();
    const [dialog, setDialog] = useState({ id: null, text: "" });
    const dialogRef = useRef(null);

    const handleAddTodo = () => {
        addTodo(newTodoText);
        setNewTodoText("");
    };

    const saveEdit = () => {
        editTodo(dialog.id, dialog.text);
        dialogRef.current?.close();
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
                        onEditRequest={(id, currentValue) => {
                            setDialog({ id, text: currentValue });
                            dialogRef.current?.showModal();
                        }}
                    />
                ))}
            </ul>

            {/* Modal pour l'édition */}
            <dialog ref={dialogRef} className="modal">
                <div className="modal-box">
                    <h3 className="font-bold text-lg">Edit Todo</h3>
                    <input
                        type="text"
                        value={dialog.text}
                        onChange={(e) => setDialog((p) => ({ ...p, text: e.target.value }))}
                        className="input input-bordered w-full mt-4"
                    />
                    <div className="modal-action">
                        <form method="dialog">
                            <button className="btn" onClick={saveEdit}>
                                Save
                            </button>
                            <button className="btn ml-2">Close</button>
                        </form>
                    </div>
                </div>
            </dialog>
        </div>
    );
};

export default TodoList;
