import { Router } from "express";
import { weatherList } from "../../Database/weatherData.mjs";

const router = Router();

router.get("/", (req, res) => {
  // - /weather
  const city = req.query.cityName;
  if (!city) {
    res.status(400).json({ error: "Please enter city name" });
  }

  const weather = weatherList.find((weather) => {
    return weather.name.toLowerCase() == city.toLowerCase();
  });
  //weather wo hai - Weather object
  //weather nahi hai - Weather variable - undefined

  if (!weather) {
    res.status(404).json({ message: "City not found, Please try again" });
  }

  res.json(weather);
});

export default router;
