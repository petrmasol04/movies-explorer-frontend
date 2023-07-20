import "./Portfolio.css";

function Portfolio() {
    return (
        <section className="portfolio">
            <div className="portfolio__container container">
                <h2 className="portfolio__title">Портфолио</h2>
                <nav>
                    <ul className="portfolio__list">
                        <li className="portfolio__list-item">
                            <a className="portfolio__link" target="_blank">Статичный сайт <span>↗</span></a>
                        </li>
                        <li className="portfolio__list-item">
                            <a className="portfolio__link" target="_blank">Адаптивный сайт <span>↗</span></a>
                        </li>
                        <li className="portfolio__list-item">
                            <a className="portfolio__link" target="_blank">Одностраничное приложение <span>↗</span></a>
                        </li>
                    </ul>
                </nav>
            </div>
        </section>
    )
}

export default Portfolio;