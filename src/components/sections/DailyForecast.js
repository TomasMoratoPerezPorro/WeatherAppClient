import React, { Fragment } from 'react';
import { CircularProgress } from '@material-ui/core';
import DailyCardList from '../layout/DailyCardList';
import Separator from '../layout/Separator';

const DailyForecast = ({ loading, dailyForecastData }) => {
  return (
    <Fragment>
      <Separator heading='This Week' subheading='7 days prediction' />
      <div className='area-weekForecast'>
        {loading === true ? (
          <CircularProgress />
        ) : (
          <DailyCardList weeklyForecast={dailyForecastData.WeeklyForecast} />
        )}
      </div>
    </Fragment>
  );
};

export default DailyForecast;
