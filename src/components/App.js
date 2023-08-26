import React from "react";
import Header from "./Header";
import Main from "./Main";
import PopupWithForm from "./PopupWithForm";
import ImagePopup from "./ImagePopup";
import Footer from "./Footer";

function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] =
    React.useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] =
    React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [isImagePopupOpen, setIsImagePopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState();

  /**
   * Stores the given card in the state variable.
   * @param {*} card The card that is to be stored.
   */
  function handleCardClick(card) {
    setSelectedCard(card);
    setIsImagePopupOpen(true);
  }

  /**
   * Changes the state variable status in order to open the given popup
   */
  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  }
  /**
   * Changes the state variable status in order to open the given popup
   */
  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  }
  /**
   * Changes the state variable status in order to open the given popup
   */
  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
  }

  /**
   * Closes all the popups by restoring the states variables to its default values.
   */
  function closeAllPopups() {
    setIsEditAvatarPopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsImagePopupOpen(false);
    setSelectedCard("");
  }

  return (
    <>
      <Header />
      <Main
        onCardClick={handleCardClick}
        onEditProfileClick={handleEditProfileClick}
        onAddPlaceClick={handleAddPlaceClick}
        onEditAvatarClick={handleEditAvatarClick}
      />
      <Footer />
      <PopupWithForm
        name="edit-popup form-popup"
        title="Editar perfil"
        inputId="name-input"
        placeholder="Nombre"
        saveButtonText="Guardar"
        inputMaxLength="40"
        inputType="text"
        isOpen={isEditProfilePopupOpen}
        onClose={closeAllPopups}
      >
        <input
          id="about-input"
          minLength="2"
          maxLength="200"
          required
          className="input"
          type="text"
          placeholder="Acerca de mí"
        />
        <span className={`form__input-error about-input-error text`}></span>
      </PopupWithForm>
      <PopupWithForm
        name="add-popup form-popup"
        title="Nuevo lugar"
        inputId="place-input"
        placeholder="Título"
        saveButtonText="Crear"
        inputMaxLength="30"
        inputType="text"
        isOpen={isAddPlacePopupOpen}
        onClose={closeAllPopups}
      >
        <input
          id="link-input"
          minLength="2"
          required
          className="input"
          type="url"
          placeholder="Enlace a la imagen"
        />
        <span className={`form__input-error link-input-error text`}></span>
      </PopupWithForm>
      <PopupWithForm
        name="avatar-popup"
        title="Cambiar foto de perfil"
        inputId="avatar-link"
        maxLength=""
        type="url"
        placeholder="Enlace a la imagen"
        saveButtonText="Guardar"
        isOpen={isEditAvatarPopupOpen}
        onClose={closeAllPopups}
      />
      <ImagePopup
        card={selectedCard}
        onClose={closeAllPopups}
        isOpen={isImagePopupOpen}
      />
      <dialog className="popup confirmation-popup">
        <button className="close-button button">
          <img
            src={require("../images/close-button.png")}
            alt="Icono de una X"
          />
        </button>
        <h2 className="confirmation-popup__title text">¿Estás seguro?</h2>
        <button className="save-button button" type="submit">
          Sí
        </button>
      </dialog>
    </>
  );
}

export default App;
