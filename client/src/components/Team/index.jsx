import Collaborator from "../Collaborator";
import "./team.css";

function Team({ team, collaborators }) {
  const { title, primaryColor, secondaryColor } = team;
  return (collaborators.length > 0 &&
    <section className="team" style={{ backgroundColor: primaryColor }}>
      <h3 className="team__title" style={{ borderBottomColor: secondaryColor }}>
        {title}
      </h3>
      <div className="team__collaborators">
        {collaborators.map((collaborator) => (
            <Collaborator
              collaborator={collaborator}
              secondaryColor={secondaryColor}
              key={collaborator.name}
            />
          ))}
      </div>
    </section>);
}

export default Team;
