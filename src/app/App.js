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
import { selectPosts } from '../features/fetch';
import links from './links'
import { useDispatch } from 'react-redux';
import { getSportsPostsAsync, selectSportsPosts } from '../features/sportsSlice';
import store from './store';

function App() {
  const dispatch = useDispatch();
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

      <button onClick={() => { 
        selectPosts(links.sports)
        dispatch(getSportsPostsAsync(links.sports))
      }
      }>test fetch reddits</button>

      <button onClick={() => console.log(store.getState())}>Get state</button>
      

      <Switch>
        <Route path='/sports'>
          <TileContainer props={links.sports} />
        </Route>
        <Route path='/fashion'>
          <TileContainer props={links.fashion} />
        </Route>
        <Route path='/news'>
          <TileContainer props={links.news} />
        </Route>
        <Route path='/humor'>
          <TileContainer props={links.humor} />
        </Route>
        <Route path='/'>
        </Route>
      </Switch>
    </Router>

  );
}

export default App;
