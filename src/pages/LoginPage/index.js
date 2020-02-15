import React from 'react';
import { Link } from 'react-router-dom';

import './styles.css';
import HeaderBar from '../../components/HeaderBar';
import LoginScreamArt1 from '../../assets/LoginScreamArt1.png'

const LoginPage = () => (
  <div className="page" id="LoginPage">
    <HeaderBar />
    <main>
      <div id="LoginCollum">
        <h2> Entre na Sua Conta </h2>
        <form>
          <label htmlFor="UserEmail">Email </label>
          <input type="text" id="UserEmail"/>

          <label htmlFor="UserPassword">Password </label>
          <input type="text" id="UserPassword"/>

          <Link to="/recuperar-senha"> Esqueceu sua senha? </Link>
          <button type="submit"> Entrar </button>
        </form>
        <button type="submit"> Logar com o Google </button>
      </div>
      <div id="RegistrationArtCollum">
        <h2>Ainda não possui uma conta? </h2>
        <button>Cadastre-se </button>
        <img src={LoginScreamArt1} alt=""/>
      </div>
    </main>
  </div>
);

export default LoginPage;