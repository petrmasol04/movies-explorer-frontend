import { Link } from "react-router-dom";
import "./Logo.css";
import logo from "../../images/logo.svg";

function Logo() {
  return (
    <Link className="logo" to="/">
      <img
        className="logo__img"
        src={logo}
        alt="Логотип проекта Movies-explorer"
      />
    </Link>
  );
}

export default Logo;
