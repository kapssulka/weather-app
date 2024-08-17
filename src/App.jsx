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
import ErrorComponent from "./component/ErrorComponent/ErrorComponent";
import { setArrayFromSearchCitys } from "./helpers/getData";

const APIkey = "c228931bb8313f4f70954b0367327206";

export const weatherContext = createContext(null);

function App() {
  const [darkTheme, setDarkTheme] = useState(false);

  const [cityName, setCityName] = useState("London");
  const [query, setQuery] = useState("");
  const [error, setError] = useState("");
  const [citysNames, setCitysNames] = useState([]);

  // TodayWaether Date
  const [dateForTodayWaether, setDateForTodayWaether] = useState([]);
  const [dateForDaysForecast, setDateForDaysForecast] = useState([]);
  const [dateForHourlyForecast, setDateForHourlyForecast] = useState([]);

  useEffect(() => {
    if (localStorage.getItem("isDark")) {
      const isDark = JSON.parse(localStorage.getItem("isDark"));
      setDarkTheme(isDark);
    }
  }, []);

  // Search Date
  useEffect(() => {
    const fetchData = async () => {
      const url = `https://nominatim.openstreetmap.org/search?q=${query}&format=json&addressdetails=1&limit=5&accept-language=en&class=place&type=city`;
      const response = await fetch(url);

      const data = await response.json();

      const searchCitys = setArrayFromSearchCitys(data);
      setCitysNames(searchCitys);
    };
    fetchData();
  }, [query]);

  // Weather Date
  useEffect(() => {
    const fetchData = async () => {
      try {
        const url = `https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=${APIkey}&units=metric`;

        const response = await fetch(url);

        if (!response.ok) throw new Error("Incorrect data");

        const data = await response.json();

        setError("");

        // форматируем данные
        setDateForTodayWaether(formatTodayWeatherDate(data));
        setDateForDaysForecast(formatDaysForecastDate(data, cityName));
        setDateForHourlyForecast(formatHourlyForecastDate(data));
      } catch (error) {
        setError(error.message);
      }
    };

    if (cityName) fetchData();
    else setError("empty");
  }, [cityName]);

  return (
    <weatherContext.Provider
      value={{
        dateForTodayWaether,
        dateForDaysForecast,
        dateForHourlyForecast,
        cityName,
        setCityName,
        query,
        setQuery,
        citysNames,
        setCitysNames,
        darkTheme,
        setDarkTheme,
      }}
    >
      <Layout>
        <Header />

        {!error && <Main />}

        {error === "Incorrect data" && (
          <ErrorComponent>Incorrect city name!</ErrorComponent>
        )}

        {error === "empty" && (
          <ErrorComponent>
            Enter a city name or define a location!
          </ErrorComponent>
        )}
      </Layout>
    </weatherContext.Provider>
  );
}

export default App;
