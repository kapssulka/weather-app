import { useContext } from "react";
import DayForecast from "./DayForecast/DayForecast";
import classes from "./DaysForecast.module.scss";
import { weatherContext } from "../../../App";

export default function DaysForecast() {
  const { dateForDaysForecast } = useContext(weatherContext);

  return (
    <div className={classes.wrapper}>
      <h2 className={classes.title}>5 Days Forecast:</h2>

      {dateForDaysForecast.map((item, index) => (
        <DayForecast
          key={index}
          weatherState={item.weatherState}
          dayOfTheWeek={item.date}
          degreesCelsius={item.temp}
        />
      ))}
    </div>
  );
}
