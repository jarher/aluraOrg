import "./optionList.css";

function OptionList({ value, change, teams }) {
  return (
    <div className="form__wrapper">
      <label className="form__label">Equipos</label>
      <select
        className="form__select"
        id="option"
        placeholder="Seleccionar equipo"
        value={value}
        onChange={(e) => change(e.target.value)}
      >
        <option
          className="form__option--disabled"
          value=""
          disabled
          defaultValue=""
          hidden
        >
          Seleccionar equipo
        </option>
        {teams.map((team, index) => (
          <option key={index}>{team}</option>
        ))}
      </select>
    </div>
  );
}

export default OptionList;
