import Form from "../Form/Form";
import { NavLink } from "react-router-dom";
import "./Profile.css";

function Profile() {

    // const [values, setValues] = useState({ name: '', email: '' })
    // function onChange(evt) {
    //   setValues({ ...values, [evt.target.name]: evt.target.value })
    // }

    // function submit() {
    //   onUpdate(values.name, values.email)
    //   setValues({ name: '', email: '' })
    // }

    return (
        <main className="profile">
            <div className="profile__container">
                <h1 className="profile__title">{`Привет, !`}</h1>
                <Form btnText="Редактировать" />
                <NavLink className="profile__exit" to="/" >Выйти из аккаунта</NavLink>
            </div>
        </main>
    )
}

export default Profile;