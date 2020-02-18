import React, { useState } from 'react';
import './styles.css';

const Goals = () => {
  const [goalsForThisUser, setGoalsForThisUser] = useState([]);

  function findGoalsForThisUser(userID) {
    console.log("I will find all goals linked with this userID");
  }

  return (
    <ul>
      {goalsForThisUser.map(element => (
        <li> {element /*maybe .name?*/} </li>
      ))}
    </ul>
  );
}

export default Goals;
