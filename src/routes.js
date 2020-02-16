import React from 'react';

import {
  BrowserRouter,
  Switch,
  Route,
} from "react-router-dom";

import LoginPage from './pages/LoginPage';
import RegistrationPage from './pages/RegistrationPage';
import Display from './pages/Display';  //use company_ID
import UserGeneralData from './pages/UserGeneralData';  //use user_ID

const Routes = () => (
  <BrowserRouter >
    <Switch>
      <Route path="/login"component={LoginPage} />
      <Route path="/registration"component={RegistrationPage} />
      <Route exact path="/display" component={Display} />
      <Route exact path="/display/data" component={UserGeneralData} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
