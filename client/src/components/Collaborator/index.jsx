import "./collaborator.css";
import { IoMdCloseCircleOutline } from "react-icons/io";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";

function Collaborator({
  collaborator,
  secondaryColor,
  deleteCollaborator,
  collaboratorFav,
}) {
  const { id, name, img, profession, isFav } = collaborator;
  
  return (
    <div className="collaborator" style={{ backgroundColor: secondaryColor }}>
      <IoMdCloseCircleOutline
        className="collaborator__close"
        onClick={() => deleteCollaborator(id)}
      />
      <div className="collaborator__header">
        <img src={img} className="collaborator__img" alt={name} />
      </div>
      <div className="collaborator__body">
        <span className="collaborator__name">{name}</span>
        <span className="collaborator__profession">{profession}</span>
        {isFav ? (
          <AiFillHeart
            style={{ color: "red" }}
            onClick={() => collaboratorFav(id)}
          />
        ) : (
          <AiOutlineHeart onClick={() => collaboratorFav(id)} />
        )}
      </div>
    </div>
  );
}

export default Collaborator;
