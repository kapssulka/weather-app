import classes from "./TimeBlock.module.scss";

import { useContext, useEffect, useState } from "react";
import { weatherContext } from "../../../App";
import { getDateByCity, getTimeByCity } from "../../../helpers/workWithDate";

import cn from "classnames";
import { useSelector } from "react-redux";

export default function TimeBlock() {
  const { darkTheme } = useContext(weatherContext);

  const cityName = useSelector((state) => state.search.cityName);

  const [time, setTime] = useState(getTimeByCity(cityName));

  const date = getDateByCity(cityName);

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(getTimeByCity(cityName));
    }, 1000);

    return () => clearInterval(interval);
  }, [cityName, time]);

  return (
    <div
      className={cn(classes.timeWrapper, {
        [classes.dark]: darkTheme,
      })}
    >
      <div className={classes.city}>{cityName}</div>
      <div className={classes.time}>{time}</div>
      <div className={classes.date}>{date}</div>
    </div>
  );
}
