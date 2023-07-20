import myPhoto from "./../../images/me.jpg"
import "./AboutMe.css";


function AboutMe() {
    return (
        <section className="about" id="about">
            <div className="about__container container">
                <h2 className="about__title">Студент</h2>
                <div className="about__wrapp">
                    <div className="about__wrapp-text">
                        <h3 className="about__subtitle">Пётр</h3>
                        <p className="about__text">Фронтенд - разработчик, 28 лет</p>
                        <p className="about__text_me">Я&nbsp;живу в&nbsp;Санкт-Петербурге. Закончил факультет строительства автомобильных дорог в&nbsp;СПбГАСУ . Люблю активный отдых, такие как горнолыжный спорт, эндуринг, вэйк и сап сёрф. Кодить начал меньше года назад. Начал с простой вёрстки и тут понеслось.</p>
                        <a className="about__link" target="_blank">Github</a>
                    </div>
                    <img className="about__photo" src={myPhoto} alt="Фото студента" />
                </div>
            </div>
        </section>
    )
}

export default AboutMe;