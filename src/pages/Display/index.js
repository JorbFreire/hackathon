import React, { useState, useEffect } from 'react';

import HeaderBar from '../../components/HeaderBar';
import AppMemberMenu from '../../components/AppMemberMenu';

import staticIcon from '../../assets/staticIcon.png';
import './styles.css';

const Display = () => {
  const [workersList, setWorkersList] = useState([{}]);

  function findWorkersForThisCompany() {
    setWorkersList([{
      name: "this is my name1",
      learning: 7,
      productivity: 9,
      acuaity: 8,
    },
    {
      name: "this is my name2",
      learning: 7,
      productivity: 9,
      acuaity: 8,
    },
    {
      name: "this is my name3",
      learning: 7,
      productivity: 9,
      acuaity: 8,
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
            <h3>{element.name}</h3>
            <img src={staticIcon} />
            <div className="numbers">
              <p><strong>Satisfação: </strong>{element.learning}</p>
              <p><strong>Produtividade: </strong>{element.productivity}</p>
              <p><strong>Presenças </strong>{element.acuaity}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
} 

export default Display;