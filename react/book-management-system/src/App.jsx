import { BrowserRouter } from "react-router";
import Routers from "./Routers";
import { Provider } from "react-redux";
import store from "./app/store";

function App() {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <Routers />
            </BrowserRouter>
        </Provider>
    );
}

export default App;
