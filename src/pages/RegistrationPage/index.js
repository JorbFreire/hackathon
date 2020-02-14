import React from 'react';
import HeaderBar from '../../components/HeaderBar';
import './styles.css';

const RegistrationPage = () => (
  <div id="RegistrationPage">
    <HeaderBar />

    <h2>Cadastre-se enquanto</h2>
    <h2>Empresa ou Empregada</h2>
    <button>Empresa</button>
    <button>Empregado</button>

    <form action="registration">
      <label htmlFor="name">Nome</label>
      <input type="text"/>

      <label htmlFor="email">Email</label>
      <input type="text"/>

      <label htmlFor="password">Senha</label>
      <input type="text"/>

      <label htmlFor="password-confimation">Senha</label>
      <input type="text"/>

      <button type="submit">Cadastre-se</button>
    </form>
  </div>
);

export default RegistrationPage;