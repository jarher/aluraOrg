import "./form.css";
import Input from "../Input";
import OptionList from "../OptionList";
import FormButton from "../FormButton";

function Form() {
  const submitControl = (e) => {
    e.preventDefault();
  };
  const inputParameters = [
    { title: "Nombre", placeholder: "Ingrese el nombre", required: true },
    { title: "Puesto", placeholder: "Ingrese el puesto", required: true },
    { title: "Foto", placeholder: "Ingrese el enlace de foto", required: false },
  ];
  return (
    <section className="form">
      <form onSubmit={submitControl}>
        <h2 className="form__title">
          Rellena el formulario para crear el colaborador
        </h2>
        {inputParameters.map((parameters, index) => (
          <Input
            title={parameters.title}
            placeholder={parameters.placeholder}
            required={parameters.required}
            key={index}
          />
        ))}
        <OptionList />
        <FormButton text="Crear" />
      </form>
    </section>
  );
}

export default Form;
