import "./form.css";
import Input from "../Input";
import OptionList from "../OptionList";
import FormButton from "../FormButton";

function Form() {
  return (
    <section className="form">
      <form>
        <h2 className="form__title">
          Rellena el formulario para crear el colaborador
        </h2>
        <Input title="Nombre" placeholder="Ingrese el nombre" />
        <Input title="Puesto" placeholder="Ingrese el puesto" />
        <Input title="Foto" placeholder="Ingrese el enlace de foto" />
        <OptionList />
        <FormButton />
      </form>
    </section>
  );
}

export default Form;
