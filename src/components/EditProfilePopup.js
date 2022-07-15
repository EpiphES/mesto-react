import { useState, useContext, useEffect } from "react";
import CurrentUserContext from "../contexts/CurrentUserContext";
import PopupWithForm from "./PopupWithForm";

function EditProfilePopup({ isOpen, onClose, onUpdateUser, isLoading }) {
  const currentUser = useContext(CurrentUserContext);

  const [formValues, setFormValues] = useState({
    name: {
      value: "",
      error: "",
      isValid: true,
    },
    about: {
      value: "",
      error: "",
      isValid: true,
    },
  });

  useEffect(() => {
    setFormValues({
      name: {
        value: currentUser?.name,
        error: "",
        isValid: true,
      },
      about: {
        value: currentUser?.about,
        error: "",
        isValid: true,
      },
    });
  }, [currentUser, isOpen]);

  function handleChange(evt) {
    const {
      name,
      value,
      validity: { valid },
      validationMessage,
    } = evt.target;

    setFormValues((prevState) => ({
      ...prevState,
      [name]: { value, isValid: valid, error: validationMessage },
    }));
  }

  function handleSubmit(evt) {
    evt.preventDefault();

    onUpdateUser({
      name: formValues.name.value,
      about: formValues.about.value,
    });
  }

  return (
    <PopupWithForm
      name="profile"
      title="Редактировать профиль"
      acceptMessage="Сохранить"
      onClose={onClose}
      isOpened={isOpen}
      onSubmit={handleSubmit}
      isLoading={isLoading}
      isValid={formValues.name.isValid && formValues.about.isValid}>
      <input
        className={`popup__input popup__input_type_name ${
          !formValues.name.isValid && "popup__input_invalid"
        }`}
        type="text"
        name="name"
        id="name-input"
        placeholder="Имя"
        minLength="2"
        maxLength="40"
        required
        onChange={handleChange}
        value={formValues.name.value || ""}
      />
      <span
        className={`popup__input-error name-input-error ${
          !formValues.name.isValid && "popup__input-error_visible"
        }`}>
        {formValues.name.error}
      </span>
      <input
        className={`popup__input popup__input_type_about ${
          !formValues.about.isValid && "popup__input_invalid"
        }`}
        type="text"
        name="about"
        id="about-input"
        placeholder="О себе"
        minLength="2"
        maxLength="200"
        required
        onChange={handleChange}
        value={formValues.about.value || ""}
      />
      <span
        className={`popup__input-error about-input-error ${
          !formValues.about.isValid && "popup__input-error_visible"
        }`}>
        {formValues.about.error}
      </span>
    </PopupWithForm>
  );
}

export default EditProfilePopup;
