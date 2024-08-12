import LocationIcon from "../../../component/icons/LocationIcon";
import classes from "./CurrentLocation.module.scss";

export default function CurrentLocation() {
  return (
    <button className={classes.btn}>
      <LocationIcon /> <span>Current Location</span>
    </button>
  );
}
