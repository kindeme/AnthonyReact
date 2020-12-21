import React from 'react';
import './App.css';
import Employee from './Employee';



function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1> Company Directory</h1>
        <Employee firstName ='Jack' lastName= "Smith"/>
        <Employee firstName ='Stefanie' lastName= "Renne"/>
        <Employee firstName ='Ryan' lastName= "GOGO"/>
        <Employee firstName ='Hillary' lastName= "Kounoudji"/>
       </header>
    </div>
  );
}

export default App;
