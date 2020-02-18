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

import Courses from './pages/Courses';
import Goals from './pages/Goals';

const Routes = () => (
  <BrowserRouter >
    <Switch>
      <Route path="/login"component={LoginPage} />
      <Route path="/registration"component={RegistrationPage} />

      <Route exact path="/display" component={Display} />
      <Route exact path="/display/data" component={UserGeneralData} />

      <Route exact path="/courses" component={Courses} />
      <Route exact path="/goals" component={Goals} />

    </Switch>
  </BrowserRouter>
);

export default Routes;
