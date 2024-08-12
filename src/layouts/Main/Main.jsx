import classes from "./Main.module.scss";

import DaysForecast from "./DaysForecast/DaysForecast";
import HourlyForecast from "./HourlyForecast/HourlyForecast";
import TimeBlock from "./TimeBlock/TimeBlock";
import TodayWeather from "./TodayWeather/TodayWeather";

export default function Main() {
  return (
    <main className={classes.main}>
      <div className={classes.main__top}>
        <TimeBlock />
        <TodayWeather />
      </div>
      <div className={classes.main__bottom}>
        <DaysForecast />
        <HourlyForecast />
      </div>
    </main>
  );
}
