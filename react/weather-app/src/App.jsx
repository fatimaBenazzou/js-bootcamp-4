import React, { useState } from "react";

export default function App() {
    const [weatherData, setWeatherData] = useState(null);
    const [city, setCity] = useState("Alger");

    const fetchWeater = async () => {
        try {
            const response = await fetch(
                `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${
                    import.meta.env.VITE_API_KEY
                }&units=metric`
            );
            const data = await response.json();
            if (data.cod === 200) {
                setWeatherData(data);
            } else {
                throw new Error("Ville non trouvee");
            }
        } catch (error) {
            console.error(error.message);
        }
    };

    const handleSearch = (e) => {
        e.preventDefault();

        fetchWeater();
    };

    console.log({ weatherData });
    return (
        <main>
            <form onSubmit={handleSearch}>
                <input
                    type="text"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    placeholder="Enter a city"
                />
                <button type="submit">🔍</button>
            </form>
            {weatherData && <div>{weatherData.main.temp}</div>}
        </main>
    );
}
