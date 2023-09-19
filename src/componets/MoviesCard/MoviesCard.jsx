import { useState } from "react";
import { useLocation } from "react-router-dom";

import "./MoviesCard.css";

function MoviesCard({ id, nameRU, image, trailerLink }) {
  const [liked, setLiked] = useState(false);
  const location = useLocation();

  const handleClick = () => {
    setLiked(!liked);
  };

  function changeButton() {
    if (location.pathname === "/movies") {
      return `card__like ${liked && "card__like_active"}`;
    }
    if (location.pathname === "/saved-movies") {
      return "card__like card__like_delete";
    }
  }

  return (
    <li className="card">
      <div className="card__wrapp">
        <div className="card__info">
          <h2 className="card__title">{nameRU}</h2>
          <p className="card__duration">1ч 47м</p>
        </div>
        <button
          className={changeButton()}
          onClick={handleClick}
          type="button"
          aria-label="Кнопка лайка"
        />
      </div>
      <img className="card__image" src={image} alt="Изображение фильма" />
    </li>
  );
}

export default MoviesCard;
