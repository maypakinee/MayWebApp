import React from 'react';
import logo from './logo.svg';
import './App.css';
import LocationDropdown from './components/LocationDropdown';

function App() {

  let provinces = [
    { name: 'Bangkok' ,id: 1 },
    { name: 'Nonthaburi' ,id: 2 }
  ]

  return (
    <div>
      <LocationDropdown locations={provinces}/>
    </div>
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
