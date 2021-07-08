import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
  useRouteMatch,
} from "react-router-dom";
import routes from './routes'
import React from 'react';
import Sports from '../components/Sports'
import {fetchCode, generateRandomString, getToken} from '../features/fetch'

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
          <Sports />
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
