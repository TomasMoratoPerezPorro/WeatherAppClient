import React from 'react';

const CityPill = ({ name, onClick, cityId }) => {
  const onSend = (e) => {
    e.preventDefault();
    const city = {
      _id: cityId,
      name: name,
    };
    onClick(city);
  };

  return (
    <button className='cities-suggestion__item' onClick={onSend}>
      <p>{name}</p>
    </button>
  );
};

export default CityPill;
