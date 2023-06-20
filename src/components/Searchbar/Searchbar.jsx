import { useState } from 'react';
import PropTypes from 'prop-types';
import css from './Searchbar.module.css';

export const Searchbar = ({ onSubmit, resetPage }) => {
  const [value, setValue] = useState('');
  const [isSubmitBlock, setIsSubmitBlock] = useState(true);

  const handleChange = e => {
    const { value } = e.target;
    setValue(value);
    setIsSubmitBlock(false);
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (isSubmitBlock) return;
    
    onSubmit(value);
    resetPage();
    setIsSubmitBlock(true);
  };

  return (
    <header className={css.Searchbar}>
      <form className={css.SearchForm} onSubmit={handleSubmit}>
        <input
          className={css.SearchFormInput}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          onChange={handleChange}
        />
        <button type="submit" className={css.SearchFormButton}>
          Search
        </button>
      </form>
    </header>
  );
};

Searchbar.propTypes = {
  onSubmit: PropTypes.func,
  resetPage: PropTypes.func,
};
