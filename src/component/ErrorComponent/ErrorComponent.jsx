import classes from "./ErrorComponent.module.scss";

export default function ErrorComponent({ children }) {
  return (
    <main className={classes.error}>
      <h1 className={classes.title}>{children}</h1>
    </main>
  );
}
