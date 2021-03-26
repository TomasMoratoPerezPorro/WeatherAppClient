import React from 'react';
import { useState, useEffect } from 'react';
import searchIcon from '../../assets/icons/search.svg';

const Navbar = ({ onSearch }) => {
  const [text, setText] = useState('');
  const [timer, setTimer] = useState(undefined);

  const onSubmit = (e) => {
    e.preventDefault();
    if (!text) {
      alert('Please add some text');
      return;
    }

    onSearch({ text });
  };

  useEffect(() => {
    if (timer) {
      clearTimeout(timer);
    }
    setTimer(
      setTimeout(() => {
        if (text.length > 0) {
          onSearch({ text });
        }
      }, 1000)
    );
  }, [text]);

  const changeText = (e) => {
    setText(e.target.value);
  };

  return (
    <header className='header'>
      <nav className='area-topBar'>
        <a href='' className='logo-text'>
          International Weather
        </a>
        <form onSubmit={onSubmit} className='searchBar'>
          <input
            type='text'
            className='searchBar__input'
            placeholder='Busca Tu Ciudad...'
            value={text}
            onChange={changeText}
          />
          <button type='submit' className='searchBar__button'>
            <img className='searchBar__icon' src={searchIcon} alt='search' />
          </button>
        </form>
      </nav>
    </header>
  );
};

export default Navbar;
