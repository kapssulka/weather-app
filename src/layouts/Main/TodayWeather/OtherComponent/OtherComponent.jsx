import classes from "./OtherComponent.module.scss";
import cn from "classnames";

export default function OtherComponent({
  className,
  svg,
  value = "",
  children,
}) {
  return (
    <div className={cn(classes.wrapper, className)}>
      {svg}
      <div className={classes.value}>{value}</div>
      <div className={classes.title}>{children}</div>
    </div>
  );
}
