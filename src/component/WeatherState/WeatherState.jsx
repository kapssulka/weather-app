import React from "react";
import SynnyIcon from "../icons/weather/SunnyIcon";
import CloudyIcon from "../icons/weather/CloudyIcon";
import OvercastIcon from "../icons/weather/OvercastIcon";
import RainIcon from "../icons/weather/RainIcon";

export default function WeatherState({ weatherState, size = 60 }) {
  return (
    <>
      {weatherState === "Sunny" && <SynnyIcon size={size} />}
      {weatherState === "Cloudy" && <CloudyIcon size={size} />}
      {weatherState === "Overcast" && <OvercastIcon size={size} />}
      {weatherState === "Rain" && <RainIcon size={size} />}
    </>
  );
}
