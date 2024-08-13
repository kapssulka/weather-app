import { useContext } from "react";
import classes from "./TimeBlock.module.scss";
import { weatherContext } from "../../../App";

export default function TimeBlock() {
  const { cityName } = useContext(weatherContext);

  return (
    <div className={classes.timeWrapper}>
      <div className={classes.city}>{cityName}</div>
      <div className={classes.time}>09:03</div>
      <div className={classes.date}>Thursday, 31 Aug</div>
    </div>
  );
}
