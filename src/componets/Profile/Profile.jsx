import Form from "../Form/Form";
import "./Profile.css";
import { CurrentUserContext } from "../../context/CurrentUserContext";
import { useContext } from "react";

function Profile({ onLogOut, onUserUpdate, infoText, setInfoText, isError }) {
  const currentUser = useContext(CurrentUserContext);

  return (
    <section className="profile">
      <div className="profile__container">
        <h1 className="profile__title">{`Привет, ${currentUser.name}`}</h1>
        <Form
          initialValues={currentUser}
          onClick={onLogOut}
          onSubmit={onUserUpdate}
          infoText={infoText}
          setInfoText={setInfoText}
          isError={isError}
        />
      </div>
    </section>
  );
}

export default Profile;
