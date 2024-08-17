import classes from "./TodayWeather.module.scss";

import { useContext } from "react";
import { weatherContext } from "../../../App";

import CelsiusBlock from "./CelsiusBlock/CelsiusBlock";
import WeatherStateBlock from "./WeatherStateBlock/WeatherStateBlock";
import OtherInfoBlock from "./OtherInfoBlock/OtherInfoBlock";

import cn from "classnames";

export default function TodayWeather() {
  const { dateForTodayWaether, darkTheme } = useContext(weatherContext);
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
    <div
      className={cn(classes.todayWrapper, {
        [classes.dark]: darkTheme,
      })}
    >
      <CelsiusBlock
        darkTheme={darkTheme}
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
