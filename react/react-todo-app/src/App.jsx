import { useEffect, useState } from "react";
import Header from "./components/Header";
import TodoList from "./components/TodoList";
import Filters from "./components/Filters";

function App() {
    const [theme, setTheme] = useState(localStorage.getItem("theme") || "dark");
    const [todos, setTodos] = useState(JSON.parse(localStorage.getItem("todos")) || []);
    const [filter, setFilter] = useState("all");

    const toggleTheme = () => {
        const newTheme = theme === "dark" ? "light" : "dark";
        setTheme(newTheme);
    };

    useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(todos));
    }, [todos]);

    useEffect(() => {
        localStorage.setItem("theme", theme);
    }, [theme]);

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
    const filteredTodos = todos.filter((todo) => {
        if (filter === "active") return !todo.isComplete;
        if (filter === "completed") return todo.isComplete;
        return true;
    });

    //items left
    const itemsLeft = todos.filter((todo) => !todo.isComplete).length;

    return (
        <main
            data-theme={theme}
            className="min-h-screen bg-base-100 bg-no-repeat"
            style={{
                backgroundImage: `url(/images/bg-desktop-${theme}.jpg)`,
                backgroundSize: "100vw 100vh",
            }}
        >
            <div className="container mx-auto px-4 pt-12 max-w-md">
                {/* header */}
                <Header theme={theme} toggleTheme={toggleTheme} />
                {/* main */}
                <section>
                    {/* todolist */}
                    <TodoList
                        todos={filteredTodos}
                        addTodo={addTodo}
                        toggleTodo={toggleCompletion}
                        editTodo={editTodo}
                        deleteTodo={deleteTodo}
                    />
                    {/* filters */}
                    <Filters
                        itemsLeft={itemsLeft}
                        setFilter={setFilter}
                        filter={filter}
                        clearCompleted={clearCompleted}
                    />
                </section>
            </div>

            {/* footer */}
        </main>
    );
}

export default App;
