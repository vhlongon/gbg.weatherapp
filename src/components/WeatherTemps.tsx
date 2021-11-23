import React from "react";
import classes from "./weathercard.module.css";

interface Props {
  min: number;
  max: number;
  median: number;
  avg: number;
}

const WeatherTemps = ({ min, max, median, avg }: Props) => {
  return (
    <div aria-label="weather-temps">
      <div className={classes.tempContainer}>
        <div className={classes.temperature} aria-label="avg-temp">
          <small>Avg:</small> {avg}°
        </div>

        <div className={classes.temperature} aria-label="median-temp">
          <small>Median:</small> {median}°
        </div>
      </div>

      <div className={classes.tempContainer}>
        <div className={classes.temperature} aria-label="min-temp">
          <small>Min:</small> {min}°
        </div>
        <div className={classes.temperature} aria-label="max-temp">
          <small>Max:</small> {max}°
        </div>
      </div>
    </div>
  );
};

export default WeatherTemps;
