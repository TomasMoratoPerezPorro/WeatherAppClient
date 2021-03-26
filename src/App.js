import './App.css';
import { useState, useEffect } from 'react';
import { Fragment } from 'react';
import DailyWeatherService from './services/DailyWeatherService';
import HourlyWeatherService from './services/HourlyWeatherService';
import SearchCityService from './services/SearchCityService';
import Navbar from './components/layout/Navbar';
import CitySelector from './components/sections/CitySelector';
import MainWeather from './components/sections/MainWeather';
import HourlyForecast from './components/sections/HourlyForecast';
import DailyForecast from './components/sections/DailyForecast';

const defaultCityList = {
  cities: [
    {
      _id: '6058a533e3a0925130bd12ec',
      name: 'Barcelona',
      __v: 0,
    },
    {
      _id: '605ca85ae2df18249c4607dc',
      name: 'Bahamas',
      __v: 0,
    },
  ],
};

function App() {
  const [loadingDailyForecast, setLoadingDailyForecast] = useState(true);
  const [loadingHourlyForecast, setLoadingHourlyForecast] = useState(true);
  const [dailyForecastData, setDailyForecastData] = useState([]);
  const [hourlyForecastData, setHourlyForecastData] = useState([]);
  const [selectedCity, setselectedCity] = useState(defaultCityList.cities[0]);

  const [loadingCityPills, setloadingCityPills] = useState(false);
  const [cityPills, setCityPills] = useState(defaultCityList);

  useEffect(() => {
    const getDailyForecastData = async () => {
      const dailyWeatherFromServer = await DailyWeatherService.fetchDailyForecastData(
        selectedCity._id
      );
      setDailyForecastData(dailyWeatherFromServer);
      setLoadingDailyForecast(false);
    };

    const getHourlyForecastData = async () => {
      const hourlyWeatherFromServer = await HourlyWeatherService.fetchHourlyForecastData(
        selectedCity._id
      );
      setHourlyForecastData(hourlyWeatherFromServer);
      setLoadingHourlyForecast(false);
    };

    getDailyForecastData();
    getHourlyForecastData();
  }, [selectedCity]);

  // Set selectedCity
  const selectCity = async (city) => {
    if (city !== selectedCity) {
      setLoadingHourlyForecast(true);
      setLoadingDailyForecast(true);
      setselectedCity(city);
    }
  };

  // Search City
  const searchCity = async (city) => {
    setloadingCityPills(true);
    let search = city.text;
    const citiesFromServer = await SearchCityService.fetchCitiesData(search);
    setCityPills(citiesFromServer);
    setloadingCityPills(false);
  };

  return (
    <Fragment>
      <Navbar onSearch={searchCity} />
      <CitySelector
        citiesData={cityPills}
        loading={loadingCityPills}
        onSelect={selectCity}
      />
      <div className='container'>
        <MainWeather
          cityName={selectedCity.name}
          loading={loadingDailyForecast}
          dailyForecastData={dailyForecastData}
        />
        <HourlyForecast
          loading={loadingHourlyForecast}
          hourlyForecastData={hourlyForecastData}
        />
        <DailyForecast
          loading={loadingDailyForecast}
          dailyForecastData={dailyForecastData}
        />
      </div>
    </Fragment>
  );
}

export default App;
