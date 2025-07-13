import { useEffect, useState } from "react";
import { getWeather } from "./api/endpoints/weather";

const details = [
    {
        icon: "icon-[wi--humidity]",
        value: (weatherData) => `${weatherData.main.humidity}%`,
    },
    {
        icon: "icon-[wi--strong-wind]",
        value: (weatherData) => `${weatherData.wind.speed} m/s`,
    },
    {
        icon: "icon-[wi--barometer]",
        value: (weatherData) => `${weatherData.main.pressure} hPa`,
    },
    {
        icon: "icon-[wi--cloudy]",
        value: (weatherData) => `${weatherData.clouds.all}%`,
    },
];

const getWeatherIcon = (weather) => {
    switch (weather) {
        case "Clear":
            return "icon-[wi--day-sunny]";
        case "Clouds":
            return "icon-[wi--cloudy]";
        case "Rain":
            return "icon-[wi--rain]";
        case "Snow":
            return "icon-[wi--snow]";
        case "Thunderstorm":
            return "icon-[wi--thunderstorm]";
        case "Drizzle":
            return "icon-[wi--showers]";
        case "Mist":
            return "icon-[mdi--weather-mist]";
        case "Smoke":
            return "icon-[mdi--smoke]";
        case "Haze":
            return "icon-[mdi--weather-hazy]";
        case "Dust":
            return "icon-[mdi--weather-dust]";
        case "Fog":
            return "icon-[mdi--weather-fog]";
        case "Tornado":
            return "icon-[mdi-weather-tornado]";
        default:
            return "icon-[wi--day-sunny]";
    }
};

const getBackgrooundColor = (weather) => {
    switch (weather) {
        case "Clear":
            return "from-orange-300 to-yellow-300";
        case "Clouds":
            return "from-gray-300 to-blue-300";
        case "Rain":
            return "from-blue-300 to-indigo-500";
        case "Snow":
            return "from-white to-blue-200";
        case "Thunderstorm":
            return "from-gray-700 to-black";
        default:
            return "from-gray-300 to-blue-300";
    }
};

export default function App() {
    const [weatherData, setWeatherData] = useState(null);
    const [city, setCity] = useState("Alger");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const fetchWeather = async () => {
        setLoading(true);
        setError(null);
        try {
            // const response = await fetch(
            //     `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${
            //         import.meta.env.VITE_API_KEY
            //     }&units=metric`
            // );
            // const data = await response.json();
            // if (data.cod === 200) {
            //     setWeatherData(data);
            // } else {
            //     throw new Error("Ville non trouvee");
            // }
            const response = await getWeather({ city });

            if (response.status === 200) {
                setWeatherData(response.data);
            } else {
                throw new Error("Ville non trouvee");
            }
        } catch (error) {
            setError("Erreur lors de la récuperation de données " + error.message);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchWeather();
    }, []);

    const handleSearch = (e) => {
        e.preventDefault();

        fetchWeather();
    };

    return (
        <main className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
            <section className="w-full max-w-md ">
                <form onSubmit={handleSearch} className="flex gap-4 items-center mb-4">
                    <input
                        type="text"
                        value={city}
                        onChange={(e) => setCity(e.target.value)}
                        placeholder="Enter a city"
                        className="input bg-white text-black rounded-full flex-1"
                    />
                    <button
                        disabled={loading}
                        className="btn bg-white btn-circle border-0 text-black"
                        type="submit"
                    >
                        {loading ? (
                            <span className="loading loading-spinner"></span>
                        ) : (
                            <span className="w-5 h-5 icon-[bi--search]"></span>
                        )}
                    </button>
                </form>

                {error && <p className="text-red-500 text-center">{error}</p>}

                {weatherData && weatherData.cod === 200 && (
                    <div
                        className={`rounded-lg shadow-lg p-6 text-white bg-gradient-to-b ${getBackgrooundColor(
                            weatherData.weather[0].main
                        )}`}
                    >
                        {/* main infos */}
                        <div className="flex flex-col items-center gap-4">
                            {/* icon */}
                            <span
                                className={`w-16 h-16 ${getWeatherIcon(
                                    weatherData.weather[0].main
                                )}`}
                            ></span>
                            {/* city + weather description */}
                            <div className="text-center">
                                <h2 className="text-2xl font-bold">{weatherData.name}</h2>
                                <p className="text-sm">{weatherData.weather[0].description}</p>
                            </div>
                            {/* temp */}
                            <p className="text-6xl font-bold">
                                {Math.round(weatherData.main.temp)}°C
                            </p>
                        </div>

                        {/* details */}
                        <ul className="grid grid-cols-2 gap-4 mt-6">
                            {details.map((detail, index) => (
                                <li key={detail.icon + index} className="flex items-center gap-2">
                                    <span className={`w-6 h-6 ${detail.icon}`}></span>
                                    <p>{detail.value(weatherData)}</p>
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
            </section>
        </main>
    );
}
