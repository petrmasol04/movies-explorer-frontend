import { useLocation } from "react-router-dom";
import "./Form.css";

function Form() {

    const location = useLocation();

    if (location.pathname === "/profile") {
        return (
            <div className="form__container">
                <form className="form form__profile" noValidate>
                    <label className="form__label-profile">
                        Имя
                        <input
                            className="form__input-profile"
                            type='text'
                            name='name'
                            id='name'
                            autoComplete='off'
                        />
                    </label>
                    <span className="form__line" />
                    <label className="form__label-profile">
                        E-mail
                        <input
                            className="form__input-profile"
                            type='email'
                            name='email'
                            id='email'
                            autoComplete='off'
                        />
                    </label>
                    <span className="form__error center"></span>
                    <button className="form__btn-profile">Редактировать</button>
                </form>
            </div>
        )
    }
    if (location.pathname === "/signup") {
        return (
            <div className="form__container">
                <form className="form" noValidate >
                    <label className="form__block">
                        <span className="form__name">Имя</span>
                        <input
                            className="form__input"
                            type='text'
                            name='name'
                            id='name'
                            autoComplete='off'
                        />
                    </label>
                    <span className="form__error"></span>
                    <label className="form__block">
                        <span className="form__name">E-mail</span>
                        <input
                            className="form__input"
                            type='email'
                            name='email'
                            id='email'
                            autoComplete='off'

                        />
                    </label>
                    <span className="form__error"></span>
                    <label className="form__block">
                        <span className="form__name">Пароль</span>
                        <input
                            className="form__input"
                            type='password'
                            name='password'
                            id='password'
                            autoComplete='off'
                        />
                    </label>
                    <span className="form__error">Что-то пошло не так...</span>
                    <button className="form__btn" >Зарегистрироваться</button>
                </form>
            </div>
        )
    }
    if (location.pathname === "/signin") {
        return (
            <div className="form__container">
                <form className="form" noValidate>
                    <label className="form__block">
                        <span className="form__name">E-mail</span>
                        <input
                            className="form__input"
                            type='email'
                            name='email'
                            id='email'
                            autoComplete='off'

                        />
                    </label>
                    <span className="form__error"></span>
                    <label className="form__block">
                        <span className="form__name">Пароль</span>
                        <input
                            className="form__input"
                            type='password'
                            name='password'
                            id='password'
                            autoComplete='off'
                            s
                        />
                    </label>
                    <span className="form__error"></span>
                    <button className="form__btn">Войти</button>
                </form>
            </div>
        )
    }

}

export default Form;