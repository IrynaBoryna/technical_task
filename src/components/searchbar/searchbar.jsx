import { useState } from 'react';
import css from '../searchbar/searchbar.module.css';
import { price, options } from '../options';
import { nanoid } from 'nanoid';

export const Seachbar = ({ onSubmit }) => {
  const [queryBrand, setQueryBrand] = useState('');
  const [queryPrice, setQueryPrice] = useState('');
  const [queryMileFrom, setQueryMileFrom] = useState('');
  const [queryMileTo, setQueryMileTo] = useState('');

  const handleInputChange = evt => {
    const { name, value } = evt.target;
    switch (name) {
      case 'queryBrand':
        setQueryBrand(value);
        break;
      case 'queryMileFrom':
        setQueryMileFrom(value);
        break;
      case 'queryPrice':
        setQueryPrice(value);
        break;
      case 'queryMileTo':
        setQueryMileTo(value);
        break;
      default:
        return;
    }
  };
  const handleInputSubmit = evt => {
    evt.preventDefault();
    if (
      queryBrand.trim() === '' &&
      queryPrice.trim() === '' &&
      queryMileFrom.trim() === ''
    ) {
      return alert('Enter your request');
    }

    onSubmit({ queryBrand, queryPrice, queryMileFrom, queryMileTo });
    setQueryBrand('');
    setQueryPrice('');
    setQueryMileFrom('');
    setQueryMileTo('');
  };

  return (
    <form className={css.SearchForm} onSubmit={handleInputSubmit}>
      <label className={css.label}>
        Card brand
        <input
          className={css.input__brand}
          list="options"
          placeholder="Enter the text"
          name="queryBrand"
          value={queryBrand}
          onChange={handleInputChange}
        />
        <datalist id="options" className={css.input__brandData}>
          {options.map(op => (
            <option key={nanoid()}>{op}</option>
          ))}
        </datalist>
      </label>
      <label className={css.label}>
        Price/1hour
        <input
          className={css.input__price}
          list="price"
          placeholder="$"
          name="queryPrice"
          value={queryPrice}
          onChange={handleInputChange}
        />
        <datalist id="price">
          {price.map(price => (
            <option key={nanoid()}>{price}</option>
          ))}
        </datalist>
        <span className={css.span__input}>To</span>
      </label>
      <label className={css.label}>
        Car mileage/km
        <div className={css.box__mile}>
          <input
            className={css.input__mileFrom}
            type="number"
            name="queryMileFrom"
            inputmode="numeric"
            pattern="^[0-9]*[.,][0-9]+$"
            value={queryMileFrom}
            onChange={handleInputChange}
          />
          <span className={css.span__input}>From</span>
          <div className={css.label}>
            <input
              className={css.input__mileTo}
              type="number"
              name="queryMileTo"
              pattern="^[0-9]*[.,][0-9]+$"
              value={queryMileTo}
              onChange={handleInputChange}
            />
            <span className={css.span__input}>To</span>
          </div>
        </div>
      </label>
      <button type="submit" className={css.button}>
        <span> Search</span>
      </button>
    </form>
  );
};

export default Seachbar;

