import React, {useState} from 'react';
import './styles.css';

const Courses = () => {
  const [coursesList, setCoursesList] = useState([]);
  return (
    <div className="TrainingPage">
      <div className="listBlock">
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
