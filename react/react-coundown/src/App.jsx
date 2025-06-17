import moment from "moment";
import { useEffect, useState } from "react";
import Card from "./components/Card";

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

    useEffect(() => {
        if (targetDate === "") {
            setTimeLeft(null);
        }
    }, [targetDate]);

    useEffect(() => {
        if (!isRunning) {
            setTargetDate("");
        }
    }, [isRunning]);
    const startCountdown = () => {
        if (targetDate) {
            setIsRunning(true);
        }
    };
    const resetCountdown = () => {
        setIsRunning(false);
    };

    return (
        <main className="flex gap-4 flex-col min-h-screen justify-center items-center bg-gradient-to-br from-blue-50 to-purple-50">
            <h1 className="text-[6vw] font-bold text-gray-800 ">Coundown Timer</h1>
            <input
                type="datetime-local"
                value={targetDate}
                onChange={(e) => setTargetDate(e.target.value)}
                className="border border-gray-300 p-2 rounded-xl shadow-md"
            />

            {/* action buttons */}
            <div className="flex gap-4">
                <button
                    className={` px-4 py-2 rounded-sm ${
                        isRunning
                            ? " bg-gray-400 cursor-not-allowed"
                            : "bg-green-700 text-white hover:bg-green-900"
                    } `}
                    onClick={startCountdown}
                    disabled={isRunning}
                >
                    Start
                </button>
                <button
                    className="bg-red-600 text-white px-4 py-2 rounded-sm"
                    onClick={resetCountdown}
                >
                    Reset
                </button>
            </div>
            {timeLeft && (
                <div className="mt-8 flex justify-center gap-4 sm:gap-8">
                    {[
                        { label: "days", value: timeLeft.days, percentage: timeLeft.days / 30 },
                        { label: "hours", value: timeLeft.hours, percentage: timeLeft.hours / 24 },
                        {
                            label: "minutes",
                            value: timeLeft.minutes,
                            percentage: timeLeft.minutes / 60,
                        },
                        {
                            label: "seconds",
                            value: timeLeft.seconds,
                            percentage: timeLeft.seconds / 60,
                        },
                    ].map((counter, i) => (
                        <Card key={counter.label + i} counter={counter} />
                    ))}
                </div>
            )}
        </main>
    );
}

export default App;
