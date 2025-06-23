import { useState } from "react";

const TodoItem = ({ todo, toggleTodo, deleteTodo, editTodo }) => {
    const [editText, setEditText] = useState(todo.text);

    const handleEdit = () => {
        document.getElementById(`edit-modal-${todo.id}`).showModal();
    };

    const saveEdit = () => {
        if (editText.trim() !== "") {
            editTodo(todo.id, editText);
            document.getElementById(`edit-modal-${todo.id}`).close();
        }
    };
    return (
        <>
            <li className="flex justify-between items-center p-4 border-b border-base-200">
                <div className="flex items-center gap-2">
                    <input
                        type="checkbox"
                        checked={todo.isComplete}
                        onChange={() => toggleTodo(todo.id)}
                        className="checkbox checkbox-primary"
                    />
                    <p className={todo.isComplete ? "line-through text-gray-400" : ""}>
                        {todo.text}
                    </p>
                </div>
                <div className="flex ">
                    <button onClick={handleEdit} className="btn btn-ghost btn-sm">
                        <span className="icon-[iwwa--edit] text-base-content"></span>
                    </button>
                    <button onClick={() => deleteTodo(todo.id)} className="btn btn-ghost btn-sm">
                        <span className="icon-[iwwa--delete] text-base-content"></span>
                    </button>
                </div>
            </li>
            {/* Modal pour l'édition */}
            <dialog id={`edit-modal-${todo.id}`} className="modal">
                <div className="modal-box">
                    <h3 className="font-bold text-lg">Edit Todo</h3>
                    <input
                        type="text"
                        value={editText}
                        onChange={(e) => setEditText(e.target.value)}
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
        </>
    );
};

export default TodoItem;
