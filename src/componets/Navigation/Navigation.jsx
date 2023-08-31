import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import Account from "../../images/icon_account.svg";
import "./Navigation.css";

function Navigation() {
  const location = useLocation();

  const [isOpenBurgerMenu, setIsOpenBurgerMenu] = useState(false);

  const openMenu = () => {
    setIsOpenBurgerMenu(!isOpenBurgerMenu);
  };

  return (
    <>
      {location.pathname === "/" && (
        <nav className="navigation__landing">
          <ul className="navigation__landing-list">
            <li className="navigation__landing-item">
              <Link className="navigation__landing-link blue" to="/signup">
                Регистрация
              </Link>
            </li>
            <li className="navigation__landing-item">
              <Link className="navigation__landingt-link active" to="/signin">
                Войти
              </Link>
            </li>
          </ul>
        </nav>
      )}
      {location.pathname !== "/" && (
        <nav
          className={`navigation ${
            isOpenBurgerMenu ? "navigation__burger" : ""
          }`}
        >
          <div
            className={`burger ${isOpenBurgerMenu ? "close" : ""}`}
            onClick={openMenu}
          >
            <span className="burger__span"></span>
            <span className="burger__span"></span>
            <span className="burger__span"></span>
          </div>
          <ul
            className={`navigation__movies-list navigation__movies-list_burger ${
              isOpenBurgerMenu ? "open" : ""
            }`}
          >
            <div className="navigation__movies-list_wrapp">
              <li className="navigation__movies-list_item navigation__movies-list_item_hiden">
                <Link className="navigation__movies-list_link" exact to="/">
                  Главная
                </Link>
              </li>
              <li className="navigation__movies-list_item">
                <Link className="navigation__movies-list_link" to="/movies">
                  Фильмы
                </Link>
              </li>
              <li className="navigation__movies-list_item">
                <Link
                  className="navigation__movies-list_link"
                  to="/saved-movies"
                >
                  Сохраненные фильмы
                </Link>
              </li>
            </div>
            <li className="navigation__movies-list_item account">
              <Link className="navigation__movies-list_link" to="/profile">
                Аккаунт{" "}
                <div className="navigation__movies-list_icon" scr={Account} />
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </>
  );
}

export default Navigation;
