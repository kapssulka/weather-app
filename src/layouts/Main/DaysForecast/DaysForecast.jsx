import classes from "./DaysForecast.module.scss";

import { useContext } from "react";
import DayForecast from "./DayForecast/DayForecast";
import { weatherContext } from "../../../App";
import cn from "classnames";

export default function DaysForecast() {
  const { dateForDaysForecast, darkTheme } = useContext(weatherContext);

  return (
    <div
      className={cn(classes.wrapper, {
        [classes.dark]: darkTheme,
      })}
    >
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
