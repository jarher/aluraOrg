import Header from "./components/Header";
import Form from "./components/Form";
import MiOrg from "./components/MiOrg";
import { useState } from "react";
import Team from "./components/Team";
import Footer from "./components/Footer";
import { v4 as uuid } from "uuid";

function App() {
  const [showForm, setShowForm] = useState(true);

  const [collaborators, setCollaborators] = useState(
    JSON.parse(localStorage.getItem("collaborators")) || []
  );

  const [teams, setTeams] = useState([
    {
      id: uuid(),
      title: "Programación",
      secondaryColor: "#57C278",
    },
    {
      id: uuid(),
      title: "Front-End",
      secondaryColor: "#82CFFA",
    },
    {
      id: uuid(),
      title: "Data Science",
      secondaryColor: "#A6D157",
    },
    {
      id: uuid(),
      title: "Devops",
      secondaryColor: "#E06B69",
    },
    {
      id: uuid(),
      title: "UX y Diseño",
      secondaryColor: "#DB6EBF",
    },
    {
      id: uuid(),
      title: "Móvil",
      secondaryColor: "#FFBA05",
    },
    {
      id: uuid(),
      title: "Innovación y Gestión",
      secondaryColor: "#FF8A29",
    },
  ]);

  const [isFav, setIsFav] = useState(false);

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

  const createTeam = (newTeam) => {
    setTeams([...teams, { ...newTeam, id: uuid() }]);
  };

  const setCollaboratorFav = (id) => {
    setIsFav(prev => !prev);
    const data = JSON.parse(localStorage.getItem("collaborators"));
    if (data.length > 0) {
      const updatedCollaborators = data.map((collaborator) => {
        if (collaborator.id === id) {
          collaborator.isFav = isFav;
        }
        return collaborator;
      });
      setCollaborators(updatedCollaborators);
      localStorage.setItem("collaborators", JSON.stringify(updatedCollaborators));
    }
  };


  return (
    <div className="container">
      <Header />
      {showForm && (
        <Form
          teams={teams.map((team) => team.title)}
          collaboratorRegister={collaboratorRegister}
          createTeam={createTeam}
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
            collaboratorFav={setCollaboratorFav}
            key={team.id}
          />
        ))}
      <Footer />
    </div>
  );
}

export default App;
