import React, { Fragment } from "react";
import { ResponseData } from "../types";
import classes from "./weathercard.module.css";
import { convertDate, getAverageTemp, getMedianTemp } from "../utils";
import WindyIcon from "../icons/Windy";
import RainyIcon from "../icons/Rainy";
import CloudySunnyIcon from "../icons/CloudySunny";
import WeatherTemps from "./WeatherTemps";

export interface Props extends Pick<ResponseData, "current" | "hourly"> {
  title: string;
}

const WeatherCard = ({ title, current, hourly, ...props }: Props) => {
  const allTemps = hourly.map((h) => h.temp);

  return (
    <div className={classes.weathercard} {...props}>
      <p className={classes.titleContainer}>
        <span className={classes.title}>{title}</span>
        <span className={classes.date}>{convertDate(current.dt)}</span>
      </p>
      <div className={classes.weatherMain}>
        {current.weather.map((w) => (
          <div className={classes.weatherMainItem} key={w.main}>
            <img
              alt={w.main}
              src={`http://openweathermap.org/img/w/${w.icon}.png`}
            />
            <span>{w.description}</span>
          </div>
        ))}
      </div>
      <WeatherTemps
        min={Math.min(...allTemps)}
        max={Math.max(...allTemps)}
        median={getMedianTemp(...allTemps)}
        avg={getAverageTemp(...allTemps)}
      />

      <ul className={classes.weatherInfo}>
        <li className={classes.weatherInfoItem} aria-label="humidity">
          <strong>
            Humidity <RainyIcon size={30} color="#7f9cf5" />
          </strong>
          <span>{current.humidity}%</span>
        </li>
        <li className={classes.weatherInfoItem} aria-label="wind-speed">
          <strong>
            Wind speed <WindyIcon size={30} color="#7f9cf5" />
          </strong>
          <span>{current.wind_speed} m/s</span>
        </li>
        <li className={classes.weatherInfoItem} aria-label="visibility">
          <strong>
            Visibility <CloudySunnyIcon size={30} color="#7f9cf5" />
          </strong>
          <span>{current.visibility} m</span>
        </li>
      </ul>
    </div>
  );
};

export default WeatherCard;
