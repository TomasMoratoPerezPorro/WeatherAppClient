import React from 'react';

const Separator = ({ heading, subheading }) => {
  return (
    <div className='separator-heading'>
      <h2 className='separator-heading__text heading'>{heading}</h2>
      <h3 className='separator-heading__text subheading'>{subheading}</h3>
    </div>
  );
};

export default Separator;
