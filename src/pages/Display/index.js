import React, { useState, useEffect } from 'react';

import HeaderBar from '../../components/HeaderBar';
import AppMemberMenu from '../../components/AppMemberMenu';
import './styles.css';

const Display = () => {
  const [workersList, setWorkersList] = useState([{}]);

  function findWorkersForThisCompany() {
    setWorkersList([{
      name: "this is my name1",
      learning: "this is how much I learned",
      productivity: "this is how much I work",
      acuaity: "this is how much time I speend on work",
    },
    {
      name: "this is my name2",
      learning: "this is how much I learned",
      productivity: "this is how much I work",
      acuaity: "this is how much time I speend on work",
    },
    {
      name: "this is my name3",
      learning: "this is how much I learned",
      productivity: "this is how much I work",
      acuaity: "this is how much time I speend on work",
    },]);
    console.log(workersList);

  }

  useEffect( () => {
    findWorkersForThisCompany();
  }, []);

  return (
    <>
      <HeaderBar />
      <AppMemberMenu />
      <div className="usersList">
        {workersList.map(element => (
          <div className="user">
            <h2>{element.name}</h2>
            <h4>{element.learning}</h4>
            <h4>{element.productivity}</h4>
            <h4>{element.acuaity}</h4>
          </div>
        ))}
      </div>
    </>
  );
} 

export default Display;