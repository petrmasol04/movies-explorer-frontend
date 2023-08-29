import { Link } from "react-router-dom";
import Form from "../Form/Form";
import Logo from "../Logo/Logo";
import "./Register.css"

function Register() {

    return (
        <section className="register">
            <div className="register__container">
                <Logo />
                <h1 className="register__title">Добро пожаловать!</h1>
                <Form btnText="Зарегистрироваться" />
                <p className="register__subtitle">Уже зарегистрированы? <Link className="register__link" to="/signin">Войти</Link></p>
            </div>
        </section>
    )
}

export default Register;