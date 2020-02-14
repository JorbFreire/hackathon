import React, {useState} from 'react';
import HeaderBar from '../../components/HeaderBar';
import './styles.css';

const RegistrationPage = () => {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [passwordConfirmation, setPasswordConfirmation] = useState();

  function verifyRegistrationInputs() {
    console.log("verifyRegistrationInputs");
  }

  function handleRegistration() {
    console.log("handleRegistration");
    alert(`name = ${name}, email = ${email}, password = ${password}, confirmation = ${passwordConfirmation}`);
  }
  
  return (
    <div id="RegistrationPage">
      <HeaderBar />

      <h2>Cadastre-se enquanto</h2>
      <h2>Empresa ou Empregada</h2>
      
      <button>Empresa</button>
      <button>Empregado</button>

      <form onSubmit={handleRegistration}>
        <label htmlFor="name">Nome</label>
        <input 
          type="text"
          name="name"
          value={name}
          onChange={e => {setName(e.target.value)}}
          required
        />

        <label htmlFor="email">Email</label>
        <input 
          type="text"
          name="email"
          value={email}
          onChange={e => {setEmail(e.target.value)}}
          required
        />

        <label htmlFor="password">Senha</label>
        <input 
          type="password"
          name="password"
          value={password}
          onChange={e => {setPassword(e.target.value)}}
          required
        />

        <label htmlFor="passwordConfimation">Confirmar Senha</label>
        <input 
          type="password"
          name="passwordConfirmation"
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
