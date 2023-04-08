import Collaborator from "../Collaborator";
import "./team.css";

function Team({team}) {
    const {title, primaryColor, secondaryColor} = team;
  return (
    <section className="team" style={{ backgroundColor: primaryColor }}>
      <h3 className="team__title" style={{ borderBottomColor: secondaryColor }}>
        {title}
      </h3>
      <div className="team__collaborators">
        <Collaborator secondaryColor={secondaryColor} />
        <Collaborator secondaryColor={secondaryColor} />
        <Collaborator secondaryColor={secondaryColor} />
        <Collaborator secondaryColor={secondaryColor} />
      </div>
    </section>
  );
}

export default Team;
