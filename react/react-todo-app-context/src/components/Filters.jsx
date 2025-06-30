import useTodos from "../hooks/useTodos";

const buttons = ["all", "active", "completed"];

const Filters = () => {
    const { itemsLeft, filter, setFilter, clearCompleted } = useTodos();
    return (
        <section className="text-center text-gray-400 mt-8">
            <div className="card flex bg-base-100 shadow-lg p-4 rounded-lg">
                <p>
                    <span id="items-left">{itemsLeft}</span> items left
                </p>
                <div role="tablist" className="filter flex justify-center gap-2 tabs">
                    {buttons.map((button, i) => (
                        <button
                            key={"button" + i}
                            role="tab"
                            className={`
                                ${
                                    filter === button
                                        ? "text-brightBlue tab-active font-extrabold"
                                        : ""
                                }
                                 tab capitalize font-medium hover:font-extrabold
                            `}
                            onClick={() => setFilter(button)}
                        >
                            {button}
                        </button>
                    ))}
                </div>
                <button onClick={clearCompleted} className="btn btn-ghost">
                    Clear Completed
                </button>
            </div>
        </section>
    );
};

export default Filters;
