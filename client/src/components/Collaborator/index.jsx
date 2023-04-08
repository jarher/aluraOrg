import "./collaborator.css";

function Collaborator({secondaryColor}) {
    
  return (
    <div className="collaborator" style={{backgroundColor:secondaryColor}}>
      <div
        className="collaborator__header">
        <img
          src="/img/genesis.png"
          className="collaborator__img"
          alt="colaborador foto"
        />
      </div>
      <div className="collaborator__body">
        <span className="collaborator__name">Genesis Rondón</span>
        <span className="collaborator__profession">
          Desarrolladora de software e instructora
        </span>
      </div>
    </div>
  );
}

export default Collaborator;
