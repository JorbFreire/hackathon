import React, { useState, useEffect } from 'react';

import HeaderBar from '../../components/HeaderBar';
import AppMemberMenu from '../../components/AppMemberMenu';
import './styles.css';

const Courses = () => {
  const [coursesList, setCoursesList] = useState([]);

  function findCoursesForThisWorker() {
    setCoursesList([
      "Curso de Marketing | Coursera",
      "Curso de Pitch | edX",
      "Curso de Excel | Sebrae"
    ]);
  }

  useEffect(() => {
    findCoursesForThisWorker();
  },[]);

  return (
    <div className="TrainingPage">
      <div className="listBlock">
        <HeaderBar />
        <AppMemberMenu />
        <h2>Cursos</h2>
        <ul>
          <li></li>
          {coursesList.map(element => (
            <div className="course">
              <p>{element}</p>
            </div>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Courses;
