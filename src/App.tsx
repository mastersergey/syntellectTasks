import React from 'react';
import './App.css';
import AlertControl from './features/alert-control';
import AutocomplitControl from './features/autocomplit-control/autocomplit-control';
import ClearControl from './features/clear-control';

function App() {
  return (
    <div className='container'>
      <ClearControl />
      <AlertControl />
      <AutocomplitControl maxHints={3} />
      <AutocomplitControl maxHints={10} />
    </div>
  );
}

export default App;
