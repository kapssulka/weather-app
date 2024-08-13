import { createContext, useEffect, useState } from "react";
import "./App.scss";
import Layout from "./Layout";
import Header from "./layouts/Header/Header";
import Main from "./layouts/Main/Main";

import { formatTodayWeatherDate } from "./helpers/formatHelpers";

const APIkey = "c228931bb8313f4f70954b0367327206";

export const weatherContext = createContext(null);

function App() {
  const [weatherDataList, setWeatherDataList] = useState([]);
  const [cityData, setCityData] = useState([]);
  const [cityName, setSityName] = useState("London");

  // TodayWaether Date
  const [dateForTodayWaether, setDateForTodayWaether] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const url = `https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=${APIkey}&units=metric`;

      const response = await fetch(url);
      const data = await response.json();

      const limitedData = data.list.slice(0, 6);

      setWeatherDataList(limitedData);
      setCityData(data.city);

      // форматируем данные
      setDateForTodayWaether(formatTodayWeatherDate(data));
    }
    if (cityName) fetchData();
  }, [cityName]);

  return (
    <weatherContext.Provider
      value={{ dateForTodayWaether, weatherDataList, cityName, cityData }}
    >
      <Layout>
        <Header />
        <Main />
      </Layout>
    </weatherContext.Provider>
  );
}

export default App;
