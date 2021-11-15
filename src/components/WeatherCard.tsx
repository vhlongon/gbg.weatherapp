import React, { Fragment } from "react";
import { ResponseData } from "../types";
import classes from "./weathercard.module.css";
import { convertDate, getAverageTemp, getMedianTemp } from "../utils/utils";

export interface Props extends Pick<ResponseData, "current" | "hourly"> {
  title: string;
}

const WeatherCard = ({ title, current, hourly }: Props) => {
  const allTemps = hourly.map((h) => h.temp);

  return (
    <div className={classes.weathercard}>
      <p className={classes.titleContainer}>
        <span className={classes.title}>{title}</span>
        <span className={classes.date}>{convertDate(current.dt)}</span>
      </p>
      <div className={classes.weatherMain}>
        {current.weather.map((w) => (
          <Fragment key={w.main}>
            <img
              alt={w.main}
              src={`http://openweathermap.org/img/w/${w.icon}.png`}
            />
            <span>{w.description}</span>
          </Fragment>
        ))}
      </div>
      <div className={classes.tempContainer}>
        <div className={classes.temperature} aria-label="avg-temp">
          <small>Avg:</small> {getAverageTemp(...allTemps)}
        </div>

        <div className={classes.temperature} aria-label="median-temp">
          <small>Median:</small> {getMedianTemp(...allTemps)}
        </div>
      </div>

      <div className={classes.tempContainer}>
        <div className={classes.temperature} aria-label="min-temp">
          <small>Min:</small> {Math.min(...allTemps)}°
        </div>
        <div className={classes.temperature} aria-label="max-temp">
          <small>Max:</small> {Math.max(...allTemps)}°
        </div>
      </div>

      <ul className={classes.weatherInfo}>
        <li className={classes.weatherInfoItem} aria-label="humidity">
          <strong>Humidity</strong>
          <span>{current.humidity}%</span>
        </li>
        <li className={classes.weatherInfoItem} aria-label="wind-speed">
          <strong>Wind speed</strong>
          <span>{current.wind_speed} m/s</span>
        </li>
        <li className={classes.weatherInfoItem} aria-label="visibility">
          <strong>Visibility</strong>
          <span>{current.visibility} m</span>
        </li>
      </ul>
      <br />
    </div>
  );
};

export default WeatherCard;
