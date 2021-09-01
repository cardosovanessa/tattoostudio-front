import Header from './Components/Header/Header';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Footer from './Components/Footer/Footer';
import Home from './Components/Home/Home';
import Portfolio from './Components/Portfolio/Portfolio';

function App() {
  return (

    <div>

      <BrowserRouter>

        <Header />

        <Switch>
          <Route path="/Home" component={Home} exact />
        </Switch>

        <Switch>
          <Route path="/Portfolio" component={Portfolio} exact />
        </Switch>

        <Footer />
      </BrowserRouter>

    </div>
  );
}

export default App;
