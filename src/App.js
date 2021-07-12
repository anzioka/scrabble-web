import './App.css';

import React from 'react';

import { useAuth0 } from '@auth0/auth0-react';
import { Redirect, Route, Switch } from 'react-router-dom';

import About from './containers/About';
import AuthenticatedNavigation from './containers/nav/AuthenticatedNavigation';
import GameHistory from './containers/GameHistory';
import HomePage from './containers/HomePage';
import LandingPage from './containers/LandingPage';
import Loading from './components/loading';
// import MobileNewGameFab from './components/MobileNewGameFab';
import Profile from './containers/profile/Profile';
import ScrabbleGame from './containers/ScrabbleGame';
import UnAuthenticatedNavigation from './containers/nav/UnAuthenticatedNavigation';
import * as Routes from './constants/routes';

function App() {
  const { isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <Loading />;
  }
  return (
    <div className="App">
      {
        isAuthenticated ? <AuthenticatedNavigation /> : <UnAuthenticatedNavigation />
      }
      <Switch>
        <Route exact path={Routes.ROOT} component={LandingPage} />
        <Route path={Routes.GAME} component={ScrabbleGame} />
        <Route path={Routes.HOME} component={HomePage} />
        <Route path={Routes.ABOUT} component={About} />
        <Route path={Routes.HISTORY} component={GameHistory} />
        <Route path={Routes.PROFILE} component={Profile} />
        <Redirect to={Routes.ROOT} />
      </Switch>
    </div>
  );
}

export default App;
