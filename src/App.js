import React from 'react';
import './App.css';
import Home from './component/Home';
import ExpenseState from './context/ExpenseState';

const App = () => {
  return (
    <ExpenseState>
      <div className="App">
        <Home />
      </div>
    </ExpenseState>
  );
}

export default App;
