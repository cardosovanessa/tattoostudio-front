import Header from './Components/Header/Header';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
// import Footer from './Components/Footer/Footer';
import Home from './Components/Home/Home';
import Branches from './Components/Branches/Branches';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />

        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/branches" component={Branches} exact />
        </Switch>

      </BrowserRouter>
    </div>
  );
}

export default App;
