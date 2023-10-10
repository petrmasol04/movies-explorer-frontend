import { Link, useNavigate } from "react-router-dom";
import Form from "../Form/Form";
import Logo from "../Logo/Logo";
import "./Login.css";
import { useEffect } from "react";

function Login({ loggedIn, onSignin, infoText, setInfoText }) {
  const navigate = useNavigate();

  useEffect(() => {
    if (loggedIn) {
      navigate("/", { replace: true });
    }
  }, [loggedIn, navigate]);
  return (
    <section className="login">
      <div className="login__container">
        <Logo />
        <h1 className="login__title">Рады видеть!</h1>
        <Form
          btnText="Войти"
          onSubmit={onSignin}
          infoText={infoText}
          setInfoText={setInfoText}
        />
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
