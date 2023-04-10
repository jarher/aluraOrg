import "./form.css";
import Input from "../Input";
import OptionList from "../OptionList";
import FormButton from "../FormButton";
import { useState } from "react";
import { v4 as uuid } from "uuid";

function Form({teams, collaboratorRegister}) {
  const [nameValue, setNameValue] = useState("");
  const [workValue, setWorkValue] = useState("");
  const [imgValue, setImgValue] = useState("");
  const [teamValue, setTeamValue] = useState("");

  const createCollaborator = (e) => {
    e.preventDefault();
    const newCollaborator = {
      id:uuid(),
      name:nameValue,
      img:imgValue,
      team:teamValue,
      profession:workValue
    }
    collaboratorRegister(newCollaborator);
  };
  
  return (
    <section className="form">
      <form onSubmit={createCollaborator}>
        <h2 className="form__title">
          Rellena el formulario para crear el colaborador
        </h2>
        <Input
          title="Nombre"
          placeholder="Ingrese el nombre"
          value={nameValue}
          change={setNameValue}
          required={true}
        />
        <Input
          title="Puesto"
          placeholder="Ingrese el puesto"
          value={workValue}
          change={setWorkValue}
          required={true}
        />
        <Input
          title="Foto"
          placeholder="Ingrese el enlace de foto"
          value={imgValue}
          change={setImgValue}
          required={false}
        />
        <OptionList value={teamValue} change={setTeamValue} teams={teams} />
        <FormButton text="Crear" />
      </form>
    </section>
  );
}

export default Form;
