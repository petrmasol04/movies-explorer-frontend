import { Link, useLocation } from "react-router-dom";
import "./Footer.css";

function Footer() {
  const pathesWithFooter = ["/", "/saved-movies", "/movies"];
  const { pathname } = useLocation();
  const hideFooter = pathesWithFooter.includes(pathname);

  return (
    hideFooter && (
      <footer className="footer">
        <div className="footer__container container">
          <h2 className="footer__title">
            Учебный проект Яндекс.Практикум х BeatFilm.
          </h2>
          <p className="footer__copyright">© 2023</p>
          <nav className="footer__nav-list">
            <a
              className="footer__nav-link"
              href="https://practicum.yandex.ru/"
              target="_blank"
            >
              Яндекс.Практикум
            </a>
            <a
              className="footer__nav-link"
              href="https://github.com/petrmasol04/"
              target="_blank"
              rel="noreferrer"
            >
              Github
            </a>
          </nav>
        </div>
      </footer>
    )
  );
}

export default Footer;
