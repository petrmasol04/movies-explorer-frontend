import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import {
  WIDTH_DESKTOP,
  WIDTH_TAB,
  QUANTITY_CARD_DESKTOP,
  QUANTITY_CARD_TAB,
  QUANTITY_CARD_MOBILE,
  QUANTITY_CARD_DESKTOP_MORE,
  QUANTITY_CARD_TAB_MORE,
} from "../../utils/constants/index";
import { useCallback, useEffect, useState } from "react";

function Movies({ movies, onSavedMovie, onDeleteMovie, moviesSaved }) {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [moviesToShow, setMoviesToShow] = useState([]);

  const getInitialMoviesCardsToShow = useCallback(() => {
    if (screenWidth >= WIDTH_DESKTOP) {
      const films = movies.slice(0, QUANTITY_CARD_DESKTOP);
      setMoviesToShow(films);
      return;
    }
    if (screenWidth >= WIDTH_TAB) {
      const films = movies.slice(0, QUANTITY_CARD_TAB);
      setMoviesToShow(films);
      return;
    }
    if (screenWidth < WIDTH_TAB) {
      const films = movies.slice(0, QUANTITY_CARD_MOBILE);
      setMoviesToShow(films);
      return;
    }
  }, [movies, screenWidth]);

  function addMoviesCards() {
    let moreFilms = [];
    if (screenWidth >= WIDTH_DESKTOP) {
      moreFilms = movies.slice(
        moviesToShow.length,
        moviesToShow.length + QUANTITY_CARD_DESKTOP_MORE
      );
    } else {
      moreFilms = movies.slice(
        moviesToShow.length,
        moviesToShow.length + QUANTITY_CARD_TAB_MORE
      );
    }
    setMoviesToShow((films) => films.concat(moreFilms));
  }

  function handleWindowResize() {
    const width = window.innerWidth;
    setScreenWidth(width);
  }

  useEffect(() => {
    window.addEventListener("resize", handleWindowResize);
    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  useEffect(() => {
    getInitialMoviesCardsToShow();
  }, [getInitialMoviesCardsToShow]);

  return (
    <main className="movies container">
      <SearchForm />
      <MoviesCardList
        movies={moviesToShow}
        onClick={addMoviesCards}
        onSavedMovie={onSavedMovie}
        onDeleteMovie={onDeleteMovie}
        hasMoreButton={movies.length > moviesToShow.length}
        moviesSaved={moviesSaved}
      />
    </main>
  );
}

export default Movies;
