import { subDays } from "date-fns";
import { ResponseData } from "./types";

const GBG_COORDS = {
  lat: 57.70887,
  lon: 11.97456,
};

export const fetchWeatherData = async (): Promise<ResponseData[]> => {
  const KEY = import.meta.env.VITE_WEATHER_APP_KEY;
  const URL = `https://api.openweathermap.org/data/2.5/onecall/timemachine?lat=${GBG_COORDS.lat}&lon=${GBG_COORDS.lon}&units=metric&appid=${KEY}`;
  const today = new Date();
  const days = Array.from({ length: 4 }, (_, index) =>
    Math.floor(subDays(today, index + 1).getTime() / 1000)
  );

  return await Promise.all(
    days.map((d) => fetch(`${URL}&dt=${d}`).then((d) => d.json()))
  );
};
