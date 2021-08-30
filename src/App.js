<<<<<<< HEAD
import React from "react";
import { 
  BrowserRouter as Router,
  Switch,
  Route
 } from 'react-router-dom'
import Teste from "./Components/Teste";
import Contato from "./Components/Contato";
import Forms from "./Components/Teste/forms";
import Button from "./Components/Button/Button";

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
=======
import Header from './Components/Header/Header';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Footer from './Components/Footer/Footer';
import Home from './Components/Home/Home';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />

        <Switch>
          <Route path="/" component={Home} exact />
        </Switch>
        
      <Footer />
      </BrowserRouter>
    </div>
>>>>>>> main
  );
}

export default App;