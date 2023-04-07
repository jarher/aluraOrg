import Header from './components/Header';
import Form from './components/Form';
import MiOrg from './components/MiOrg';
import { useState } from 'react';

function App() {
  const [showForm, setShowForm] = useState(true);
  return (
    <div>
      <Header />
      {showForm ? <Form />: ""}
      <MiOrg setShowForm={setShowForm} />
    </div>
  );
}

export default App;
