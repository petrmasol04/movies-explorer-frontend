import { useLocation } from "react-router-dom";
import MoviesCard from "../MoviesCard/MoviesCard";

import "./MoviesCardList.css";

function MoviesCardList({ movies, hasMoreButton = true }) {
  const { pathname } = useLocation();
  return (
    <div className="movies__container container">
      <ul className="movies__list">
        {movies.map(({ id, nameRU, image, trailerLink }) => {
          if (pathname === "/movies") {
            image = "https://api.nomoreparties.co" + image.url;
          }
          return (
            <MoviesCard
              id={id}
              nameRU={nameRU}
              image={image}
              trailerLink={trailerLink}
              key={id}
            />
          );
        })}
      </ul>
      {hasMoreButton && (
        <button className="movies__button" type="button">
          Ещё
        </button>
      )}
    </div>
  );
}

export default MoviesCardList;
