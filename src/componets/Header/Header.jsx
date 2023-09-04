import { useLocation } from "react-router-dom";
import "./Header.css";
import Navigation from "../Navigation/Navigation";
import Logo from "../Logo/Logo";

function Header() {
  const pathesWithHeader = ["/", "/saved-movies", "/movies"];
  const { pathname } = useLocation();
  const hideHeader = pathesWithHeader.includes(pathname);
  const headerClassNames = `header ${
    pathname === "/" ? "header_place_main" : ""
  }`;

  return (
    hideHeader && (
      <header className={headerClassNames}>
        <div className="header__container container">
          <Logo />
          <Navigation />
        </div>
      </header>
    )
  );
}

export default Header;
