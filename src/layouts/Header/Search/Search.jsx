import classes from "./Search.module.scss";
import { useContext, useState } from "react";
import { weatherContext } from "../../../App";
import { TbWorldSearch } from "react-icons/tb";
import cn from "classnames";

export default function Search() {
  const { darkTheme, setCityName, setCitysNames, citysNames, setQuery } =
    useContext(weatherContext);

  const [searchText, setSearchText] = useState("");

  const handleClickSearch = (e) => {
    setCityName(searchText.trim());
    setSearchText("");
  };

  const handleClickCity = (city) => {
    setCityName(city);
    setSearchText("");
  };

  const handleChange = (e) => {
    const value = e.target.value;
    setSearchText(value);
    setQuery(value.trim());
    if (value.length < 1) {
      setCitysNames([]);
    }
  };

  function checkSearchCitys() {
    return citysNames.length > 0 && searchText ? true : false;
  }

  return (
    <div className={classes.wrapper}>
      <input
        onChange={handleChange}
        value={searchText}
        placeholder="Search for your preffered city..."
        className={cn(classes.input, {
          [classes.input_dark]: darkTheme,
        })}
        type="text"
      />

      <button
        disabled={!searchText ? true : false}
        className={cn(classes.search, {
          [classes.search_dark]: darkTheme,
        })}
      >
        <TbWorldSearch onClick={handleClickSearch} size={40} />
      </button>

      {checkSearchCitys() && (
        <div className={classes.searchData}>
          {citysNames.map((city, index) => (
            <h3
              onClick={(e) => handleClickCity(city)}
              key={index}
              className={classes.searchData__cityName}
            >
              {city}
            </h3>
          ))}
        </div>
      )}
    </div>
  );
}
