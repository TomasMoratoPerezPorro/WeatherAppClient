import React, { Fragment } from 'react';
import Separator from '../layout/Separator';
import HourlyCardList from '../layout/HourlyCardList';
import { CircularProgress } from '@material-ui/core';

const HourlyForecast = ({ loading, hourlyForecastData }) => {
  return (
    <Fragment>
      <Separator heading='Today' subheading='Next 24 hours' />
      <div className='area-detailedWeatherView'>
        <div className='detailedWeatherView'>
          {loading === true ? (
            <CircularProgress />
          ) : (
            <HourlyCardList
              halfDayForecast={hourlyForecastData.halfDayForecast}
            />
          )}
        </div>
      </div>
    </Fragment>
  );
};

export default HourlyForecast;
