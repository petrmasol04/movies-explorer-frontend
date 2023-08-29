import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import savedMovies from "../../utils/constants/saved_movies";

function SavedMovies() {
  return (
    <main className="saved-movies">
      <SearchForm />
      <MoviesCardList movies={savedMovies} />
    </main>
  );
}

export default SavedMovies;
