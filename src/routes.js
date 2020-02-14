import React from 'react';

import {
  BrowserRouter,
  Switch,
  Route,
} from "react-router-dom";

import LoginPage from './pages/LoginPage';
import RegistrationPage from './pages/RegistrationPage';

const Routes = () => (
  <BrowserRouter >
    <Switch>
      <Route path="/login"component={LoginPage}/>
      <Route path="/registration"component={RegistrationPage}/>
    </Switch>
  </BrowserRouter>
);

export default Routes;
