import React from "react";
import { 
  BrowserRouter as Router,
  Switch,
  Route
 } from 'react-router-dom'
import Teste from "./Components/Teste";
import Contato from "./Components/Contato";

function App() {
  return (
    <>
      <Router>
        <h1>MAFIA TATTOO STUDIO</h1>
        <Switch>
          <Route exact path="/contato/*"><Contato/></Route>
          <Route exact path="/teste/"><Teste/></Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;