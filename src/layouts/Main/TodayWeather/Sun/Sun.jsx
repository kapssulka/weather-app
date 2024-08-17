import classes from "./Sun.module.scss";
import cn from "classnames";

export default function Sun({
  children,
  type = "sunrise",
  className = "",
  time = "00:00",
}) {
  let urlImg;
  let textType;
  if (type === "sunrise") {
    textType = "Sunrise";
  }
  if (type === "sunset") {
    textType = "Sunset";
  }

  return (
    <div className={cn(classes.wrapper, className)}>
      {children}
      <div className={classes.text}>
        <div className={classes.type}>{textType}</div>
        <div className={classes.time}>{time}</div>
      </div>
    </div>
  );
}
