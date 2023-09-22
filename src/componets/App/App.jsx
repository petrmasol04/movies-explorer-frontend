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
import { useEffect, useState } from "react";
import ProtectedRouteElement from "../ProtectedRouteElement/ProtectedRouteElement";
import { CurrentUserContext } from "../../context/CurrentUserContext";
import { api } from "../../utils/MainApi";
import Preloader from "../Preloader/Preloader";

function App() {
  const [movies, setMovies] = useState([]);
  const [loggedIn, setLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState({
    name: "Vasiya",
    email: "t@t",
  });
  const [isloading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  function getAllMovies() {
    moviesApi
      .getFilms()
      .then((movies) => {
        setMovies(movies);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  useEffect(() => {
    getAllMovies();
  }, []);

  function handleRegister({ name, email, password }) {
    setIsLoading(true);
    api
      .registerUser(name, email, password)
      .then(() => {
        handleLogin({ email, password });
      })
      .catch((err) => {
        console.log(err);
      });
    // .finally(() => {
    //   setIsLoading(false);
    // });
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
        console.log(err);
        // setIsLoading(false);
      });
    // .finally(() => {
    //   setIsLoading(false);
    // });
  }

  function handleLogOut() {
    api
      .logOut()
      .then(() => {
        setLoggedIn(false);
        localStorage.clear();
        navigate("/", { replace: true });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function checkToken() {
    api
      .getUser()
      .then((user) => {
        setCurrentUser(user);
        setLoggedIn(true);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }

  useEffect(() => {
    if (localStorage.getItem("isLogin")) {
      checkToken();
    } else {
      setIsLoading(false);
    }
  }, []);

  if (isloading) return <Preloader />;

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <Header loggedIn={loggedIn} />
      <main className="main">
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/signin" element={<Login onSignin={handleLogin} />} />
          <Route
            path="/signup"
            element={<Register onSignup={handleRegister} />}
          />
          <Route
            path="/saved-movies"
            element={
              <ProtectedRouteElement
                element={SavedMovies}
                loggedIn={loggedIn}
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
