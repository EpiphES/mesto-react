import React from "react";
import Header from "./Header";

function App() {
  return (
    <body class="page">
      <div class="page__container">
        <Header />
        <main class="content">
          <section class="profile">
            <a href="#" class="profile__avatar"></a>
            <div class="profile__info">
              <div class="profile__title">
                <h1 class="profile__name">Жак-Ив Кусто</h1>
                <button
                  class="profile__edit-button"
                  type="button"
                  aria-label="редактировать"></button>
              </div>
              <p class="profile__about"></p>
            </div>
            <button
              class="profile__add-button"
              type="button"
              aria-label="добавить"></button>
          </section>

          <ul class="elements"></ul>
        </main>

        <footer class="footer">
          <p class="footer__copyright">&copy; 2022 Mesto Russia</p>
        </footer>
      </div>

      <div class="popup popup_type_edit-profile">
        <div class="popup__content">
          <button
            class="popup__close-button"
            type="button"
            aria-label="закрыть"></button>
          <h2 class="popup__title">Редактировать профиль</h2>
          <form class="popup__form" name="profile-form" novalidate>
            <input
              class="popup__input popup__input_type_name"
              type="text"
              name="name"
              id="name-input"
              placeholder="Имя"
              minlength="2"
              maxlength="40"
              required
            />
            <span class="popup__input-error name-input-error"></span>
            <input
              class="popup__input popup__input_type_about"
              type="text"
              name="about"
              id="about-input"
              placeholder="О себе"
              minlength="2"
              maxlength="200"
              required
            />
            <span class="popup__input-error about-input-error"></span>
            <button
              class="popup__submit-button"
              type="submit"
              aria-label="сохранить">
              Сохранить
            </button>
          </form>
        </div>
      </div>

      <div class="popup popup_type_add-element">
        <div class="popup__content">
          <button
            class="popup__close-button"
            type="button"
            aria-label="закрыть"></button>
          <h2 class="popup__title">Новое место</h2>
          <form class="popup__form" name="add-form" novalidate>
            <input
              class="popup__input popup__input_type_card-title"
              type="text"
              name="title"
              placeholder="Название"
              id="title-input"
              minlength="2"
              maxlength="30"
              required
            />
            <span class="popup__input-error title-input-error"></span>
            <input
              class="popup__input popup__input_type_image-link"
              type="url"
              name="link"
              placeholder="Ссылка на картинку"
              id="link-input"
              required
            />
            <span class="popup__input-error link-input-error"></span>
            <button
              class="popup__submit-button"
              type="submit"
              aria-label="создать">
              Создать
            </button>
          </form>
        </div>
      </div>

      <div class="popup popup_type_update-avatar">
        <div class="popup__content">
          <button
            class="popup__close-button"
            type="button"
            aria-label="закрыть"></button>
          <h2 class="popup__title">Обновить аватар</h2>
          <form class="popup__form" name="avatar-form" novalidate>
            <input
              class="popup__input popup__input_type_avatar-link"
              type="url"
              name="avatar"
              placeholder="Ссылка на картинку"
              id="avatar-input"
              required
            />
            <span class="popup__input-error avatar-input-error"></span>
            <button
              class="popup__submit-button"
              type="submit"
              aria-label="сохранить">
              Сохранить
            </button>
          </form>
        </div>
      </div>

      <div class="popup popup_type_confirm">
        <div class="popup__content">
          <button
            class="popup__close-button"
            type="button"
            aria-label="закрыть"></button>
          <h2 class="popup__title popup__title_place_confirm">Вы уверены?</h2>
          <button class="popup__submit-button" type="button" aria-label="да">
            Да
          </button>
        </div>
      </div>

      <div class="popup popup_type_image">
        <div class="popup__content popup__content_image">
          <button
            class="popup__close-button"
            type="button"
            aria-label="закрыть"></button>
          <figure class="popup__figure">
            <img src="/" alt=" " class="popup__image" />
            <figcaption class="popup__caption"></figcaption>
          </figure>
        </div>
      </div>

      <template class="elements__template">
        <li class="elements__item">
          <img src="/" alt=" " class="elements__photo" />
          <button
            class="elements__delete"
            type="button"
            aria-label="удалить"></button>
          <div class="elements__caption">
            <h2 class="elements__title"></h2>
            <div class="elements__like-group">
              <button
                class="elements__like-button"
                type="button"
                aria-label="нравится"></button>
              <span class="elements__like-count"></span>
            </div>
          </div>
        </li>
      </template>
    </body>
  );
}

export default App;
