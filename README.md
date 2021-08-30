import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import Branches from './components/Branches/Branches';

function App() {
  return (
    <BrowserRouter>
    <Header />

    <Switch>
      <Route path="/" component={Home} exact />
      <Route path="/branches" component={Branches} exact />
    </Switch>

    <Footer />
  </BrowserRouter>
  );
}

export default App;