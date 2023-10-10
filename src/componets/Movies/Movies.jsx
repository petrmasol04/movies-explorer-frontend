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
import { useFormValidation } from "../../hooks/useFormValidation";
import Info from "../Info/Info";
import Preloader from "../Preloader/Preloader";

function Movies({
  movies,
  onSavedMovie,
  onDeleteMovie,
  moviesSaved,
  filterFilmsOnCheckbox,
  searchMovies,
  getAllMovies,
  isMoviesLoading,
}) {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [moviesToShow, setMoviesToShow] = useState([]);
  const [isChecked, setIsChecked] = useState(
    localStorage.getItem("moviesCheckbox") === "true" ? true : false
  );

  const { values, checkParams } = useFormValidation({
    search: localStorage.getItem("moviesSearch") || "",
  });

  const filterMovies = useCallback(
    (isChecked, search = "") => {
      if (!movies.length) {
        return;
      }
      const filteredMovies = filterFilmsOnCheckbox(isChecked, movies);
      localStorage.setItem("moviesSearch", search);
      if (search) {
        const movies = searchMovies(filteredMovies, search);
        setFilteredMovies(movies);
        return;
      }
      setFilteredMovies(filteredMovies);
    },
    [filterFilmsOnCheckbox, movies, searchMovies]
  );

  function handleChange() {
    const currentCheckboxState = !isChecked;
    setIsChecked(currentCheckboxState);
    localStorage.setItem("moviesCheckbox", currentCheckboxState);
  }

  function handleSearchSubmit() {
    if (!localStorage.getItem("movies")) {
      getAllMovies();
    }
    // localStorage.setItem("moviesSearch", values.search);
    filterMovies(isChecked, values.search);
  }

  const getInitialMoviesCardsToShow = useCallback(() => {
    if (screenWidth >= WIDTH_DESKTOP) {
      const films = filteredMovies.slice(0, QUANTITY_CARD_DESKTOP);
      setMoviesToShow(films);
      return;
    }
    if (screenWidth >= WIDTH_TAB) {
      const films = filteredMovies.slice(0, QUANTITY_CARD_TAB);
      setMoviesToShow(films);
      return;
    }
    if (screenWidth < WIDTH_TAB) {
      const films = filteredMovies.slice(0, QUANTITY_CARD_MOBILE);
      setMoviesToShow(films);
      return;
    }
  }, [filteredMovies, screenWidth]);

  function addMoviesCards() {
    let moreFilms = [];
    if (screenWidth >= WIDTH_DESKTOP) {
      moreFilms = filteredMovies.slice(
        moviesToShow.length,
        moviesToShow.length + QUANTITY_CARD_DESKTOP_MORE
      );
    } else {
      moreFilms = filteredMovies.slice(
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
    filterMovies(isChecked, values.search);
  }, [isChecked, filterMovies]);

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
      <SearchForm
        onFilterClick={handleChange}
        isChecked={isChecked}
        inputValue={values.search || ""}
        onInputChange={checkParams}
        onSubmit={handleSearchSubmit}
      />
      {isMoviesLoading ? (
        <Preloader />
      ) : moviesToShow.length === 0 && localStorage.getItem("movies") ? (
        <Info />
      ) : (
        <MoviesCardList
          movies={moviesToShow}
          onClick={addMoviesCards}
          onSavedMovie={onSavedMovie}
          onDeleteMovie={onDeleteMovie}
          hasMoreButton={filteredMovies.length > moviesToShow.length}
          moviesSaved={moviesSaved}
        />
      )}
    </main>
  );
}

export default Movies;
