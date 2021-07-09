import './App.css';
import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
  useRouteMatch,
} from "react-router-dom";
import routes from './routes'
import TileContainer from '../components/TileContainer/TileContainer'

function App() {
  return (
    <Router>
      <nav>
        <ul>
          <li>
            <NavLink to={routes.sports()} activeClassName="active">
              Sports
            </NavLink>
          </li>
          <li>
            <NavLink to={routes.fashion()} activeClassName="active">
              Fashion
            </NavLink>
          </li>
          <li>
            <NavLink to={routes.news()} activeClassName="active">
              News
            </NavLink>
          </li>
          <li>
            <NavLink to={routes.humor()} activeClassName="active">
              Humor
            </NavLink>
          </li>
        </ul>
      </nav>

      <div>
        <button 
        onClick={()=> fetchCode().then(userCode => getToken(userCode))} >
          Authorize reddit
        </button>
      </div>

      <Switch>
        <Route path='/sports'>
          <TileContainer props={process.env.REACT_APP_TEST_JSON.json()}/>
        </Route>
        <Route path='/fashion'>
          {/* components to be returned */}
        </Route>
        <Route path='/news'>
          {/* components to be returned */}
        </Route>
        <Route path='/humor'>
          {/* components to be returned */}
        </Route>
        <Route path='/'>
          {/* components to be returned */}
        </Route>
      </Switch>
    </Router>

  );
}

export default App;
