
import React from "react";
import Teste from "./Components/Teste";
import Contato from "./Components/Contato";
import Forms from "./Components/Teste/forms";
import Button from "./Components/Button/Button";
import Header from './Components/Header/Header';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Footer from './Components/Footer/Footer';
import Home from './Components/Home/Home';
import Formulario from "./Components/Formulario/Formulario";

/*function App() {
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
  )}*/


function App() {
  return (
    /*<div>
      <BrowserRouter>
        <Header />

        <Switch>
          <Route path="/" component={Home} exact />
        </Switch>
        
      <Footer />
      </BrowserRouter>
    </div>*/
    <div>
      
      <Button>Olá</Button>
    </div>
    
  );
}

export default App;