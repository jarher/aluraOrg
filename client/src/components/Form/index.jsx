import "./form.css";
import Input from "../Input";
import OptionList from "../OptionList";
import FormButton from "../FormButton";
import { useState } from "react";

function Form() {
  const [nameValue, setNameValue] = useState("");
  const [workValue, setWorkValue] = useState("");
  const [imgValue, setImgValue] = useState("");
  const [optionValue, setOptionValue] = useState("programación");

  const submitControl = (e) => {
    e.preventDefault();
    console.log(nameValue, workValue, imgValue, optionValue)
  };
  
  return (
    <section className="form">
      <form onSubmit={submitControl}>
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
        <OptionList value={optionValue} change={setOptionValue} />
        <FormButton text="Crear" />
      </form>
    </section>
  );
}

export default Form;
