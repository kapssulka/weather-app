import DayForecast from "./DayForecast/DayForecast";
import classes from "./DaysForecast.module.scss";

export default function DaysForecast() {
  return (
    <div className={classes.wrapper}>
      <h2 className={classes.title}>5 Days Forecast:</h2>

      <DayForecast dayOfTheWeek="Friday, 1 Sep" degreesCelsius="20°C" />
      <DayForecast
        weather="rain"
        dayOfTheWeek="Friday, 1 Sep"
        degreesCelsius="20°C"
      />
      <DayForecast
        weather="rain"
        dayOfTheWeek="Friday, 1 Sep"
        degreesCelsius="20°C"
      />
      <DayForecast dayOfTheWeek="Friday, 1 Sep" degreesCelsius="20°C" />
      <DayForecast
        weather="rain"
        dayOfTheWeek="Friday, 1 Sep"
        degreesCelsius="20°C"
      />
    </div>
  );
}
