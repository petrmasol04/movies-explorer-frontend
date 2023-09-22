import { useLocation } from "react-router-dom";
import { useState } from "react";
import { useFormValidation } from "../../hooks/useFormValidation";
import "./Form.css";

function Form({ initialValues = {}, onSubmit, onClick }) {
  const location = useLocation();
  const { values, isValid, checkParams } = useFormValidation(initialValues);
  const [isInputActive, setIsInputActive] = useState(false);

  function handleSubmit(e) {
    console.log(values);
    e.preventDefault();
    onSubmit(values);
  }

  function handleRedactClick() {
    setIsInputActive(true);
  }

  if (location.pathname === "/profile") {
    return (
      <div className="form__container">
        <form className="form form__profile" onSubmit={handleSubmit} noValidate>
          <label className="form__label-profile">
            Имя
            <input
              className="form__input-profile"
              type="text"
              name="name"
              id="name"
              autoComplete="off"
              required
              minLength="2"
              maxLength="30"
              value={values.name || ""}
              onChange={checkParams}
              disabled={!isInputActive}
            />
          </label>
          <span className="form__line" />
          <label className="form__label-profile">
            E-mail
            <input
              className="form__input-profile"
              type="email"
              name="email"
              id="email"
              autoComplete="off"
              required
              minLength="2"
              maxLength="50"
              value={values.email || "test@test.ru"}
              onChange={checkParams}
              disabled={!isInputActive}
            />
          </label>
          <span className="form__error center"></span>
          {isInputActive ? (
            <button
              className="form__btn form__btn_type_submit"
              type="submit"
              disabled={!isValid}
            >
              Сохранить
            </button>
          ) : (
            <>
              <button
                className="form__btn-profile"
                type="button"
                onClick={handleRedactClick}
              >
                Редактировать
              </button>
              <button
                className="form__btn-exit"
                type="button"
                onClick={onClick}
              >
                Выйти из аккаунта
              </button>
            </>
          )}
        </form>
      </div>
    );
  }
  if (location.pathname === "/signup") {
    return (
      <div className="form__container">
        <form className="form" onSubmit={handleSubmit} noValidate>
          <label className="form__block">
            <span className="form__name">Имя</span>
            <input
              className="form__input"
              type="text"
              name="name"
              id="name"
              autoComplete="off"
              placeholder="Введите имя"
              onChange={checkParams}
              value={values.name || ""}
              required
            />
          </label>
          <span className="form__error"></span>
          <label className="form__block">
            <span className="form__name">E-mail</span>
            <input
              className="form__input"
              type="email"
              name="email"
              id="email"
              autoComplete="off"
              placeholder="Введите email"
              onChange={checkParams}
              value={values.email || ""}
              required
            />
          </label>
          <span className="form__error"></span>
          <label className="form__block">
            <span className="form__name">Пароль</span>
            <input
              className="form__input"
              type="password"
              name="password"
              id="password"
              autoComplete="off"
              placeholder="Введите пароль"
              onChange={checkParams}
              value={values.password || ""}
              required
            />
          </label>
          <span className="form__error">Что-то пошло не так...</span>
          <button className="form__btn" type="submit" disabled={!isValid}>
            Зарегистрироваться
          </button>
        </form>
      </div>
    );
  }
  if (location.pathname === "/signin") {
    return (
      <div className="form__container">
        <form className="form" onSubmit={handleSubmit} noValidate>
          <label className="form__block">
            <span className="form__name">E-mail</span>
            <input
              className="form__input"
              type="email"
              name="email"
              id="email"
              autoComplete="off"
              placeholder="Введите email"
              onChange={checkParams}
              value={values.email || ""}
              required
            />
          </label>
          <span className="form__error"></span>
          <label className="form__block">
            <span className="form__name">Пароль</span>
            <input
              className="form__input"
              type="password"
              name="password"
              id="password"
              autoComplete="off"
              placeholder="Введите пароль"
              value={values.password || ""}
              onChange={checkParams}
              required
            />
          </label>
          <span className="form__error"></span>
          <button
            className="form__btn form__btn_signin"
            type="submit"
            disabled={!isValid}
          >
            Войти
          </button>
        </form>
      </div>
    );
  }
}

export default Form;
