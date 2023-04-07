import "./formButton.css";

function FormButton({text}){
    return (
      <div className="form__wrapper">
        <button className="form__button">{text}</button>
      </div>
    );
}

export default FormButton;

