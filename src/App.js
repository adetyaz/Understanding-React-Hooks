import React from 'react';
import logo from './logo.svg';
import './App.css';
// import Button from './components/button';
// import RenderData from './components/renderData';
import UserForm from './components/UserForm'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* <Button />
        <RenderData /> */}
        <UserForm />
      </header>
    </div>
  );
}

export default App;
