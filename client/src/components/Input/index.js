import "./input.css";

function Input({title, placeholder}){
    return (
      <div className="form__wrapper">
        <label className="form__label" for="name">
          {title}
        </label>
        <input
          className="form__input"
          type="text"
          id="name"
          data-name
          placeholder={placeholder}
          required
        />
      </div>
    );
}

export default Input;