import Header from "./Header";
import Main from "./Main";

function App() {
  return (
    <>
      <Header />
      <Main />
      <dialog className="edit-popup form-popup popup">
        <form className="form form-popup__container" noValidate>
          <button type="button" className="close-button button">
            <img src={require("../images/close-button.png")} alt="Close icon" />
          </button>
          <h2 className="form-popup__title text">Editar perfil</h2>
          <input
            id="name-input"
            maxLength="40"
            minLength="2"
            required
            className="input"
            type="text"
            placeholder="Nombre"
          />
          <span className="form__input-error name-input-error text"></span>
          <input
            id="about-input"
            maxLength="200"
            minLength="2"
            required
            className="input"
            type="text"
            placeholder="Acerca de mí"
          />
          <span className="form__input-error about-input-error text"></span>
          <button className="save-button button" type="submit">
            Guardar
          </button>
        </form>
      </dialog>
      <dialog className="add-popup form-popup popup">
        <form className="form form-popup__container" noValidate>
          <button type="button" className="close-button button">
            <img
              src={require("../images/close-button.png")}
              alt="Icono de una X"
            />
          </button>
          <h2 className="form-popup__title text">Nuevo lugar</h2>
          <input
            id="place-input"
            maxLength="30"
            minLength="2"
            required
            className="input"
            type="text"
            placeholder="Título"
          />
          <span className="form__input-error place-input-error text"></span>
          <input
            id="link-input"
            minLength="2"
            required
            className="input"
            type="url"
            placeholder="Enlace a la imagen"
          />
          <span className="form__input-error link-input-error text"></span>
          <button className="save-button button" type="submit">
            Crear
          </button>
        </form>
      </dialog>
      <dialog className="image-popup popup">
        <button className="close-button button">
          <img
            src={require("../images/close-button.png")}
            alt="Icono de una X"
          />
        </button>
        <h2 className="image-popup__title text"></h2>
        <img
          src="placeholder"
          className="image-popup__image"
          alt="Imagen proporcionada por el usuario"
        />
      </dialog>
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
      <dialog className="popup avatar-popup">
        <button className="close-button button">
          <img
            src={require("../images/close-button.png")}
            alt="Icono de una X"
          />
        </button>
        <h2 className="avatar-popup__title text">Cambiar foto de perfil</h2>
        <input
          id="avatar-link"
          minLength="2"
          required
          className="input"
          type="url"
          placeholder="Enlace a la imagen"
        />
        <button className="save-button button" type="submit">
          Guardar
        </button>
      </dialog>
      <template className="element-template">
        <div className="element">
          <img
            className="element__image"
            src="placeholder"
            alt="Imagen proporcionada por el usuario"
          />
          <button className="delete-button button">
            <img
              src={require("../images/delete-button.png")}
              alt="Icono de borrar"
            />
          </button>
          <h3 className="element__title text"></h3>
          <button className="like-button button">
            <img
              className="like"
              src={require("../images/like-button.png")}
              alt="Icono de corazón"
            />
            <div className="like-counter"></div>
          </button>
        </div>
      </template>
    </>
  );
}

export default App;
