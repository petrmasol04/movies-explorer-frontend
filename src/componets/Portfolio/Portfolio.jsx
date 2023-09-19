import { Link } from "react-router-dom";
import "./Portfolio.css";

function Portfolio() {
  return (
    <section className="portfolio">
      <div className="portfolio__container container">
        <h2 className="portfolio__title">Портфолио</h2>
        <nav>
          <ul className="portfolio__list">
            <li className="portfolio__list-item">
              <a
                className="portfolio__link"
                href="https://github.com/petrmasol04/russian-travel "
                target="_blank"
                rel="noreferrer"
              >
                Статичный сайт <span>↗</span>
              </a>
            </li>
            <li className="portfolio__list-item">
              <a
                className="portfolio__link"
                href="https://github.com/petrmasol04/how-to-learn" /* При переходе у меня все открывается... */
                target="_blank"
                rel="noreferrer"
              >
                Адаптивный сайт <span>↗</span>
              </a>
            </li>
            <li className="portfolio__list-item">
              <a
                className="portfolio__link"
                href="https://github.com/petrmasol04/react-mesto-api-full-gha"
                target="_blank"
                rel="noreferrer"
              >
                Одностраничное приложение <span>↗</span>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </section>
  );
}

export default Portfolio;
