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
          <TileContainer props={JSON.parse(process.env.REACT_APP_TEST_JSON)}/>
        </Route>
        <Route path='/fashion'>
          <TileContainer props={JSON.parse(process.env.REACT_APP_TEST_JSON)}/>
        </Route>
        <Route path='/news'>
          <TileContainer props={JSON.parse(process.env.REACT_APP_TEST_JSON)}/>
        </Route>
        <Route path='/humor'>
          <TileContainer props={JSON.parse(process.env.REACT_APP_TEST_JSON)}/>
        </Route>
        <Route path='/'>
          <button style={{margin: '5rem'}} 
          onClick={()=> console.log(fetchWrapper(process.env.REACT_APP_fashion_links))}>Test fetch</button>
        </Route>
      </Switch>
    </Router>

  );
}

export default App;
