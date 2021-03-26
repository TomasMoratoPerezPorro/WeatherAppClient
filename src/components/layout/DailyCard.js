import React from 'react';
import Moment from 'react-moment';

const DailyCard = ({ icon, date, maxTemperature, minTemperature }) => {
  return (
    <div className='weekForecastCard'>
      <img className='weekForecastCard__icon' src={icon} alt='search' />
      <h3 className='weekForecastCard__date'>
        <Moment format='dddd DD MMMM'>{date}</Moment>
      </h3>
      <div className='weekForecastCard-temperature'>
        <p className='weekForecastCard-temperature__min'>{maxTemperature}</p>
        <p className='weekForecastCard-temperature__max'>{minTemperature}</p>
      </div>
    </div>
  );
};

export default DailyCard;
