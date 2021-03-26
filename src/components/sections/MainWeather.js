import { CircularProgress } from '@material-ui/core';
import React, { Fragment } from 'react';
import heroIlustration from '../../assets/ilustration/hiker-man-colour.svg';
import MainCard from '../layout/MainCard';
import Separator from '../layout/Separator';

const MainWeather = ({ loading, dailyForecastData, cityName }) => {
  return (
    <Fragment>
      <Separator heading={cityName} />
      <div className='area-heroWeather'>
        <div className='heroWeather'>
          <div className='heroWeather ilustration'>
            <img
              src={heroIlustration}
              alt='Cloudy'
              className='heroWeather__ilustration'
            />
          </div>

          <div className='heroWeather info'>
            {loading === true ? (
              <CircularProgress />
            ) : (
              <MainCard today={dailyForecastData.WeeklyForecast[0]} />
            )}
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default MainWeather;
