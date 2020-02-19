import React, { useState } from 'react';

import AppMemberMenu from '../../components/AppMemberMenu';
import HeaderBar from '../../components/HeaderBar';
import './styles.css';

const Goals = () => {
  const [goalsForThisUser, setGoalsForThisUser] = useState([]);

  function findGoalsForThisUser(userID) {
    console.log("I will find all goals linked with this userID");
  }

  return (
    <>
      <HeaderBar />
      <AppMemberMenu />
      <h2>Metas</h2>
      <ul>
        {goalsForThisUser.map(element => (
          <li> 
            <input 
              type="checkbox"
              name="checkbox"
              id="checkbox"
            />
            <label htmlFor="checkbox"> {element /*maybe .name?*/} </label>
          </li>
        ))}
      </ul>
    </>
  );
}

export default Goals;
