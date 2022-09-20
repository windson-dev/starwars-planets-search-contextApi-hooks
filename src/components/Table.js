import React, { useContext } from 'react';
import StarWarsContext from '../contexts/StarWarsContext';

const Table = () => {
  const { planets, getAPI } = useContext(StarWarsContext);
  getAPI();
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
      <tbody>
        {
          planets.map((element, index) => (
            <tr key={ index }>
              {
                Object.values(element)
                  .map((valueTable) => <td key={ valueTable }>{valueTable}</td>)
              }
            </tr>
          ))
        }
      </tbody>
    </table>
  );
};

export default Table;
