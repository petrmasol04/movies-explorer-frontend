import { Route, Routes } from 'react-router-dom';
import Header from "../Header/Header";
import Landing from '../Landing/Landing';
import Login from '../Login/Login';
import Register from '../Register/Register';
import SavedMovies from '../SavedMovies/SavedMovies';
import Movies from '../Movies/Movies';
import Profile from '../Profile/Profile';
import NotFound from '../NotFound/NotFound';
import Footer from '../Footer/Footer';

function App() {
  return (
    <div>
      <Header />
      <Routes>

        <Route path="/" element={<Landing />} />
        <Route path="/signin" element={<Login />} />
        <Route path="/signup" element={<Register />} />
        <Route path="/saved-movies" element={<SavedMovies />} />
        <Route path="/movies" element={< Movies />} />
        <Route path="/profile" element={< Profile />} />
        <Route path="*" element={< NotFound />} />

      </Routes>
      <Footer />
    </div>
  );
}

export default App;
