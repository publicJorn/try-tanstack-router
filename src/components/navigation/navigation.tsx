import { Link } from "@tanstack/react-router";
import style from "./navigation.module.css";

export function Navigation() {
  return (
    <nav className={style.navigation}>
      <Link to="/" className={style.item}>
        Home
      </Link>
      <Link to="/about" className={style.item}>
        About
      </Link>
      <Link to="/people" className={style.item}>
        People
      </Link>
    </nav>
  );
}
