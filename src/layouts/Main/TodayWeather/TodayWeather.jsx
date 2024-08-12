import Sun from "./Sun/Sun";
import classes from "./TodayWeather.module.scss";
import SunnuIcon from "/src/component/icons/weather/SunnyIcon";
import OtherComponent from "./OtherComponent/OtherComponent";

export default function TodayWeather() {
  return (
    <div className={classes.todayWrapper}>
      <div className={classes.left}>
        <div className={classes.left__degreesCelsius}>24°C</div>
        <div className={classes.left__feelsLike}>
          <span>Feels like:</span>
          <span>22°C</span>
        </div>

        <Sun type="sunrise" className={classes.left__sunrise} />
        <Sun type="sunset" />
      </div>
      <div className={classes.middle}>
        <SunnuIcon width={270} height={270} />
        <h3 className={classes.middle__text}>Sunny</h3>
      </div>
      <div className={classes.right}>
        <OtherComponent
          value="41%"
          img="/src/assets/icons/todayBlock/humidity.svg"
        >
          Humidity
        </OtherComponent>

        <OtherComponent
          value="2km/h"
          img="/src/assets/icons/todayBlock/wind.svg"
        >
          Wind Speed
        </OtherComponent>

        <OtherComponent
          value="997hPa"
          img="/src/assets/icons/todayBlock/pressure.svg"
        >
          Pressure
        </OtherComponent>

        <OtherComponent value="8" img="/src/assets/icons/todayBlock/uv.svg">
          UV
        </OtherComponent>
      </div>
    </div>
  );
}
