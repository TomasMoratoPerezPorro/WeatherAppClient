const fetchDailyForecastData = async (cityId) => {
  const res = await fetch(
    `https://dry-shelf-70670.herokuapp.com/api/weather/daily/city/${cityId}`,
    { mode: 'cors' }
  );
  const data = await res.json();
  return data;
};

export default { fetchDailyForecastData };
