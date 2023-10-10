import { useLocation } from "react-router-dom";
import "./Header.css";
import Navigation from "../Navigation/Navigation";
import Logo from "../Logo/Logo";

function Header({ loggedIn }) {
  const pathesWithHeader = ["/", "/saved-movies", "/movies", "/profile"];
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
          <Navigation loggedIn={loggedIn} />
        </div>
      </header>
    )
  );
}

export default Header;
