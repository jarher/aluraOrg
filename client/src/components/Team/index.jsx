import Collaborator from "../Collaborator";
import hexToRgba from "hex-to-rgba";
import "./team.css";

function Team({
  team,
  collaborators,
  updateColorTeam,
  deleteCollaborator,
  collaboratorFav,
  isFav
}) {
  const { id, title, secondaryColor } = team;

  const backgroundColor = hexToRgba(secondaryColor, 0.3);
  const bgNumbers = backgroundColor.replace(/[a-z()]/g, "").split(",");

  const red = Number(bgNumbers[0]);
  const green = Number(bgNumbers[1]);
  const blue = Number(bgNumbers[2]);
  const alpha = Number(bgNumbers[3]);

  function RGBAToHexA(r, g, b, a) {
    let rHx = r.toString(16);
    let gHx = g.toString(16);
    let bHx = b.toString(16);

    if (rHx.length === 1) rHx = "0" + rHx;
    if (gHx.length === 1) gHx = "0" + gHx;
    if (bHx.length === 1) bHx = "0" + bHx;

    return "#" + rHx + gHx + bHx;
  }

  return (
    collaborators.length > 0 && (
      <section className="team" style={{ backgroundColor: backgroundColor }}>
        <h3
          className="team__title"
          style={{ borderBottomColor: secondaryColor }}
        >
          {title}
        </h3>
        <input
          type="color"
          className="team__color"
          value={RGBAToHexA(red, green, blue, alpha)}
          onChange={(e) => {
            updateColorTeam(e.target.value, id);
          }}
        />
        <div className="team__collaborators">
          {collaborators.map((collaborator) => (
            <Collaborator
              collaborator={collaborator}
              secondaryColor={secondaryColor}
              deleteCollaborator={deleteCollaborator}
              collaboratorFav={collaboratorFav}
              key={collaborator.id}
            />
          ))}
        </div>
      </section>
    )
  );
}

export default Team;
