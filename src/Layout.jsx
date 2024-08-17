import React, { useContext } from "react";
import { weatherContext } from "./App";

import cn from "classnames";

export default function Layout({ children }) {
  const { darkTheme } = useContext(weatherContext);

  return (
    <div
      className={cn("wrapper", {
        ["dark"]: darkTheme,
      })}
    >
      <div className="container">{children}</div>
    </div>
  );
}
