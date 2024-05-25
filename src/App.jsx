import React, { useState } from 'react';
import './App.css';

function App() {
  const initialStudentsByDepartment = {
    Mathematics: [
      { name: 'Alice', grade: 'A' },
      { name: 'Bob', grade: 'B' },
      { name: 'Charlie', grade: 'C' },
    ],
    Physics: [
      { name: 'David', grade: 'A' },
      { name: 'Eva', grade: 'B' },
      { name: 'Frank', grade: 'C' },
    ],
    Chemistry: [
      { name: 'Grace', grade: 'A' },
      { name: 'Henry', grade: 'B' },
      { name: 'Ivy', grade: 'C' },
    ],
  };

  const [studentsByDepartment, setStudentsByDepartment] = useState(initialStudentsByDepartment);
  const [newStudentName, setNewStudentName] = useState('');
  const [newStudentGrade, setNewStudentGrade] = useState('A');

  const addStudent = (department) => {
    if (!newStudentName) {
      alert('Please enter the name of the new student.');
      return;
    }

    const newStudent = { name: newStudentName, grade: newStudentGrade };
    const updatedStudents = { ...studentsByDepartment };
    updatedStudents[department] = [...updatedStudents[department], newStudent];
    setStudentsByDepartment(updatedStudents);
    setNewStudentName('');
    setNewStudentGrade('A');
  };

  return (
    <>
      <h1>Students by Department</h1>
      {Object.entries(studentsByDepartment).map(([department, students]) => (
        <div key={department}>
          <h2>{department}</h2>
          <input
            type="text"
            placeholder="Name"
            value={newStudentName}
            onChange={(e) => setNewStudentName(e.target.value)}
          />
          <select value={newStudentGrade} onChange={(e) => setNewStudentGrade(e.target.value)}>
            <option value="A">A</option>
            <option value="B">B</option>
            <option value="C">C</option>
          </select>
          <button onClick={() => addStudent(department)}>Add Student</button>
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Grade</th>
              </tr>
            </thead>
            <tbody>
              {students.map((student, index) => (
                <tr key={index}>
                  <td>{student.name}</td>
                  <td>{student.grade}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ))}
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
