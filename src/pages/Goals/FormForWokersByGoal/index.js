import React, { useState } from 'react';
import 'styles.css';

const FormForWokersByGoal = () => {
  const [team, setTeam] = useState([]);

  //form inputs
  const [description, setDescription] = useState('');
  const [deadline, setDeadline] = useState('');
  const [checklist, setChecklist] = useState('');
      //não é de fato uma checklist, é so um bloco de texto
          //com as tarefas requisitadas dentro daquela meta
  
  function findTeamMembers() {
    console.log("I find your teammates");
    return 0;
  }
  
  function handleGoalConclusion() {
    console.log("I handle your gols");
    return 0;
  }
  
  return (
    <div className="FormForWorkersByGoal">
      <h2>Entregar o projeto no prazo</h2>
      <form action={handleGoalConclusion}>
        <label htmlFor="description">Descrição</label>
        <input 
          type="text"
          name="description"
          id="description"
          value={description}
          onChange={e => setDescription(e.target.value)}
          required
        />

        <label htmlFor="deadline">Descrição</label>
        <input 
          type="text"
          name="deadline"
          id="deadline"
          value={deadline}
          onChange={e => setDeadline(e.target.value)}
          required
        />

        <label htmlFor="checklist">Descrição</label>
        <input 
          type="text"
          name="checklist"
          id="checklist"
          value={checklist}
          onChange={e => setChecklist(e.target.value)}
          required
        />

        <button type="submit"></button>

        <div className="teamForThisGoal">
          <p>Equipe ({team.length()}) </p>
          {team.map(element => (
            <div className="team-member">
              <img src="" alt=""/>
              <p>{element.name}</p>
              <p>meu cargo</p>
            </div>
          ))}
        </div>
      </form>
    </div>
  );
}

export default FormForWokersByGoal;
