import { createContext, useEffect, useState } from "react";
import "./App.scss";
import Layout from "./Layout";
import Header from "./layouts/Header/Header";
import Main from "./layouts/Main/Main";

import ErrorComponent from "./component/ErrorComponent/ErrorComponent";
import { useDispatch, useSelector } from "react-redux";

// From slice
import { fetchtWeatherDate } from "./store/weatherSlice";

export const weatherContext = createContext(null);

function App() {
  const dispatch = useDispatch();

  const errorSlice = useSelector((state) => state.weather.error);
  const cityName = useSelector((state) => state.search.cityName);

  const [darkTheme, setDarkTheme] = useState(false);

  // weather data
  useEffect(() => {
    dispatch(fetchtWeatherDate(cityName));
  }, [cityName]);

  // theme
  useEffect(() => {
    if (localStorage.getItem("isDark")) {
      const isDark = JSON.parse(localStorage.getItem("isDark"));
      setDarkTheme(isDark);
    }
  }, []);

  return (
    <weatherContext.Provider
      value={{
        darkTheme,
        setDarkTheme,
      }}
    >
      <Layout>
        <Header />

        {!errorSlice && <Main />}

        {errorSlice === "Incorrect data" && (
          <ErrorComponent>Incorrect city name!</ErrorComponent>
        )}

        {errorSlice === "empty" && (
          <ErrorComponent>
            Enter a city name or define a location!
          </ErrorComponent>
        )}
      </Layout>
    </weatherContext.Provider>
  );
}

export default App;
