import React from 'react';
import TableHead from './components/TableHead';
import FilterInputs from './components/filterInputs';
import StarWarsProvider from './contexts/StarWarsProvider';
import './App.css';

function App() {
  return (
    <StarWarsProvider>
      <FilterInputs />
      <TableHead />
    </StarWarsProvider>
  );
}

export default App;
