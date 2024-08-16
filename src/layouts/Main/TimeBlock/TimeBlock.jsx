import { useContext, useEffect, useState } from "react";
import classes from "./TimeBlock.module.scss";
import { weatherContext } from "../../../App";
import { getDateByCity, getTimeByCity } from "../../../helpers/workWithDate";

export default function TimeBlock() {
  const { cityName } = useContext(weatherContext);

  const [time, setTime] = useState(getTimeByCity(cityName));

  const date = getDateByCity(cityName);

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(getTimeByCity(cityName));
    }, 1000);

    return () => clearInterval(interval);
  }, [cityName, time]);

  return (
    <div className={classes.timeWrapper}>
      <div className={classes.city}>{cityName}</div>
      <div className={classes.time}>{time}</div>
      <div className={classes.date}>{date}</div>
    </div>
  );
}
