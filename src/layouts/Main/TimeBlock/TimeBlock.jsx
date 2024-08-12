import classes from "./TimeBlock.module.scss";

export default function TimeBlock() {
  return (
    <div className={classes.timeWrapper}>
      <div className={classes.city}>Athens</div>
      <div className={classes.time}>09:03</div>
      <div className={classes.date}>Thursday, 31 Aug</div>
    </div>
  );
}
