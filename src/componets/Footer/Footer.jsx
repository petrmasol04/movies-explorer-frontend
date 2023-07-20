import "./Footer.css";

function Footer() {


    return (

        <footer className="footer">
            <div className="footer__container container">
                <h2 className="footer__title">Учебный проект Яндекс.Практикум х BeatFilm.</h2>
                <p className="footer__copyright">© 2023</p>
                <nav className="footer__nav-list">
                    <a className="footer__nav-link" target="_blank">Яндекс.Практикум</a>
                    <a className="footer__nav-link" target="_blank">Github</a>
                </nav>
            </div>
        </footer>
    )
}

export default Footer;