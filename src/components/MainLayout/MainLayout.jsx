import { Outlet } from "react-router-dom";
import cls from "./MainLayout.module.css";
import { Header } from "../Header";

export const MainLayout = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div className={cls.MainLayout}>
      <Header />
      <div className={cls.MainWrapper}>
        <main className={cls.main}>
          <Outlet />
        </main>
        <footer className={cls.footer}>
          React Question Cards Application | {currentYear}
          <br />
          by Ilya Shutov
        </footer>
      </div>
    </div>
  );
};
