export default function WeatherInfo({ data }) {
  const { name, type, temperature } = data;

  return (
    <div className="info">
      <h2>🏡 {name}</h2>
      <h2>☁ {type}</h2>
      <h2>🌡 {temperature} °C</h2>
    </div>
  );
}
