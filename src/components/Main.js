import React from "react";
import api from "../utils/api";
import Card from "./Card";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

function Main(props) {
  const [cards, setCards] = React.useState([]);
  const currentUser = React.useContext(CurrentUserContext);

  /**
   * Gets the saved cards and stores them in the state variable.
   */
  React.useEffect(() => {
    api.getInitialCards().then((cards) => {
      setCards(cards);
    });
  }, []);

  function handleCardLike(card, isLiked) {
    //Envía una petición a la API y obteón los datos actualizados de la tarjeta
    if (!isLiked) {
      api.likeCard(card._id).then((newCard) => {
        _refreshCards(card, newCard);
      });
    } else {
      api.dislikeCard(card._id).then((newCard) => {
        _refreshCards(card, newCard);
      });
    }
  }

  function _refreshCards(card, newCard) {
    setCards((state) => state.map((c) => (c._id === card._id ? newCard : c)));
  }

  function handleCardDelete(card, isOwn) {
    if (isOwn) {
      api.deleteCard(card._id).then(() => {
        setCards(cards.filter((c) => c._id != card._id));
      });
    }
  }
  return (
    <main className="main">
      <section className="profile">
        <div className="avatar-container">
          <img className="avatar" src={currentUser.avatar} alt="User avatar" />
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
          <h1 className="profile__title text">{currentUser.name}</h1>
          <button
            onClick={props.onEditProfileClick}
            className="edit-button button"
          >
            <img
              src={require("../images/edit-button.png")}
              alt="User info edit icon"
            />
          </button>
          <h2 className="profile__subtitle text">{currentUser.about}</h2>
        </div>
        <button
          onClick={props.onAddPlaceClick}
          className="add-button button"
        ></button>
      </section>
      <section className="elements">
        {cards.map((card) => (
          <Card
            key={card._id}
            onCardClick={props.onCardClick}
            card={card}
            onCardLike={handleCardLike}
            onCardDelete={handleCardDelete}
          />
        ))}
      </section>
    </main>
  );
}

export default Main;
