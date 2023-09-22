import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";

function Movies({ movies }) {
  return (
    <main className="movies container">
      <SearchForm />
      <MoviesCardList movies={movies} />
    </main>
  );
}

export default Movies;
