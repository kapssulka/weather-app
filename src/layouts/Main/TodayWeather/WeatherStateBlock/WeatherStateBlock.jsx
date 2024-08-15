import classes from "./WeatherStateBlock.module.scss";

import WeatherState from "../../../../component/WeatherState/WeatherState";

export default function WeatherStateBlock({ weatherState }) {
  return (
    <div className={classes.weatherState}>
      <WeatherState weatherState={weatherState} size={270} />
      <h3 className={classes.text}>{weatherState}</h3>
    </div>
  );
}
