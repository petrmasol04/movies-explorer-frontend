import { handleDurationFromMins } from "../../utils/handleDurationFromMins";
import "./MoviesCard.css";

function MoviesCard({
  id,
  nameRU,
  image,
  trailerLink,
  onSavedMovie,
  onDeleteMovie,
  restData,
  isLiked,
  pathname,
}) {
  const handleClick = () => {
    if (!isLiked) {
      const { country, director, duration, year, description, nameEN } =
        restData;
      onSavedMovie({
        country,
        director,
        duration,
        year,
        description,
        image,
        trailerLink,
        thumbnail: image,
        movieId: id,
        nameRU,
        nameEN,
      });
    } else {
      onDeleteMovie(id);
    }
    isLiked = !isLiked;
  };

  function changeButton() {
    if (pathname === "/movies") {
      return `card__like ${isLiked && "card__like_active"}`;
    }
    if (pathname === "/saved-movies") {
      return "card__like card__like_delete";
    }
  }

  return (
    <li className="card">
      <div className="card__wrapp">
        <div className="card__info">
          <h2 className="card__title">{nameRU}</h2>
          <p className="card__duration">
            {handleDurationFromMins(restData.duration)}
          </p>
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
