import { Link } from "react-router-dom";
import "./Logo.css";
import logo from "../../images/logo.svg";

function Logo() {
  return (
    <Link className="logo__wrapp" to="/">
      <img className="logo" src={logo} alt="Логотип проекта Movies-explorer" />
    </Link>
  );
}

export default Logo;
