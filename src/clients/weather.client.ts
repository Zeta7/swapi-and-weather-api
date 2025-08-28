import axios from "axios";
import type { Location } from "../config/planet-location";

export const getCurrentWeatherByLocation = async (loc: Location) => {
  const { latitude, longitude } = loc;
  const url = "https://api.open-meteo.com/v1/forecast";
  const res = await axios.get(url, {
    params: {
      latitude,
      longitude,
      current_weather: true,
    },
  });
  return res.data.current_weather;
};
