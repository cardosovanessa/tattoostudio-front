import React from "react";
import { 
  BrowserRouter as Router,
  Switch,
  Route
 } from 'react-router-dom'
import Teste from "./Components/Teste";
import Contato from "./Components/Contato";
import Forms from "./Components/Teste/forms";
import Home from "./Components/Home/Home"
import Header from "./Components/Header/Header"
import Footer from "./Components/Footer/Footer"

function App() {
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route path="/" component={Home} exact />
          <Route exact path="/Cadastro/*"><Contato/></Route>
          <Route exact path="/teste/"><Teste/></Route>
          <Route exact path="/forms"><Forms/></Route>
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;