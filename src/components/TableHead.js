import React, { useContext } from 'react';
import StarWarsContext from '../contexts/StarWarsContext';
import TableBody from './TableBody';

const TableHead = () => {
  const { planets } = useContext(StarWarsContext);

  const createTable = () => {
    const keyNameTable = planets[0] || [];
    return (
      <table>
        <thead>
          <tr>
            {
              Object.keys(keyNameTable)
                .map((nameTable, index) => <th key={ index }>{nameTable}</th>)
            }
          </tr>
        </thead>
        <TableBody />
      </table>
    );
  };

  return (
    <div className="main-table">
      { createTable() }
    </div>
  );
};

export default TableHead;
