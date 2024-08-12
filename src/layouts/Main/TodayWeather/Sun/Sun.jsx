import classes from "./Sun.module.scss";
import cn from "classnames";

export default function Sun({ type = "sunrise", className = "" }) {
  let urlImg;
  let textType;
  if (type === "sunrise") {
    urlImg = "/src/assets/icons/todayBlock/sunrise.svg";
    textType = "Sunrise";
  }
  if (type === "sunset") {
    urlImg = "/src/assets/icons/todayBlock/sunset.svg";
    textType = "Sunset";
  }

  return (
    <div className={cn(classes.wrapper, className)}>
      <img src={urlImg} alt={type} />
      <div className={classes.text}>
        <div className={classes.type}>{textType}</div>
        <div className={classes.time}>
          <span>06:37</span> AM
        </div>
      </div>
    </div>
  );
}
