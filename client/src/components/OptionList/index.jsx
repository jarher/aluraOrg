import "./optionList.css";

function OptionList() {
  const teams = [
    "Programación",
    "front end",
    "Data science",
    "Devops",
    "UX y Diseño",
    "Móvil",
    "Innovación y gestión",
  ];
  return (
    <div className="form__wrapper">
      <label className="form__label">Equipos</label>
      <select
        className="form__select"
        id="option"
        placeholder="Seleccionar equipo"
      >
        {teams.map((team, index) => <option key={index}>{team}</option>)}
      </select>
    </div>
  );
}

export default OptionList;
