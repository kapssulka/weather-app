import OvercastIcon from "../../../../component/icons/weather/OvercastIcon";
import classes from "./WeatherStateBlock.module.scss";

import SynnyIcon from "/src/component/icons/weather/SunnyIcon";
import RainIcon from "/src/component/icons/weather/RainIcon";
import CloudyIcon from "../../../../component/icons/weather/CloudyIcon";

export default function WeatherStateBlock({ weatherState }) {
  return (
    <div className={classes.weatherState}>
      {weatherState === "Sunny" && <SynnyIcon width={270} height={270} />}
      {weatherState === "Cloudy" && <CloudyIcon width={270} height={270} />}
      {weatherState === "Overcast" && <OvercastIcon width={270} height={270} />}
      {weatherState === "Rain" && <RainIcon width={270} height={270} />}

      <h3 className={classes.text}>{weatherState}</h3>
    </div>
  );
}
