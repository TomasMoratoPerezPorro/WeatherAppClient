const fetchCitiesData = async (search) => {
  const res = await fetch(
    `https://dry-shelf-70670.herokuapp.com/api/cities/${search}`,
    {
      method: 'GET',
      mode: 'cors',
    }
  );
  const data = await res.json();
  return data;
};

export default { fetchCitiesData };
