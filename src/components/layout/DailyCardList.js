import React from 'react';
import DailyCard from '../layout/DailyCard';
import setIcon from '../../utils/setIcon';

const DailyCardList = ({ weeklyForecast }) => {
  const listItems = weeklyForecast.map((day) => {
    if (day.dailyForecast) {
      return (
        <DailyCard
          key={day.dailyForecast._id}
          icon={setIcon(day.dailyForecast.weatherStatus.icon)}
          date={day.dailyForecast.date}
          maxTemperature={day.dailyForecast.temperature.maxTemperature}
          minTemperature={day.dailyForecast.temperature.minTemperature}
        />
      );
    } else {
      return (
        <DailyCard
          key={day.date}
          icon={setIcon('error-outline')}
          date={day.date}
          maxTemperature={'No weather Data'}
          minTemperature={''}
        />
      );
    }
  });
  return <div className='weekForecast'>{listItems}</div>;
};

export default DailyCardList;
