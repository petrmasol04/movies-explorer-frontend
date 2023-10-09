import { Route, Routes, useNavigate } from "react-router-dom";
import Header from "../Header/Header";
import Landing from "../Landing/Landing";
import Login from "../Login/Login";
import Register from "../Register/Register";
import SavedMovies from "../SavedMovies/SavedMovies";
import Movies from "../Movies/Movies";
import Profile from "../Profile/Profile";
import NotFound from "../NotFound/NotFound";
import Footer from "../Footer/Footer";
import { moviesApi } from "../../utils/MoviesApi";
import { useCallback, useEffect, useState } from "react";
import ProtectedRouteElement from "../ProtectedRouteElement/ProtectedRouteElement";
import { CurrentUserContext } from "../../context/CurrentUserContext";
import { api } from "../../utils/MainApi";
import Preloader from "../Preloader/Preloader";
import { SHORT_FILM_DURATION } from "../../utils/constants";

function App() {
  const [movies, setMovies] = useState([]);
  const [moviesSaved, setMoviesSaved] = useState([]);
  const [loggedIn, setLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState({
    name: "Vasiya",
    email: "t@t",
  });
  const [isloading, setIsLoading] = useState(true);
  const [infoText, setInfoText] = useState("");
  const [isError, setIsError] = useState(true);
  const [isMoviesLoading, setIsMoviesLoading] = useState(false);
  const navigate = useNavigate();

  function searchMovies(movies, keySearch) {
    const search = keySearch.toLowerCase();
    return movies.filter(
      (film) =>
        film.nameRU.toLowerCase().includes(search) ||
        film.nameEN.toLowerCase().includes(search)
    );
  }

  function filterFilmsOnCheckbox(isChecked, movies) {
    if (isChecked) {
      return movies.filter((film) => film.duration <= SHORT_FILM_DURATION);
    } else {
      return movies;
    }
  }

  function getAllMovies() {
    setIsMoviesLoading(true);
    moviesApi
      .getFilms()
      .then((movies) => {
        localStorage.setItem("movies", JSON.stringify(movies));
        setMovies(movies);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setIsMoviesLoading(false);
      });
  }

  const getSavedMovies = useCallback(() => {
    setIsMoviesLoading(true);
    api
      .getMovies()
      .then((movies) => {
        setMoviesSaved(movies);
      })
      .catch((err) => {
        handleError(err);
      })
      .finally(() => {
        setIsMoviesLoading(false);
      });
  }, []);

  function saveMovie(movie) {
    api
      .createMovie(movie)
      .then((savedMovie) => {
        setMoviesSaved((savedMovies) => [...savedMovies, savedMovie]);
      })
      .catch((err) => {
        handleError(err);
      });
  }

  function deleteMovie(movieId) {
    const movie = moviesSaved.find((film) => film.movieId === movieId);
    api
      .deleteMovie(movie._id)
      .then(() => {
        setMoviesSaved((movies) =>
          movies.filter((film) => film.movieId !== movieId)
        );
      })
      .catch((err) => {
        handleError(err);
      });
  }

  function handleRegister({ name, email, password }) {
    setIsLoading(true);
    api
      .registerUser(name, email, password)
      .then(() => {
        handleLogin({ email, password });
      })
      .catch((err) => {
        handleError(err);
        setIsLoading(false);
      });
  }

  function handleLogin({ email, password }) {
    setIsLoading(true);
    api
      .loginUser(email, password)
      .then(() => {
        localStorage.setItem("isLogin", "true");
        checkToken();
        navigate("/movies", { replace: true });
      })
      .catch((err) => {
        handleError(err);
        setIsLoading(false);
      });
  }

  function handleLogOut() {
    api
      .logOut()
      .then(() => {
        setLoggedIn(false);
        setMovies([]);
        localStorage.clear();
        navigate("/", { replace: true });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  const checkToken = useCallback(() => {
    api
      .getUser()
      .then((user) => {
        setCurrentUser(user);
        setLoggedIn(true);
      })
      .catch((err) => {
        localStorage.clear();
        handleError(err);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  function handleUpdateUser({ name, email }) {
    api
      .updateUser(name, email)
      .then((user) => {
        setCurrentUser(user);
        setInfoText("Успешно обновлено");
        setIsError(false);
      })
      .catch((err) => {
        handleError(err);
      });
  }

  function handleError(err) {
    setInfoText(err);
    setIsError(true);
  }

  useEffect(() => {
    if (loggedIn) {
      getSavedMovies();
    }
  }, [getSavedMovies, loggedIn]);

  useEffect(() => {
    const moviesBeatFilm = localStorage.getItem("movies");
    if (moviesBeatFilm) {
      const films = JSON.parse(moviesBeatFilm);
      setMovies(films);
    }
  }, []);

  useEffect(() => {
    if (localStorage.getItem("isLogin")) {
      checkToken();
    } else {
      setIsLoading(false);
    }
  }, [checkToken]);

  if (isloading) return <Preloader />;

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <Header loggedIn={loggedIn} />
      <main className="main">
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route
            path="/signin"
            element={
              <Login
                onSignin={handleLogin}
                infoText={infoText}
                setInfoText={setInfoText}
              />
            }
          />
          <Route
            path="/signup"
            element={
              <Register
                onSignup={handleRegister}
                infoText={infoText}
                setInfoText={setInfoText}
              />
            }
          />
          <Route
            path="/saved-movies"
            element={
              <ProtectedRouteElement
                element={SavedMovies}
                loggedIn={loggedIn}
                moviesSaved={moviesSaved}
                onDeleteMovie={deleteMovie}
                filterFilmsOnCheckbox={filterFilmsOnCheckbox}
                searchMovies={searchMovies}
              />
            }
          />
          <Route
            path="/movies"
            element={
              <ProtectedRouteElement
                element={Movies}
                loggedIn={loggedIn}
                movies={movies}
                onSavedMovie={saveMovie}
                onDeleteMovie={deleteMovie}
                moviesSaved={moviesSaved}
                filterFilmsOnCheckbox={filterFilmsOnCheckbox}
                searchMovies={searchMovies}
                getAllMovies={getAllMovies}
                isMoviesLoading={isMoviesLoading}
              />
            }
          />
          <Route
            path="/profile"
            element={
              <ProtectedRouteElement
                element={Profile}
                loggedIn={loggedIn}
                onLogOut={handleLogOut}
                onUserUpdate={handleUpdateUser}
                infoText={infoText}
                setInfoText={setInfoText}
                isError={isError}
              />
            }
          />
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </CurrentUserContext.Provider>
  );
}

export default App;
