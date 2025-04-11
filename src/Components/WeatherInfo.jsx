export default function WeatherInfo({ data }) {
  return (
    <div className="info">
      <h2>🏡 {data.name}</h2>
      <h2>☁ {data.weather[0].main}</h2>
      <h2>🌡{data.main.temp} °C</h2>
    </div>
  );
}
