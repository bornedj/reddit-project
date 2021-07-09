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
import { fetchData, fetchWrapper } from '../features/fetch';

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


      <Switch>
        <Route path='/sports'>
          <TileContainer props={(process.env.REACT_APP_sports_links)}/>
        </Route>
        <Route path='/fashion'>
          <TileContainer props={(process.env.REACT_APP_fashion_links)}/>
        </Route>
        <Route path='/news'>
          <TileContainer props={(process.env.REACT_APP_news_links)}/>
        </Route>
        <Route path='/humor'>
          <TileContainer props={(process.env.REACT_APP_humor_links)}/>
        </Route>
        <Route path='/'>
        </Route>
      </Switch>
    </Router>

  );
}

export default App;
