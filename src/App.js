import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import Portfolio from './Components/Portfolio/Portfolio';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />

        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/Portfolio" component={Portfolio} exact />
        </Switch>
        
      <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
