import React, {useState} from 'react';
import { Link } from 'react-router-dom';

import api from '../../services/api';

import HeaderBar from '../../components/HeaderBar';
import LoginScreenArt1 from '../../assets/LoginScreenArt1.png'

import './loginBlock.css'
import './registrationBlock.css'
import './styles.css';

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
          <div className="form-box">

            <form onSubmit={handleLogin}>
              <h2> Entre na Sua Conta </h2>

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
          </div>
        </div>
        <div id="RegistrationArtCollum">
          <div className="action">
            <h2>Ainda não possui uma conta? </h2>
            <button>Cadastre-se </button>
          </div>
          <div id="artBlock">
            <img src={ LoginScreenArt1 } alt=""/>
          </div>
        </div>
      </main>
    </div>
  );
}

export default LoginPage;