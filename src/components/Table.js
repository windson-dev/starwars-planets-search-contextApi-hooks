import React, { useContext } from 'react';
import StarWarsContext from '../contexts/StarWarsContext';

const Table = () => {
  const {
    planets,
    getAPI,
    setName,
    filterByName: { name } } = useContext(StarWarsContext);
  getAPI();

  const handleChange = ({ target }) => {
    setName(target.value);
  };

  const createInput = () => (
    <input
      data-testid="name-filter"
      value={ name }
      onChange={ handleChange }
    />
  );

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
        <tbody>
          {
            planets.filter((element) => (element.name).includes(name))
              .map((element, index) => (
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

  return (
    <div className="main-table">
      {createInput()}
      {createTable()}
    </div>
  );
};

export default Table;
