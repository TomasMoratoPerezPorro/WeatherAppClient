import React from 'react';
import Moment from 'react-moment';

const HourlyCrad = ({ hour, temperature, icon }) => {
  return (
    <div className='detailedWeatherCard'>
      <p className='detailedWeatherCard__hour'>
        <Moment format='HH:mm'>{hour}</Moment>
      </p>
      <img
        className='detailedWeatherCard__icon'
        src={/* `../../assets/weatherIcons/${icon.toString()}.svg` */ icon}
        alt='search'
      />
      <p className='detailedWeatherCard__temperature'>{temperature}</p>
    </div>
  );
};

export default HourlyCrad;
