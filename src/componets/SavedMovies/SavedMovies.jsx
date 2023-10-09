import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import "./SavedMovies.css";
import { useCallback, useEffect, useState } from "react";
import { useFormValidation } from "../../hooks/useFormValidation";
import Info from "../Info/Info";

function SavedMovies({
  moviesSaved,
  onDeleteMovie,
  filterFilmsOnCheckbox,
  searchMovies,
}) {
  const [isChecked, setIsChecked] = useState(false);
  const [filteredMoviesSaved, setFilteredMoviesSaved] = useState([]);

  const { values, checkParams } = useFormValidation({ search: "" });

  const filterSavedMovies = useCallback(
    (isChecked, search = "") => {
      const filteredMoviesSaved = filterFilmsOnCheckbox(isChecked, moviesSaved);
      if (search) {
        const movies = searchMovies(filteredMoviesSaved, search);
        setFilteredMoviesSaved(movies);
        return;
      }
      setFilteredMoviesSaved(filteredMoviesSaved);
    },
    [moviesSaved, filterFilmsOnCheckbox, searchMovies]
  );

  function handleChange() {
    setIsChecked(!isChecked);
  }

  function handleSearchSubmit() {
    filterSavedMovies(isChecked, values.search);
  }

  useEffect(() => {
    filterSavedMovies(isChecked, values.search);
  }, [isChecked, filterSavedMovies]);

  return (
    <section className="saved-movies">
      <SearchForm
        onFilterClick={handleChange}
        isChecked={isChecked}
        inputValue={values.search || ""}
        onInputChange={checkParams}
        onSubmit={handleSearchSubmit}
      />
      {filteredMoviesSaved.length > 0 ? (
        <MoviesCardList
          movies={filteredMoviesSaved}
          onDeleteMovie={onDeleteMovie}
        />
      ) : (
        <Info />
      )}
    </section>
  );
}

export default SavedMovies;
