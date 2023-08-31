import { HashLink } from "react-router-hash-link";
import "./Promo.css";
import imagepromo from "../../images/image_promo.svg";

function Promo() {
  return (
    <section className="promo">
      <div className="promo__container container">
        <div className="promo__info">
          <h1 className="promo__info-title">
            Учебный проект студента факультета{" "}
            <span className="promo__info-nospace">Веб-разработки.</span>
          </h1>
          <p className="promo__info-subtitle">
            Листайте ниже, чтобы узнать больше про этот проект и его создателя.
          </p>
          <HashLink className="promo__info-link" smooth to="/#project">
            Узнать больше
          </HashLink>
        </div>
        <img className="promo__img" src={imagepromo} alt="Промо изображение" />
      </div>
    </section>
  );
}

export default Promo;
