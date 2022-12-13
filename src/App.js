import './App.css';

import { BrowserRouter, NavLink, Route, Switch } from 'react-router-dom';

import About from './pages/About';
import Contact from './pages/Contact';
import Home from './pages/Home';

function App() {
  return (
    <div className="d-block">
      <BrowserRouter>
        <nav>
          <h3 className='col-4'>My Articles</h3>
          <div className="col-8">
            {/* we use Link tag instead of a because it won't send request to server everytime we click on it  */}
            <NavLink exact to="/">Home</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/contact">Contact</NavLink>
          </div>
        </nav>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
