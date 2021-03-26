import React from 'react';
import HourlyCrad from './HourlyCrad';
import setIcon from '../../utils/setIcon';

const HourlyCardList = ({ halfDayForecast }) => {
  const listItems = halfDayForecast.map((day) => {
    if (day.hourlyForecast) {
      return (
        <HourlyCrad
          key={day.hourlyForecast._id}
          hour={day.hourlyForecast.startDateTime}
          temperature={day.hourlyForecast.temperature}
          icon={setIcon(day.hourlyForecast.weatherStatus.icon)}
        />
      );
    } else {
      return (
        <HourlyCrad
          key={day.date}
          hour={day.date}
          temperature={'No weather Data'}
          icon={setIcon('error-outline')}
        />
      );
    }
  });
  return <div className='detailedWeatherView__row'>{listItems}</div>;
};

export default HourlyCardList;
