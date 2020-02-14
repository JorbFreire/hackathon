import React from 'react';
import './styles.css';

const LoginPage = () => (
  <div className="page" id="LoginPage">
    <header>
      
    </header>
    <main>
      <div id="LoginCollum">
        <h2> Entre na Sua Conta </h2>
        <form>
          <label htmlFor="UserEmail">Email </label>
          <input type="text" id="UserEmail"/>

          <label htmlFor="UserPassword">Password </label>
          <input type="text" id="UserPassword"/>

          <a href=""> Esqueceu sua senha? </a>
          <button type="submit"> Entrar </button>
        </form>
        <button type="submit"> Logar com o Google </button>
      </div>
      <div id="RegistrationArtCollum">
        <h2>Ainda não possui uma conta? </h2>
        <button>Cadastre-se </button>
        <img src="" alt=""/>
      </div>
    </main>
  </div>
);

export default LoginPage;