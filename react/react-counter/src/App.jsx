import { useState } from "react";
import "./App.css";

function App() {
    const [count, setCount] = useState(0);
    const [min, setMin] = useState(-10);
    const [max, setMax] = useState(10);
    const [history, setHistory] = useState([]);

    const increment = () => {
        if (count < max) {
            setCount(count + 1);
            setHistory([...history, `+1 -> ${count + 1}`]);
        }
    };
    const decrement = () => {
        if (count > min) {
            setCount(count - 1);
            setHistory([...history, `+1 -> ${count + 1}`]);
        }
    };
    const reset = () => {
        setCount(0);
        setHistory([...history, `Reset to 0`]);
    };
    return (
        <>
            <p>{count}</p>
            <button onClick={increment}>+</button>
            <button onClick={decrement}>-</button>
            <button onClick={reset}>Reset</button>
            <div>
                <label htmlFor="">
                    Min:
                    <input
                        type="number"
                        value={min}
                        onChange={(e) => setMin(parseInt(e.target.value))}
                    />
                </label>
                <label htmlFor="">
                    Max:
                    <input
                        type="number"
                        value={max}
                        onChange={(e) => setMax(parseInt(e.target.value) || 10)}
                    />
                </label>
            </div>

            <div>
                <h3>History</h3>
                <ul>
                    {history.map((entry, i) => (
                        <li key={i}>{entry}</li>
                    ))}
                </ul>
            </div>
        </>
    );
}

export default App;
