import classes from "./ErrorComponent.module.scss";

import { useContext } from "react";
import { weatherContext } from "../../App";

import cn from "classnames";

export default function ErrorComponent({ children }) {
  const { darkTheme } = useContext(weatherContext);
  return (
    <main
      className={cn(classes.error, {
        [classes.dark]: darkTheme,
      })}
    >
      <h1 className={classes.title}>{children}</h1>
    </main>
  );
}
