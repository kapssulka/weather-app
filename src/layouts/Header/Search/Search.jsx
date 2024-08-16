import { useContext, useState } from "react";
import classes from "./Search.module.scss";
import { weatherContext } from "../../../App";
import { TbWorldSearch } from "react-icons/tb";

export default function Search() {
  const { setCityName, setCitysNames, citysNames, setQuery } =
    useContext(weatherContext);

  const [searchText, setSearchText] = useState("");

  const handleClickSearch = (e) => {
    setCityName("");
    setSearchText("");
  };

  const handleClickCity = (city) => {
    setCityName(city);
    setSearchText("");
  };

  const checkSearchCitys = () => {
    return citysNames && searchText ? true : false;
  };

  const handleChange = (e) => {
    const value = e.target.value;
    setSearchText(value);
    setQuery(value.trim());
    if (value.length < 1) {
      setCitysNames([]);
    }
  };

  return (
    <div className={classes.wrapper}>
      <input
        onChange={handleChange}
        value={searchText}
        placeholder="Search for your preffered city..."
        className={classes.input}
        type="text"
      />

      <button disabled={!searchText ? true : false} className={classes.search}>
        <TbWorldSearch
          onClick={handleClickSearch}
          className={classes.searchIcon}
          size={40}
        />
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
