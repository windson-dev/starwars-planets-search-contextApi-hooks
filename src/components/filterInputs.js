import React, { useContext, useState } from 'react';
import StarWarsContext from '../contexts/StarWarsContext';

const FilterInputs = () => {
  const {
    setFindByNumbers,
    setName,
    name,
  } = useContext(StarWarsContext);

  const comparisons = [
    'maior que', 'menor que', 'igual a'];

  const TEN = 10;

  const [value, setValue] = useState('0');
  const [column, setColumn] = useState('population');
  const [comparison, setComparison] = useState('maior que');

  return (
    <>
      <label htmlFor={ name }>
        Planeta:
        <input
          data-testid="name-filter"
          value={ name }
          onChange={ ({ target: { value: nameValue } }) => setName(nameValue) }
        />
      </label>
      <label htmlFor={ value }>
        Numero:
        <input
          data-testid="value-filter"
          value={ value }
          onChange={ ({ target: { value: valueNumber } }) => setValue(valueNumber) }
        />
      </label>
      <select
        data-testid="column-filter"
        onChange={ ({ target: { value: valueColumn } }) => setColumn(valueColumn) }
      >
        <option value="population">population</option>
        <option value="orbital_period">orbital_period</option>
        <option value="diameter">diameter</option>
        <option value="rotation_period">rotation_period</option>
        <option value="surface_water">surface_water</option>
      </select>

      <select
        data-testid="comparison-filter"
        onChange={ ({
          target: { value: valueComparasion } }) => setComparison(valueComparasion) }
      >
        {comparisons.map((element) => (
          <option value={ element } key={ element }>{element}</option>
        ))}
      </select>

      <button
        type="button"
        data-testid="button-filter"
        onClick={ () => setFindByNumbers([
          { value: parseFloat(value, TEN), column, comparison }]) }
      >
        Filtrar
      </button>
    </>
  );
};

export default FilterInputs;
