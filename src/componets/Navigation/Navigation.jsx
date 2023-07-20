/* eslint-disable jsx-a11y/anchor-is-valid */
import "./Navigation.css"

function Navigation() {
    return (
        <nav className="navigation__landing">
            <ul className="navigation__landing-list">
                <li className="navigation__landing-item">
                    <a className="navigation__landing-link white" href="#" >Регистрация</a>
                </li>
                <li className="navigation__landing-item">
                    <a className="navigation__landingt-link active" href="#" >Войти</a>
                </li>
            </ul>
        </nav>
    );
}

export default Navigation;