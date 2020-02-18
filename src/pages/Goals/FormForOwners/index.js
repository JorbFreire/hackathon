import React, { useState } from 'react';
import 'styles.css';

const FormForOwnersForNewGoals = () => {
  const [goalName, setGoalName] = useState('');
  const [description, setDescription] = useState('');
  const [deadline, setDeadline] = useState();
  const [teamString, setTeamString] = useState('');

  const [teamForThisGoal, setTeamForThisGoal] = useState([]);

  function submitFormTocreateNewGoal() {
    console.log("I shall create yout goal on database");
    console.log("I also transform this teamString into a vector");
    return 0;
  }
  return (
    <div className="FormForOwnersForNewGoals">
      <h2>Adicionar Meta</h2>
      <form action={submitFormTocreateNewGoal}>
        <label htmlFor="goalName">Descrição</label>
        <input 
          type="text"
          name="goalName"
          id="goalName"
          value={goalName}
          onChange={e => setGoalName(e.target.value)}
          required
        />
        
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
          type="date"
          name="deadline"
          id="deadline"
          value={deadline}
          onChange={e => setDeadline(e.target.value)}
          required
        />

        <label htmlFor="teamString">Descrição</label>
        <input 
          type="text"
          name="teamString"
          id="teamString"
          value={teamString}
          onChange={e => setTeamString(e.target.value)}
          required
        />
      </form>
    </div>
  );
}

export default FormForOwnersForNewGoals;
