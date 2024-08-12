import classes from "./DayForecast.module.scss";
import RainIcon from "/src/component/icons/weather/RainIcon";
import SunnyIcon from "/src/component/icons/weather/SunnyIcon";

export default function DayForecast({
  weather = "sunny",
  degreesCelsius = "",
  dayOfTheWeek = "",
}) {
  return (
    <div className={classes.wrapper}>
      <div className={classes.leftBlock}>
        {weather === "rain" && <RainIcon />}
        {weather === "sunny" && <SunnyIcon />}

        <div className={classes.celsius}>{degreesCelsius}</div>
      </div>

      <div className={classes.dayOfTheWeek}>{dayOfTheWeek}</div>
    </div>
  );
}
