import React from 'react';
import './App.css';
import Employee from './Employee';



function App() {
  const employeeInfo = [
    {
      firstName: "Jack",
      lastName: "Smith",
      age: "25",
      employeeId: "1"
    },
    {
      firstName: "Stefanie",
      lastName: "Renne",
      age: "30",
      employeeId: "2"
    },
    {
      firstName: "Ryan",
      lastName: "Gogovor",
      age: "01",
      employeeId: "3"
    },
    {
      firstName: "Hillary",
      lastName: "Smith",
      age: "25",
      employeeId: "4"
    }
  ];
  return (
    <div className="App">
      <header className="App-header">
        <h1> Company Directory</h1>
        {employeeInfo.map(employee => {
          
          return (
            <Employee key={employee.employeeId} {...employee} />
          )
      })}

       </header>
    </div>
  );
}

export default App;
