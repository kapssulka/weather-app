import WeatherState from "../../../../component/WeatherState/WeatherState";
import classes from "./DayForecast.module.scss";

export default function DayForecast({
  weatherState = "",
  degreesCelsius = "",
  dayOfTheWeek = "",
}) {
  return (
    <div className={classes.wrapper}>
      <div className={classes.leftBlock}>
        <WeatherState weatherState={weatherState} />

        <div className={classes.celsius}>{degreesCelsius}°C</div>
      </div>

      <div className={classes.dayOfTheWeek}>{dayOfTheWeek}, 1 Sep</div>
    </div>
  );
}
