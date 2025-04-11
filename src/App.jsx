import { useState } from "react";
import WeatherInfo from "./Components/WeatherInfo";
import "./App.css";


function App() {
  const [city, setCity] = useState("");
  const [value, setValue] = useState(null);

  async function getWeather() {
    const API_KEY = import.meta.env.VITE_API_KEY
    const API_URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;

    

    const data = await fetch(API_URL);
    const json = await data.json();
    setValue(json);
  }

  function handleClick() {
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

        {value && <WeatherInfo data={value} />}
      </div>
    </div>
  );
}

export default App;
