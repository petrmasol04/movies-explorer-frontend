import "./AboutProject.css"

function AboutProject() {
    return (
        <section className="project" id="project">
            <div className="project__container container">
                <h2 className="project__title ">О проекте</h2>
                <ul className="project__list">
                    <li className="project__item">
                        <h3 className="project__subtitle">
                            Дипломный проект включал 5 этапов
                        </h3>
                        <p className="project__text">
                            Составление плана, работу над бэкендом, вёрстку, добавление
                            функциональности и финальные доработки.
                        </p>
                    </li>
                    <li className="project__item">
                        <h3 className="project__subtitle">
                            На выполнение диплома ушло 5 недель
                        </h3>
                        <p className="project__text">
                            У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было
                            соблюдать, чтобы успешно защититься.
                        </p>
                    </li>
                </ul>
                <div className="project__process">
                    <p className="project__process_period project__process_period_active">
                        1 неделя
                    </p>
                    <span className="project__process_name">Back-end</span>
                    <p className="project__process_period project__process_period_unactive">
                        4 недели
                    </p>
                    <span className="project__process_name">Front-end</span>
                </div>
            </div>
        </section>
    );
}

export default AboutProject;