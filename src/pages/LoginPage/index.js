import React, {useState} from 'react';
import { Link } from 'react-router-dom';

import api from '../../services/api';

import './styles.css';
import HeaderBar from '../../components/HeaderBar';
import LoginScreenArt1 from '../../assets/LoginScreenArt1.png'

const LoginPage = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  async function handleLogin(event){
    let sessionStatus;
    try {
      sessionStatus = await api.post('/sessions', {
        email,
        password
      });
    } catch (error) {
      event.preventDefault();// e msg de erro dependendo da resposta da api
      alert(error);
    }
    console.log(sessionStatus);
  }

  return (
    <div className="page" id="LoginPage">
      <HeaderBar />
      <main>
        <div id="LoginCollum">
          <h2> Entre na Sua Conta </h2>
          <form onSubmit={handleLogin}>

            <label htmlFor="email">Email </label>
            <input
              type="email"
              name="email"
              id="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              required
            />
  
            <label htmlFor="password">Password </label>
            <input
              type="password"
              name="password"
              id="password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              required
            />
  
            <Link to="/recuperar-senha"> Esqueceu sua senha? </Link>
            <button type="submit"> Entrar </button>
          </form>
          <button type="submit"> Logar com o Google </button>
        </div>
        <div id="RegistrationArtCollum">
          <h2>Ainda não possui uma conta? </h2>
          <button>Cadastre-se </button>
          <img src={ LoginScreenArt1 } alt=""/>
        </div>
      </main>
    </div>
  );
}

export default LoginPage;