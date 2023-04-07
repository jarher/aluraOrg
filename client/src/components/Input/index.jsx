import "./input.css";

function Input({ title, placeholder, inputValue, change, required}) {
  return (
    <div className="form__wrapper">
      <label className="form__label">{title}</label>
      <input
        className="form__input"
        type="text"
        placeholder={placeholder}
        value={inputValue}
        onChange={(e) => change(e.target.value)}
        required={required}
      />
    </div>
  );
}

export default Input;
