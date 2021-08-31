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
import Portfolio from "./Components/Portfolio/Portfolio"
import Busca from "./Components/Busca";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Busca />
        <Switch>
          <Route path="/" component={Home} exact />
          <Route exact path="/Cadastro/*"><Contato/></Route>
          <Route exact path="/teste/"><Teste/></Route>
          <Route exact path="/forms"><Forms/></Route>
          <Route path="/Portfolio" component={Portfolio} exact />
        </Switch>
        <Footer />
      </Router>
    </>

  );
}

export default App;