import { useLocation } from "react-router-dom";
import MoviesCard from "../MoviesCard/MoviesCard";

import "./MoviesCardList.css";

function MoviesCardList({
  movies,
  hasMoreButton = false,
  onClick,
  onSavedMovie,
  onDeleteMovie,
  moviesSaved,
}) {
  const { pathname } = useLocation();

  return (
    <div className="movies__container container">
      <ul className="movies__list">
        {movies.map(
          ({ id, _id, nameRU, image, trailerLink, movieId, ...restData }) => {
            let isLiked;
            if (pathname === "/movies") {
              image = "https://api.nomoreparties.co" + image.url;
              isLiked = moviesSaved.some((film) => film.movieId === id);
            } else {
              isLiked = true;
            }

            return (
              <MoviesCard
                nameRU={nameRU}
                image={image}
                trailerLink={trailerLink}
                key={id ?? _id}
                onSavedMovie={onSavedMovie}
                onDeleteMovie={onDeleteMovie}
                restData={restData}
                id={id ?? movieId}
                isLiked={isLiked}
                pathname={pathname}
              />
            );
          }
        )}
      </ul>
      {hasMoreButton && (
        <button className="movies__button" type="button" onClick={onClick}>
          Ещё
        </button>
      )}
    </div>
  );
}

export default MoviesCardList;
