import moment from "moment";
import { useEffect, useState } from "react";

function App() {
    const [targetDate, setTargetDate] = useState("");
    const [timeLeft, setTimeLeft] = useState(null);
    const [isRunning, setIsRunning] = useState(false);

    useEffect(() => {
        if (!isRunning || !targetDate) return;

        const interval = setInterval(() => {
            const now = moment();
            const then = moment(targetDate, "YYYY-MM-DDTHH:mm");

            if (then.isBefore(now)) {
                clearInterval(interval);
                return;
            }
            const duration = moment.duration(then.diff(now));
            console.log(duration);
            setTimeLeft({
                days: Math.floor(duration.asDays()),
                hours: duration.hours(),
                minutes: duration.minutes(),
                seconds: duration.seconds(),
            });
        }, 1000);

        return () => clearInterval(interval);
    }, [targetDate, isRunning]);

    const startCountdown = () => {
        if (targetDate) {
            setIsRunning(true);
        }
    };
    const resetCountdown = () => {
        setIsRunning(false);
    };

    console.log({ timeLeft });
    return (
        <main>
            <h1>Coundown Timer</h1>
            <input
                type="datetime-local"
                value={targetDate}
                onChange={(e) => setTargetDate(e.target.value)}
            />

            {/* action buttons */}
            <div>
                <button onClick={startCountdown} disabled={isRunning}>
                    Start
                </button>
                <button onClick={resetCountdown}>Reset</button>
            </div>
        </main>
    );
}

export default App;
