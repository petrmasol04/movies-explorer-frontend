// import { useState } from "react";
import { Link } from "react-router-dom";
import Form from "../Form/Form";
import Logo from "../Logo/Logo";
import "./Login.css";

function Login({ onSignin }) {
  return (
    <section className="login">
      <div className="login__container">
        <Logo />
        <h1 className="login__title">Рады видеть!</h1>
        <Form btnText="Войти" onSubmit={onSignin} />
        <p className="login__subtitle">
          Еще не зарегистрированы?{" "}
          <Link className="login__link" to="/signup">
            Регистрация
          </Link>
        </p>
      </div>
    </section>
  );
}

export default Login;
