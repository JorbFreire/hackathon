import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css'

const AppMemberMenu = () => (
  <>
    <menu className="memberNavigation">
      <Link to="/display">Display</Link>
      <Link to="/courses">Treinamento</Link>
      <Link to="/goals">Metas</Link>
    </menu>
  </>
);

export default AppMemberMenu;