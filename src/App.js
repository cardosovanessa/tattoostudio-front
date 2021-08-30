import React from "react";
import { 
  BrowserRouter as Router,
  Switch,
  Route
 } from 'react-router-dom'
import Teste from "./Components/Teste";
import Contato from "./Components/Contato";
import Forms from "./Components/Teste/forms";

function App() {
  return (
    <>
      <Router>
        <h1>MAFIA TATTOO STUDIO</h1>
        <Switch>
          <Route exact path="/contato/*"><Contato/></Route>
          <Route exact path="/teste/"><Teste/></Route>
          <Route exact path="/forms"><Forms/></Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;