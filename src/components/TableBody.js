import React, { useContext } from 'react';
import StarWarsContext from '../contexts/StarWarsContext';

const TableBody = () => {
  const { planets, name, findByNumbers } = useContext(StarWarsContext);

  let filterPlanets = planets.filter((value) => value.name.includes(name));
  findByNumbers.forEach(({ column, comparison, value }) => {
    filterPlanets = filterPlanets.filter((planet) => {
      const TEN = 10;
      if (comparison === 'maior que') return parseFloat(planet[column], TEN) > value;
      if (comparison === 'menor que') return parseFloat(planet[column], TEN) < value;
      if (comparison === 'igual a') return parseFloat(planet[column], TEN) === value;
      return filterPlanets;
    });
  });

  return (
    <tbody>
      { filterPlanets
        .map((value, index) => (
          <tr key={ index }>
            {
              Object.values(value)
                .map((planet) => <td key={ planet }>{planet}</td>)
            }
          </tr>
        ))}
    </tbody>
  );
};

export default TableBody;
