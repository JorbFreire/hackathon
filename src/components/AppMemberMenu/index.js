import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css'

const AppMemberMenu = () => (
  <>
    <menu>
      <Link to="/display">Display</Link>
      <Link to="/courses">Treinamento</Link>
      <Link to="/goals">Perguntas</Link>
    </menu>
  </>
);

export default AppMemberMenu;