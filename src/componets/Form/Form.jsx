import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { useFormValidation } from "../../hooks/useFormValidation";
import "./Form.css";

function Form({
  initialValues = {},
  onSubmit,
  onClick,
  infoText = "",
  setInfoText,
  isError,
}) {
  const location = useLocation();
  const { values, isValid, checkParams, errors } =
    useFormValidation(initialValues);
  const [isInputActive, setIsInputActive] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    onSubmit(values);
    setIsInputActive(false);
  }

  function handleRedactClick() {
    setIsInputActive(true);
    if (infoText) {
      setInfoText("");
    }
  }

  function handleInputChange(evt) {
    checkParams(evt);
    if (infoText) {
      setInfoText("");
    }
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
              onChange={handleInputChange}
              disabled={!isInputActive}
            />
          </label>
          <span className="form__error center">{errors.name}</span>
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
              value={values.email || ""}
              onChange={handleInputChange}
              disabled={!isInputActive}
              pattern="^[\w]+@[a-zA-Z]+\.[a-zA-Z]{1,3}$"
            />
          </label>
          <span className="form__error center">{errors.email}</span>
          <span
            className={`form__notification form__notification_type_profile ${
              !isError ? "form__notification_type_success" : ""
            }`}
          >
            {infoText}
          </span>
          {isInputActive ? (
            <button
              className="form__btn form__btn_type_submit"
              type="submit"
              disabled={
                !isValid ||
                (values.name === initialValues.name &&
                  values.email === initialValues.email)
              }
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
        <form
          className="form form_type_auth"
          onSubmit={handleSubmit}
          noValidate
        >
          <label className="form__block">
            <span className="form__name">Имя</span>
            <input
              className="form__input"
              type="text"
              name="name"
              id="name"
              autoComplete="off"
              placeholder="Введите имя"
              onChange={handleInputChange}
              value={values.name || ""}
              required
            />
          </label>
          <span className="form__error">{errors.name}</span>
          <label className="form__block">
            <span className="form__name">E-mail</span>
            <input
              className="form__input"
              type="email"
              name="email"
              id="email"
              autoComplete="off"
              placeholder="Введите email"
              onChange={handleInputChange}
              value={values.email || ""}
              pattern="^[\w]+@[a-zA-Z]+\.[a-zA-Z]{1,3}$"
              required
            />
          </label>
          <span className="form__error">{errors.email}</span>
          <label className="form__block">
            <span className="form__name">Пароль</span>
            <input
              className="form__input"
              type="password"
              name="password"
              id="password"
              autoComplete="off"
              placeholder="Введите пароль"
              onChange={handleInputChange}
              value={values.password || ""}
              required
            />
          </label>
          <span className="form__error">{errors.password}</span>
          <span className="form__notification form__notification_type_signup">
            {infoText}
          </span>
          <button
            className="form__btn form__btn_type_submit"
            type="submit"
            disabled={!isValid}
          >
            Зарегистрироваться
          </button>
        </form>
      </div>
    );
  }
  if (location.pathname === "/signin") {
    return (
      <div className="form__container">
        <form
          className="form form_type_auth"
          onSubmit={handleSubmit}
          noValidate
        >
          <label className="form__block">
            <span className="form__name">E-mail</span>
            <input
              className="form__input"
              type="email"
              name="email"
              id="email"
              autoComplete="off"
              placeholder="Введите email"
              onChange={handleInputChange}
              value={values.email || ""}
              pattern="^[\w]+@[a-zA-Z]+\.[a-zA-Z]{1,3}$"
              required
            />
          </label>
          <span className="form__error">{errors.email}</span>
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
              onChange={handleInputChange}
              required
            />
          </label>
          <span className="form__error">{errors.password}</span>
          <span className="form__notification form__notification_type_signin">
            {infoText}
          </span>
          <button
            className="form__btn form__btn_type_submit form__btn_signin"
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
