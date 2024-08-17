import classes from "./Theme.module.scss";

import { useContext } from "react";
import cn from "classnames";
import { weatherContext } from "../../../App";

export default function Theme() {
  const { darkTheme, setDarkTheme } = useContext(weatherContext);

  const handleClick = (e) => {
    localStorage.setItem("isDark", !darkTheme);
    setDarkTheme((prev) => !prev);
  };

  return (
    <div
      className={cn(classes.theme, {
        [classes.dark]: darkTheme,
      })}
    >
      <div onClick={handleClick} className={classes.theme__checkbox}>
        <span></span>
      </div>

      <div className={classes.theme__text}>
        {darkTheme ? "Dark Mode" : "Light Mode"}
      </div>
    </div>
  );
}
