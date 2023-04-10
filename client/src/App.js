import Header from "./components/Header";
import Form from "./components/Form";
import MiOrg from "./components/MiOrg";
import { useState } from "react";
import Team from "./components/Team";
import Footer from "./components/Footer";
import { v4 as uuid} from "uuid";

function App() {

  const [showForm, setShowForm] = useState(true);

  const [collaborators, setCollaborators] = useState(
    JSON.parse(localStorage.getItem("collaborators")) || []
  );

  const [teams, setTeams] = useState([
    {
      id:uuid(),
      title: "Programación",
      primaryColor: "#D9F7E9",
      secondaryColor: "#57C278",
    },
    {
      id:uuid(),
      title: "Front-End",
      primaryColor: "#E8F8FF",
      secondaryColor: "#82CFFA",
    },
    {
      id:uuid(),
      title: "Data Science",
      primaryColor: "#F0F8E2",
      secondaryColor: "#A6D157",
    },
    {
      id:uuid(),
      title: "Devops",
      primaryColor: "#FDE7E8",
      secondaryColor: "#E06B69",
    },
    {
      id:uuid(),
      title: "UX y Diseño",
      primaryColor: "#FAE9F5",
      secondaryColor: "#DB6EBF",
    },
    {
      id:uuid(),
      title: "Móvil",
      primaryColor: "#FFF5D9",
      secondaryColor: "#FFBA05",
    },
    {
      id:uuid(),
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

  const deleteCollaborator = (id) => {
    const collaborator = collaborators.filter(
      (collaborator) => collaborator.id !== id
    );
    setCollaborators([collaborator]);
    localStorage.setItem("collaborators", JSON.stringify(collaborator));
  };

  const updateColorTeam = (color, teamId) => {
    const updatedTeams = teams.map((team) => {
      if (team.id === teamId) {
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
            key={team.id}
          />
        ))}
      <Footer />
    </div>
  );
}

export default App;
