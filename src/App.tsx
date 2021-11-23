import React from "react";
import { ResponseData } from "./types";
import { useAsync } from "./hooks/useAsyncHook";
import { fetchWeatherData } from "./api";
import WeatherCard from "./components/WeatherCard";
import SunnyIcon from "./icons/Sunny";
import TermometerIcon from "./icons/Termometer";
import classes from "./app.module.css";
import "./index.css";
import WeatherTemps from "./components/WeatherTemps";
import weatherCardClasses from "./components/weathercard.module.css";
import { getAverageTemp, getMedianTemp } from "./utils";

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
      <div className={classes.container}>
        <div className={classes.errorContainer}>
          <span>
            Message:{" "}
            <code>{typeof error === "string" ? error : error?.message}</code>
          </span>
          <div>
            <span>Status: </span> <code>{error?.status}</code>
          </div>
        </div>
      </div>
    );
  }

  if (data) {
    const [today, ...latestDays] = data;

    const allDaysTemps = data
      .map(({ hourly }) => hourly.map(({ temp }) => temp))
      .flat();

    return (
      <div>
        <div className={classes.container}>
          <h1 className={classes.pageTitle}>
            Weather in Gothenburg <SunnyIcon size={100} color="#ffbc02" />
          </h1>
          <h2 className={classes.pagesubTitle}>
            <TermometerIcon color="#f5cc7f" size={60} /> Today's weather
          </h2>
          <hr />
          {
            <WeatherCard
              {...today}
              title="Gothenburg"
              data-testid="today-weather"
            />
          }

          <hr />
          <h2 className={classes.pagesubTitle}>
            <TermometerIcon color="#f5cc7f" size={60} /> Latest 4 days
          </h2>
          <ul className={classes.cardsList} aria-label="weather-list">
            {latestDays.map((day) => (
              <li key={day.current.dt}>
                <WeatherCard {...day} title="Gothenburg" />
              </li>
            ))}
          </ul>
          <hr />
          <h2 className={classes.pagesubTitle}>
            <TermometerIcon color="#f5cc7f" size={60} /> Averages for all days
          </h2>
          <div className={weatherCardClasses.weathercard}>
            <WeatherTemps
              min={Math.min(...allDaysTemps)}
              max={Math.max(...allDaysTemps)}
              median={getMedianTemp(...allDaysTemps)}
              avg={getAverageTemp(...allDaysTemps)}
            />
          </div>
        </div>
      </div>
    );
  }

  return <div className={classes.container}>no data</div>;
};

export default App;
