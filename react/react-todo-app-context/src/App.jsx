import Header from "./components/Header";
import TodoList from "./components/TodoList";
import Filters from "./components/Filters";
import useTheme from "./hooks/useTheme";
import TodoProvider from "./providers/TodoProvider";

function App() {
    const { theme } = useTheme();

    return (
        <main
            className="min-h-screen bg-base-100 bg-no-repeat"
            style={{
                backgroundImage: `url(/images/bg-desktop-${theme}.jpg)`,
                backgroundSize: "100vw 100vh",
            }}
        >
            <div className="container mx-auto px-4 pt-12 max-w-md">
                {/* header */}
                <Header />
                {/* main */}
                <TodoProvider>
                    {/* todolist */}
                    <TodoList />
                    {/* filters */}
                    <Filters />
                </TodoProvider>
            </div>

            {/* footer */}
        </main>
    );
}

export default App;
