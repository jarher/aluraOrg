import "./form.css";
import Input from "../Input";
import OptionList from "../OptionList";
import FormButton from "../FormButton";
import { useState } from "react";
import { v4 as uuid } from "uuid";

function Form({ teams, collaboratorRegister, createTeam }) {
  const [nameValue, setNameValue] = useState("");
  const [workValue, setWorkValue] = useState("");
  const [imgValue, setImgValue] = useState("");
  const [teamValue, setTeamValue] = useState("");

  const [teamTitle, setTeamTitle] = useState("");
  const [color, setColor] = useState("#ff0000");

  const createCollaborator = (e) => {
    e.preventDefault();
    const newCollaborator = {
      id: uuid(),
      name: nameValue,
      img: imgValue,
      team: teamValue,
      profession: workValue,
      isFav:false
    };
    collaboratorRegister(newCollaborator);
  };

  const createNewTeam = (e) => {
    e.preventDefault();
    const newTeam = {
      title: teamTitle,
      secondaryColor: color,
    };
    createTeam(newTeam);
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
          inputValue={nameValue}
          change={setNameValue}
          required={true}
        />
        <Input
          title="Puesto"
          placeholder="Ingrese el puesto"
          inputValue={workValue}
          change={setWorkValue}
          required={true}
        />
        <Input
          title="Foto"
          placeholder="Ingrese el enlace de foto"
          inputValue={imgValue}
          change={setImgValue}
          required={false}
        />
        <OptionList value={teamValue} change={setTeamValue} teams={teams} />
        <FormButton text="Crear" />
      </form>
      <form onSubmit={createNewTeam}>
        <h2 className="form__title">
          Rellena el formulario para crear un nuevo equipo
        </h2>
        <Input
          title="Título"
          placeholder="Ingrese el título"
          inputValue={teamTitle}
          change={setTeamTitle}
          required={true}
        />
        <Input title="Color" inputValue={color} change={setColor} />
        <FormButton text="Crear Equipo" />
      </form>
    </section>
  );
}

export default Form;
