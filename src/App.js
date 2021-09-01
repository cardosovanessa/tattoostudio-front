import Header from './Components/Header/Header';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Footer from './Components/Footer/Footer';
import Home from './Components/Home/Home';
import Materiais from './Components/Materiais/Materiais';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />

        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/Materiais" component={Materiais} exact />
        </Switch>
        
      <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
