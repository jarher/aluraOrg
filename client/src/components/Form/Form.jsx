import "./form.css";
import Input from "../Input";

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

        <div className="form__wrapper">
          <button className="form__button">Crear</button>
        </div>
      </form>
    </section>
  );
}

export default Form;
