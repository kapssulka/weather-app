import { createContext, useEffect, useState } from "react";
import "./App.scss";
import Layout from "./Layout";
import Header from "./layouts/Header/Header";
import Main from "./layouts/Main/Main";

import {
  formatDaysForecastDate,
  formatHourlyForecastDate,
  formatTodayWeatherDate,
} from "./helpers/formatHelpers";

const APIkey = "c228931bb8313f4f70954b0367327206";

export const weatherContext = createContext(null);

function App() {
  const [cityName, setSityName] = useState("Bishkek");

  // TodayWaether Date
  const [dateForTodayWaether, setDateForTodayWaether] = useState([]);
  const [dateForDaysForecast, setDateForDaysForecast] = useState([]);
  const [dateForHourlyForecast, setDateForHourlyForecast] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const url = `https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=${APIkey}&units=metric`;

      const response = await fetch(url);
      const data = await response.json();

      // форматируем данные
      setDateForTodayWaether(formatTodayWeatherDate(data));
      setDateForDaysForecast(formatDaysForecastDate(data));
      setDateForHourlyForecast(formatHourlyForecastDate(data));
    }
    if (cityName) fetchData();
  }, [cityName]);

  return (
    <weatherContext.Provider
      value={{
        dateForTodayWaether,
        dateForDaysForecast,
        dateForHourlyForecast,
        cityName,
      }}
    >
      <Layout>
        <Header />
        <Main />
      </Layout>
    </weatherContext.Provider>
  );
}

export default App;
