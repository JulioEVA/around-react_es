function Card(props) {
  function handleClick() {
    props.onCardClick(props.card);
  }
  return (
    <div className="element">
      <img
        onClick={handleClick}
        className="element__image"
        src={props.card.link}
        alt="Imagen proporcionada por el usuario"
      />
      <button className="delete-button button">
        <img
          src={require("../images/delete-button.png")}
          alt="Icono de borrar"
        />
      </button>
      <h3 className="element__title text">{props.card.name}</h3>
      <button className="like-button button">
        <img
          className="like"
          src={require("../images/like-button.png")}
          alt="Icono de corazón"
        />
        <div className="like-counter">{props.card.likes.length}</div>
      </button>
    </div>
  );
}

export default Card;
