function PopupWithForm(props) {
  return (
    <dialog className={`${props.name} popup`}>
      <form className="form form-popup__container" noValidate>
        <button type="button" className="close-button button">
          <img src={require("../images/close-button.png")} alt="Close icon" />
        </button>
        <h2 className="form-popup__title text">{props.title}</h2>
        <input
          id={props.inputId}
          maxLength={props.inputMaxLength}
          minLength="2"
          required
          className="input"
          type={props.inputType}
          placeholder={props.placeholder}
        />
        <span
          className={`form__input-error ${props.inputId}-error text`}
        ></span>
        {props.children}
        <button className="save-button button" type="submit">
          {props.saveButtonText}
        </button>
      </form>
    </dialog>
  );
}

export default PopupWithForm;
