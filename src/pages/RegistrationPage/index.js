import React, { useState } from 'react';

import api from '../../services/api';
import HeaderBar from '../../components/HeaderBar';
import './styles.css';

const RegistrationPage = () => {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [passwordConfirmation, setPasswordConfirmation] = useState();

  const [is_owner, setIs_owner] = useState();

  async function handleRegistration(event) {
    alert("alerta");
    if (password === passwordConfirmation) {
      event.preventDefault();
      const apiResponse = await api.post("/users", {
        name,
        email,
        password,
        is_owner
      });
      console.log(apiResponse);
    }
    else {
      alert("Senhas diferentes");
      event.preventDefault();
    }
  }
  
  return (
    <div id="RegistrationPage">
      <HeaderBar />

      <button onClick={ handleRegistration }> debug API </button>

      <h2>Cadastre-se enquanto</h2>
      <h2>Empresa ou Empregado</h2>
      
      <form onSubmit={ handleRegistration }>
        <div className="switch">
          <label >
            Empresa
            <input 
              type="radio"
              name="is_owner" 
              value="true"
              onChange={e => {setIs_owner(true)}}
              checked={is_owner === true}
            />
          </label>

          <label >
            Empregado
            <input
              type="radio"
              name="is_owner"
              value="false"
              onChange={e => {setIs_owner(false)}}
              checked={is_owner === false}
            />
          </label>
        </div>

        <label htmlFor="name">Nome</label>
        <input 
          type="text"
          name="name"
          id="name"
          value={name}
          onChange={e => {setName(e.target.value)}}
          required
        />

        <label htmlFor="email">Email</label>
        <input 
          type="email"
          name="email"
          id="email"
          value={email}
          onChange={e => {setEmail(e.target.value)}}
          required
        />

        <label htmlFor="password">Senha</label>
        <input 
          type="password"
          name="password"
          id="password"
          value={password}
          onChange={e => {setPassword(e.target.value)}}
          required
        />

        <label htmlFor="passwordConfimation">Confirmar Senha</label>
        <input 
          type="password"
          name="passwordConfirmation"
          id="passwordConfirmation"
          value={passwordConfirmation}
          onChange={e => {setPasswordConfirmation(e.target.value)}}
          required
        />

        <button type="submit">Cadastre-se</button>
      </form>
    </div>
  )
};

export default RegistrationPage;
