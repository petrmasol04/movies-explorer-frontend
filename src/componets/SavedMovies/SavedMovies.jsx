import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import savedMovies from "../../utils/constants/saved_movies";
import "./SavedMovies.css";

function SavedMovies() {
  return (
    <section className="saved-movies">
      <SearchForm />
      <MoviesCardList movies={savedMovies} hasMoreButton={false} />
    </section>
  );
}

export default SavedMovies;
