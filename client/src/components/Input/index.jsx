import "./input.css";

function Input({ title, placeholder, required }) {
  return (
    <div className="form__wrapper">
      <label className="form__label">{title}</label>
      <input
        className="form__input"
        type="text"
        data-name
        placeholder={placeholder}
        required={required}
      />
    </div>
  );
}

export default Input;
