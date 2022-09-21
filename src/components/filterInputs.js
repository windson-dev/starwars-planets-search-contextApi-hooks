import React, { useContext, useState } from 'react';
import StarWarsContext from '../contexts/StarWarsContext';

const FilterInputs = () => {
  const {
    findByNumbers,
    setFindByNumbers,
    setName,
    name,
  } = useContext(StarWarsContext);
  const [value1, setValue] = useState('0');
  const [column1, setColumn] = useState('population');
  const [comparison1, setComparison] = useState('maior que');

  const comparisons = ['maior que', 'menor que', 'igual a'];

  const getPrevState = () => {
    const TEN = 10;
    setFindByNumbers((prevState) => [
      ...prevState,
      { value: parseFloat(value1, TEN),
        column: column1,
        comparison: comparison1 },
    ]);
  };

  const deleteRepeatFilters = (element) => {
    let value = false;
    findByNumbers.forEach((findElement) => {
      if (findElement.column === element) value = true;
    });
    return value;
  };

  const removeFilter = (remove) => {
    setFindByNumbers((prevState) => prevState.filter((element) => element !== remove));
  };

  const removeAllFilters = () => {
    setFindByNumbers([]);
  };

  const createButtonDeleteFilters = () => (
    <>
      {findByNumbers.map((element, index) => (
        <p
          key={ index }
          data-testid="filter"
        >
          {element.column}
          <button
            type="button"
            onClick={ () => removeFilter(element) }
          >
            Remover filtro
          </button>
        </p>
      ))}
      <button
        type="button"
        data-testid="button-remove-filters"
        onClick={ removeAllFilters }
      >
        Remover todos os filtros
      </button>
    </>
  );

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
      <label htmlFor={ value1 }>
        Numero:
        <input
          data-testid="value-filter"
          value={ value1 }
          onChange={ ({ target: { value: valueNumber } }) => setValue(valueNumber) }
        />
      </label>
      <select
        data-testid="column-filter"
        onChange={ ({ target: { value: valueColumn } }) => setColumn(valueColumn) }
      >
        {
          deleteRepeatFilters('population')
            ? ''
            : <option value="population">population</option>
        }
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
        onClick={ getPrevState }
      >
        Filtrar
      </button>
      {createButtonDeleteFilters()}
    </>
  );
};

export default FilterInputs;
