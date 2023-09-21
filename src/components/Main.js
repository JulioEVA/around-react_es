import React from "react";
import api from "../utils/api";
import Card from "./Card";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

function Main(props) {
  const [userName, setUserName] = React.useState();
  const [userDescription, setUserDescription] = React.useState();
  const [userAvatar, setUserAvatar] = React.useState("");
  const [cards, setCards] = React.useState([]);
  const currentUser = React.useContext(CurrentUserContext);

  /**
   * Calls the API in order to get the initial data to fill the user fields.
   */
  React.useEffect(() => {
    setUserName(currentUser.name);
    setUserDescription(currentUser.about);
    setUserAvatar(currentUser.avatar);
  }, []);

  /**
   * Gets the saved cards and stores them in the state variable.
   */
  React.useEffect(() => {
    api.getInitialCards().then((cards) => {
      setCards(cards);
    });
  }, []);
  return (
    <main className="main">
      <section className="profile">
        <div className="avatar-container">
          <img className="avatar" src={userAvatar} alt="User avatar" />
          <button
            onClick={props.onEditAvatarClick}
            className="avatar-button button"
          >
            <img
              className="avatar-edit-icon"
              src={require("../images/avatar-edit.png")}
              alt="Avatar edit icon"
            />
          </button>
        </div>
        <div className="profile__info">
          <h1 className="profile__title text">{userName}</h1>
          <button
            onClick={props.onEditProfileClick}
            className="edit-button button"
          >
            <img
              src={require("../images/edit-button.png")}
              alt="User info edit icon"
            />
          </button>
          <h2 className="profile__subtitle text">{userDescription}</h2>
        </div>
        <button
          onClick={props.onAddPlaceClick}
          className="add-button button"
        ></button>
      </section>
      <section className="elements">
        {cards.map((card) => (
          <Card key={card._id} onCardClick={props.onCardClick} card={card} />
        ))}
      </section>
    </main>
  );
}

export default Main;
