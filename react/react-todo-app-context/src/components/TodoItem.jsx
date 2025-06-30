import useTodos from "../hooks/useTodos";

const TodoItem = ({ todo, onEditRequest }) => {
    const { toggleCompletion, deleteTodo } = useTodos();

    return (
        <li className="flex justify-between items-center p-4 border-b border-base-200">
            <div className="flex items-center gap-2">
                <input
                    type="checkbox"
                    checked={todo.isComplete}
                    onChange={() => toggleCompletion(todo.id)}
                    className="checkbox checkbox-primary"
                />
                <p className={todo.isComplete ? "line-through text-gray-400" : ""}>{todo.text}</p>
            </div>
            <div className="flex ">
                <button
                    onClick={() => onEditRequest(todo.id, todo.text)}
                    className="btn btn-ghost btn-sm"
                >
                    <span className="icon-[iwwa--edit] text-base-content"></span>
                </button>
                <button onClick={() => deleteTodo(todo.id)} className="btn btn-ghost btn-sm">
                    <span className="icon-[iwwa--delete] text-base-content"></span>
                </button>
            </div>
        </li>
    );
};

export default TodoItem;
