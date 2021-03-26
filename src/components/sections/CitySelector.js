import React from 'react';
import CityPill from '../layout/CityPill';
import { CircularProgress } from '@material-ui/core';

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

const CitySelector = ({ citiesData, loading, onSelect }) => {
  const onClick = (city) => {
    onSelect(city);
  };

  const listItems = citiesData.cities.map((city) => {
    return (
      <CityPill
        key={city._id}
        name={city.name}
        cityId={city._id}
        onClick={onClick}
      />
    );
  });

  return (
    <div className='cities-suggestion'>
      {loading === true ? <CircularProgress /> : listItems}
    </div>
  );
};

export default CitySelector;
