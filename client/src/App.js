import Header from './components/Header';
import Form from './components/Form';
import MiOrg from './components/MiOrg';
import { useState } from 'react';
import Team from './components/Team';

function App() {
  const teams = [
    {
      title: "Programación",
      primaryColor: "#D9F7E9",
      secondaryColor: "#57C278",
    },
    {
      title: "Front end",
      primaryColor: "#E8F8FF",
      secondaryColor: "#82CFFA",
    },
    {
      title: "Data science",
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
      title: "Innovación y gestión",
      primaryColor: "#FFEEDF",
      secondaryColor: "#FF8A29",
    },
  ];
  const [showForm, setShowForm] = useState(true);
  return (
    <div>
      <Header />
      {showForm && <Form teams={teams.map(team => team.title)} />}
      <MiOrg setShowForm={setShowForm} />
      {teams.map(team => <Team team={team} key={team.title}/>)}
    </div>
  );
}

export default App;
