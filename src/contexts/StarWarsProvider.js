import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import StarWarsContext from './StarWarsContext';
import REQUEST_API from '../services/serviceAPI';

function StarWarsProvider({ children }) {
  const [planets, setPlanets] = useState([]);
  const [name, setName] = useState('');
  const [findByNumbers, setFindByNumbers] = useState([]);

  useEffect(() => {
    try {
      REQUEST_API().then((allPlantes) => {
        allPlantes.forEach((element) => delete element.residents);
        setPlanets(allPlantes);
      });
    } catch (e) {
      console.log(e.message);
    }
  }, []);

  const contextStarWars = {
    planets,
    name,
    findByNumbers,
    setName,
    setFindByNumbers,
  };

  return (
    <StarWarsContext.Provider value={ contextStarWars }>
      { children }
    </StarWarsContext.Provider>
  );
}

StarWarsProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default StarWarsProvider;
