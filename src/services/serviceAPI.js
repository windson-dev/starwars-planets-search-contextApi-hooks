const getAPI = 'https://swapi.dev/api/planets';

const REQUEST_API = async () => {
  const response = await fetch(getAPI);
  const data = await response.json();
  return data.results;
};

export default REQUEST_API;
