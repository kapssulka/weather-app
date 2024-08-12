import SearchIcon from "../../../component/icons/SearchIcon";
import classes from "./Search.module.scss";

export default function Search() {
  return (
    <div className={classes.wrapper}>
      <input
        placeholder="Search for your preffered city..."
        className={classes.input}
        type="text"
      />

      <SearchIcon className={classes.searchIcon} />
    </div>
  );
}
