import { useLocation } from "react-router-dom";
import "./Header.css";
import Navigation from '../Navigation/Navigation';
import Logo from "../Logo/Logo";

function Header() {

    const pathesWithHeader = ["/", "/saved-movies", "/movies", "/profile"]
    const { pathname } = useLocation();
    const hasHeader = pathesWithHeader.includes(pathname);
    const headerDark = pathname === '/' ? { backgroundColor: '#073042' } : { backgroundColor: '#202020' }

    return (
        hasHeader &&
        <header className={hasHeader ? "header" : "header__dark"} style={headerDark}>
            <div className="header__container container">
                <Logo />
                <Navigation />
            </div>
        </header >
    );
}

export default Header;