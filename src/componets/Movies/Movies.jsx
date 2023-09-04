import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import movies from "../../utils/constants/movies";

function Movies() {
  return (
    <main className="movies container">
      <SearchForm />
      <MoviesCardList movies={movies} />
    </main>
  );
}

export default Movies;
