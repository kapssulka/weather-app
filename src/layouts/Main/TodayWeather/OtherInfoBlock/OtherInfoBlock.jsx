import classes from "./OtherInfoBlock.module.scss";

import { WiHumidity } from "react-icons/wi";
import { PiWindBold } from "react-icons/pi";
import { IoIosTimer } from "react-icons/io";

import OtherComponent from "../OtherComponent/OtherComponent";

export default function OtherInfoBlock({ humidity, windSpeed, pressure }) {
  return (
    <div className={classes.wrapper}>
      <OtherComponent
        className={classes.humidity}
        value={humidity}
        svg={<WiHumidity size={60} />}
      >
        Humidity
      </OtherComponent>

      <OtherComponent
        className={classes.wind}
        value={windSpeed}
        svg={<PiWindBold size={60} />}
      >
        Wind Speed
      </OtherComponent>

      <OtherComponent
        className={classes.pressure}
        value={pressure}
        svg={<IoIosTimer size={60} />}
      >
        Pressure
      </OtherComponent>

      {/* <OtherComponent value="0" img="/src/assets/icons/todayBlock/uv.svg">
        UV
      </OtherComponent> */}
    </div>
  );
}
