import React, { Fragment } from 'react';
import setIcon from '../../utils/setIcon';
import Moment from 'react-moment';

const MainCard = ({ today }) => {
  if (today.dailyForecast === undefined) {
    return (
      <Fragment>
        <h1>No weather Data for today</h1>
      </Fragment>
    );
  } else {
    return (
      <Fragment>
        <img
          src={setIcon(today.dailyForecast.weatherStatus.icon)}
          alt='Cloudy'
          className='heroWeather__icon'
        />
        <h3 className='heroWeather__weatherName text-color black medium'>
          {today.dailyForecast.weatherStatus.description}
        </h3>
        <p className='heroWeather__todayDate text-color light-4'>
          <Moment format='dddd DD MMMM'>{today.date}</Moment>
        </p>
        <h1 className='heroWeather__temperature x-large text-color black'>
          {today.dailyForecast.temperature.maxTemperature}
        </h1>
      </Fragment>
    );
  }
};

export default MainCard;
