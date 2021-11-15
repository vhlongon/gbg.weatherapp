import React from "react";
import { ResponseData } from "./types";
import { useAsync } from "./hooks/useAsyncHook";
import { fetchWeatherData } from "./api";
import WeatherCard from "./components/WeatherCard";
import classes from "./app.module.css";
import "./index.css";

const App = () => {
  const { data, error, status } = useAsync<ResponseData[]>(fetchWeatherData);

  if (status === "pending") {
    return (
      <div className={classes.loadingContainer}>
        <div className={classes.loadingSpinner}>
          <div></div>
          <div></div>
        </div>
        <p>loading...</p>
      </div>
    );
  }

  if (status === "error") {
    return (
      <div className={classes.errorContainer}>
        {typeof error === "string" ? error : error?.message}
      </div>
    );
  }

  return (
    <div className={classes.container}>
      <ul className={classes.cardsList} aria-label="weather-list">
        {data?.map((day) => (
          <li key={day.current.dt}>
            <WeatherCard {...day} title="Gothenburg" />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
