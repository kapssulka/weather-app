import classes from "./TodayWeather.module.scss";

import { useContext } from "react";
import { weatherContext } from "../../../App";

import CelsiusBlock from "./CelsiusBlock/CelsiusBlock";
import WeatherStateBlock from "./WeatherStateBlock/WeatherStateBlock";
import OtherInfoBlock from "./OtherInfoBlock/OtherInfoBlock";

export default function TodayWeather() {
  const { dateForTodayWaether } = useContext(weatherContext);
  const {
    temp,
    feelsLike,
    sunrise,
    sunset,
    weatherState,
    humidity,
    windSpeed,
    pressure,
  } = dateForTodayWaether;

  return (
    <div className={classes.todayWrapper}>
      <CelsiusBlock
        temp={temp}
        feelsLike={feelsLike}
        sunrise={sunrise}
        sunset={sunset}
      />

      <WeatherStateBlock weatherState={weatherState} />

      <OtherInfoBlock
        humidity={humidity}
        pressure={pressure}
        windSpeed={windSpeed}
      />
    </div>
  );
}
