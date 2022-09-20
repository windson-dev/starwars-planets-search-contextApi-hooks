import React, { useState } from 'react';
import PropTypes from 'prop-types';
import StarWarsContext from './StarWarsContext';
import REQUEST_API from '../services/serviceAPI';

function StarWarsProvider({ children }) {
  const [planets, setPlanets] = useState([]);

  const getAPI = async () => {
    try {
      await REQUEST_API().then((allPlantes) => {
        allPlantes.forEach((element) => delete element.residents);
        setPlanets(allPlantes);
      });
    } catch (e) {
      console.log(e.message);
    }
  };

  const contextStarWars = {
    planets,
    getAPI,
  };

  return (
    <StarWarsContext.Provider value={ contextStarWars }>
      {children}
    </StarWarsContext.Provider>
  );
}

StarWarsProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default StarWarsProvider;
