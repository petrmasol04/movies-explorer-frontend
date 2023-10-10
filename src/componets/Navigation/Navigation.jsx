import { Link } from "react-router-dom";
import { useState } from "react";
import "./Navigation.css";

function Navigation({ loggedIn }) {
  const [isOpenBurgerMenu, setIsOpenBurgerMenu] = useState(false);

  const openMenu = () => {
    setIsOpenBurgerMenu(!isOpenBurgerMenu);
  };

  return (
    <>
      {loggedIn ? (
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
                <Link className="navigation__movies-list_link" to="/">
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
                Аккаунт <div className="navigation__movies-list_icon" />
              </Link>
            </li>
          </ul>
        </nav>
      ) : (
        <nav className="navigation-landing">
          <ul className="navigation-landing__list">
            <li className="navigation-landing__item">
              <Link className="navigation-landing__link blue" to="/signup">
                Регистрация
              </Link>
            </li>
            <li className="navigation-landing__item">
              <Link className="navigation-landing__link active" to="/signin">
                Войти
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </>
  );
}

export default Navigation;
