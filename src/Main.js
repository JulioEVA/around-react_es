function Main() {
  return (
    <main class="main">
      <section class="profile">
        <div class="avatar-container">
          <img
            class="avatar"
            src={require("../images/avatar.jpg")}
            alt="User avatar"
          />
          <button class="avatar-button button">
            <img
              class="avatar-edit-icon"
              src={require("../images/avatar-edit.png")}
              alt="Avatar edit icon"
            />
          </button>
        </div>
        <div class="profile__info">
          <h1 class="profile__title text"></h1>
          <button class="edit-button button">
            <img
              src={require("../images/edit-button.png")}
              alt="User info edit icon"
            />
          </button>
          <h2 class="profile__subtitle text"></h2>
        </div>
        <button class="add-button button"></button>
      </section>
      <section class="elements"></section>
    </main>
  );
}

export default Main;
