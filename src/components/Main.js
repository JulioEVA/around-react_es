function Main() {
  function handleEditAvatarClick() {
    const editAvatarPopup = document.querySelector(".avatar-popup");
    editAvatarPopup.showModal();
    editAvatarPopup.classList.add("popup_is-opened");
  }
  function handleEditProfileClick() {
    const editProfilePopup = document.querySelector(".edit-popup");
    editProfilePopup.showModal();
    editProfilePopup.classList.add("popup_is-opened");
  }
  function handleAddPlaceClick() {
    const addPlacePopup = document.querySelector(".add-popup");
    addPlacePopup.showModal();
    addPlacePopup.classList.add("popup_is-opened");
  }

  return (
    <main className="main">
      <section className="profile">
        <div className="avatar-container">
          <img
            className="avatar"
            src={require("../images/avatar.jpg")}
            alt="User avatar"
          />
          <button
            onClick={handleEditAvatarClick}
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
          <h1 className="profile__title text"></h1>
          <button
            onClick={handleEditProfileClick}
            className="edit-button button"
          >
            <img
              src={require("../images/edit-button.png")}
              alt="User info edit icon"
            />
          </button>
          <h2 className="profile__subtitle text"></h2>
        </div>
        <button
          onClick={handleAddPlaceClick}
          className="add-button button"
        ></button>
      </section>
      <section className="elements"></section>
    </main>
  );
}

export default Main;
