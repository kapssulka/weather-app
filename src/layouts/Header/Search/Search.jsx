import classes from "./Search.module.scss";
import { useContext, useEffect, useState } from "react";
import { weatherContext } from "../../../App";
import { TbWorldSearch } from "react-icons/tb";
import cn from "classnames";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchSearchCitys,
  setCityName,
  setQuery,
} from "../../../store/searchSlice";

export default function Search() {
  const { darkTheme } = useContext(weatherContext);

  const dispatch = useDispatch();

  const citysNames = useSelector((state) => state.search.citysNames);
  const query = useSelector((state) => state.search.query);

  const [searchText, setSearchText] = useState("");

  // nominatim API request
  useEffect(() => {
    dispatch(fetchSearchCitys(query));
  }, [query]);

  const handleClickSearch = (e) => {
    dispatch(setCityName(searchText.trim()));
    setSearchText("");
  };

  const handleClickCity = (city) => {
    dispatch(setCityName(city));
    setSearchText("");
  };

  const handleChange = (e) => {
    const value = e.target.value;

    setSearchText(value);

    dispatch(setQuery(value.trim()));
  };

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
        disabled={!searchText}
        className={cn(classes.search, {
          [classes.search_dark]: darkTheme,
        })}
      >
        <TbWorldSearch onClick={handleClickSearch} size={40} />
      </button>

      {citysNames.length > 0 && searchText && (
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
