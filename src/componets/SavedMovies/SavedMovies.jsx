import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import "./SavedMovies.css";

function SavedMovies({ moviesSaved, onDeleteMovie }) {
  return (
    <section className="saved-movies">
      <SearchForm />
      <MoviesCardList movies={moviesSaved} onDeleteMovie={onDeleteMovie} />
    </section>
  );
}

export default SavedMovies;
