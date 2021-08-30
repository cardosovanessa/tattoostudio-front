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
  );
}

export default App;
