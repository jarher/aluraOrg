import "./collaborator.css";
import {IoMdCloseCircleOutline} from "react-icons/io";

function Collaborator({collaborator, secondaryColor, deleteCollaborator}) {
    const {name, img, profession} = collaborator;
  return (
    <div className="collaborator" style={{backgroundColor:secondaryColor}}>
      <IoMdCloseCircleOutline className="collaborator__close" onClick={()=>deleteCollaborator(name)}/>
      <div
        className="collaborator__header">
        <img
          src={img}
          className="collaborator__img"
          alt={name}
        />
      </div>
      <div className="collaborator__body">
        <span className="collaborator__name">{name}</span>
        <span className="collaborator__profession">
          {profession}
        </span>
      </div>
    </div>
  );
}

export default Collaborator;
