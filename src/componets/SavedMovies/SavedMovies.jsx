import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import "./SavedMovies.css";

function SavedMovies({ moviesSaved }) {
  return (
    <section className="saved-movies">
      <SearchForm />
      <MoviesCardList movies={moviesSaved} />
    </section>
  );
}

export default SavedMovies;
