import classes from "./CurrentLocation.module.scss";

import LocationIcon from "../../../component/icons/LocationIcon";

export default function CurrentLocation() {
  return (
    <button className={classes.btn}>
      <LocationIcon /> <span>Current Location</span>
    </button>
  );
}
