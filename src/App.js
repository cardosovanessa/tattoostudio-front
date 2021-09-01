import React from "react";
import { 
  BrowserRouter as Router,
  Switch,
  Route
 } from 'react-router-dom'
import Contato from "./Components/Contato";
import Home from "./Components/Home/Home"
import Header from "./Components/Header/Header"
import Footer from "./Components/Footer/Footer"
import Portfolio from "./Components/Portfolio/Portfolio"

function App() {
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route path="/" component={Home} exact />
          <Route exact path="/Cadastro/*"><Contato/></Route>
          <Route path="/Portfolio" component={Portfolio} exact />
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;