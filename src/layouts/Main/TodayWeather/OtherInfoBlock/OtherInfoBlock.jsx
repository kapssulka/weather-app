import classes from "./OtherInfoBlock.module.scss";

import OtherComponent from "../OtherComponent/OtherComponent";

export default function OtherInfoBlock({ humidity, windSpeed, pressure }) {
  return (
    <div className={classes.wrapper}>
      <OtherComponent
        value={humidity}
        img="/src/assets/icons/todayBlock/humidity.svg"
      >
        Humidity
      </OtherComponent>

      <OtherComponent
        value={windSpeed}
        img="/src/assets/icons/todayBlock/wind.svg"
      >
        Wind Speed
      </OtherComponent>

      <OtherComponent
        value={pressure}
        img="/src/assets/icons/todayBlock/pressure.svg"
      >
        Pressure
      </OtherComponent>

      <OtherComponent value="0" img="/src/assets/icons/todayBlock/uv.svg">
        UV
      </OtherComponent>
    </div>
  );
}
