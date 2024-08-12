import classes from "./Theme.module.scss";

import { useState } from "react";
import cn from "classnames";

export default function Theme() {
  const [darkThema, setDarkThema] = useState(false);

  return (
    <div
      className={cn(classes.theme, {
        [classes.dark]: darkThema,
      })}
    >
      <div
        onClick={() => setDarkThema((prev) => !prev)}
        className={classes.theme__checkbox}
      >
        <span></span>
      </div>

      <div className={classes.theme__text}>Dark Mode</div>
    </div>
  );
}
