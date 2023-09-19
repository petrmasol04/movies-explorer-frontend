import Form from "../Form/Form";
import "./Profile.css";

function Profile() {
  return (
    <section className="profile">
      <div className="profile__container">
        <h1 className="profile__title">{`Привет, Пётр!`}</h1>
        <Form />
      </div>
    </section>
  );
}

export default Profile;
