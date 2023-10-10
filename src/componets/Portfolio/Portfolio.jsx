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
              <Link
                className="portfolio__link"
                to="//github.com/petrmasol04/russian-travel"
                target="_blank"
              >
                Статичный сайт <span>↗</span>
              </Link>
            </li>
            <li className="portfolio__list-item">
              <Link
                className="portfolio__link"
                to="//github.com/petrmasol04/how-to-learn"
                target="_blank"
              >
                Адаптивный сайт <span>↗</span>
              </Link>
            </li>
            <li className="portfolio__list-item">
              <Link
                className="portfolio__link"
                to="//github.com/petrmasol04/react-mesto-api-full-gha"
                target="_blank"
              >
                Одностраничное приложение <span>↗</span>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </section>
  );
}

export default Portfolio;
