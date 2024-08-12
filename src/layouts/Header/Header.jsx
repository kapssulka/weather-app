import Theme from "./Theme/Theme";
import classes from "./Header.module.scss";
import Search from "./Search/Search";
import CurrentLocation from "./CurrentLocation/CurrentLocation";

export default function Header() {
  return (
    <header className={classes.header}>
      <Theme />
      <Search />
      <CurrentLocation />
    </header>
  );
}
