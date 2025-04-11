import { useState } from "react";
import WeatherInfo from "./Components/WeatherInfo";
import "./App.css";
import ErrorComponent from "./Components/ErrorComponent";
import Shimmer from "./Components/Shimmer";

function App() {
  const [city, setCity] = useState("");
  const [value, setValue] = useState(null);
  const [cityNotFound, setCityNotFound] = useState(false);
  const [loading, setLoading] = useState(false);

  async function getWeather() {
    const API_KEY = import.meta.env.VITE_API_KEY;
    const API_URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;

    setLoading(true); // start shimmer

    try {
      const response = await fetch(API_URL);

      if (!response.ok) {
        if (response.status === 404) {
          setCityNotFound(true);
        } else {
          console.log(`Error: ${response.status}`);
        }
        return;
      }

      const json = await response.json();
      setValue(json);
      setCityNotFound(false);
    } catch (error) {
      console.log("Fetch error:", error);
    } finally {
      setLoading(false); // stop shimmer
    }
  }

  function handleClick() {
    setValue(null);
    getWeather();
  }

  function handleChange(event) {
    setCity(event.target.value);
  }

  return (
    <div className="fullscreen-bg">
      <div className="box">
        <h1>Weather App</h1>
        <input
          type="text"
          value={city}
          onChange={handleChange}
          placeholder="Enter your city"
        />
        <button onClick={handleClick}>Get Weather </button>

        {/* //Render a component only if we have our weather data */}

        {loading && <Shimmer />}
        {!loading && value && <WeatherInfo data={value} />}
        {!loading && cityNotFound && <ErrorComponent />}
      </div>
    </div>
  );
}

export default App;
