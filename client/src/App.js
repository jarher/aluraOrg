import Header from "./components/Header";
import Form from "./components/Form";
import MiOrg from "./components/MiOrg";
import { useState } from "react";
import Team from "./components/Team";
import Footer from "./components/Footer";

function App() {

  const [showForm, setShowForm] = useState(true);

  const [collaborators, setCollaborators] = useState(
    JSON.parse(localStorage.getItem("collaborators")) || []
  );

  const [teams, setTeams] = useState([
    {
      title: "Programación",
      primaryColor: "#D9F7E9",
      secondaryColor: "#57C278",
    },
    {
      title: "Front-End",
      primaryColor: "#E8F8FF",
      secondaryColor: "#82CFFA",
    },
    {
      title: "Data Science",
      primaryColor: "#F0F8E2",
      secondaryColor: "#A6D157",
    },
    {
      title: "Devops",
      primaryColor: "#FDE7E8",
      secondaryColor: "#E06B69",
    },
    {
      title: "UX y Diseño",
      primaryColor: "#FAE9F5",
      secondaryColor: "#DB6EBF",
    },
    {
      title: "Móvil",
      primaryColor: "#FFF5D9",
      secondaryColor: "#FFBA05",
    },
    {
      title: "Innovación y Gestión",
      primaryColor: "#FFEEDF",
      secondaryColor: "#FF8A29",
    },
  ]);

  const collaboratorRegister = (newCollaborator) => {
    const data = JSON.parse(localStorage.getItem("collaborators")) || [];
    setCollaborators([...collaborators, newCollaborator]);
    data.push(newCollaborator);
    localStorage.setItem("collaborators", JSON.stringify(data));
  };

  const deleteCollaborator = (name) => {
    const collaborator = collaborators.filter(
      (collaborator) => collaborator.name !== name
    );
    setCollaborators([collaborator]);
    localStorage.setItem("collaborators", JSON.stringify(collaborator));
  };

  const updateColorTeam = (color, teamTitle) => {
    const updatedTeams = teams.map((team) => {
      if (team.title === teamTitle) {
        team.secondaryColor = color;
      }
      return team;
    });
    setTeams(updatedTeams);
  };

  return (
    <div>
      <Header />
      {showForm && (
        <Form
          teams={teams.map((team) => team.title)}
          collaboratorRegister={collaboratorRegister}
        />
      )}
      <MiOrg setShowForm={setShowForm} />
      {collaborators.length > 0 &&
        teams.map((team) => (
          <Team
            team={team}
            collaborators={collaborators.filter(
              (collaborator) => collaborator.team === team.title
            )}
            updateColorTeam={updateColorTeam}
            deleteCollaborator={deleteCollaborator}
            key={team.title}
          />
        ))}
      <Footer />
    </div>
  );
}

export default App;
