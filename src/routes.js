import React from 'react';

import {
  BrowserRouter,
  Switch,
  Route,
} from "react-router-dom";

import LoginPage from './pages/LoginPage';

const Routes = () => (
  <BrowserRouter >
    <Switch>
      <Route path="/login"component={LoginPage}/>
    </Switch>
  </BrowserRouter>
);

export default Routes;
