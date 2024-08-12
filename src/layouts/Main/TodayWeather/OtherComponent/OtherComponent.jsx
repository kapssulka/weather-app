import classes from "./OtherComponent.module.scss";

export default function OtherComponent({ img = "", value = "", children }) {
  return (
    <div className={classes.wrapper}>
      <img src={img} alt="icon" />
      <div className={classes.value}>{value}</div>
      <div className={classes.title}>{children}</div>
    </div>
  );
}
