import { Outlet } from "@tanstack/react-router";

import { Navigation } from "@/components/navigation/navigation";

import style from "./layout.module.css";

export function Layout() {
  return (
    <div className={style.page}>
      <nav className={style.navigation}>
        <Navigation />
      </nav>
      <main className={style.content}>
        <Outlet />
      </main>
    </div>
  );
}
