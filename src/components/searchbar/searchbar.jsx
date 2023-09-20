import { useState } from 'react';
import css from '../searchbar/searchbar.module.css';


const options = [
  'Buick',
  'Volvo',
  'HUMMER',
  'Subaru',
  'Mitsubishi',
  'Nissan',
  'Lincoln',
  'GMC',
  'Hyundai',
  'MINI',
  'Bentley',
  'Mercedes-Benz',
  'Aston Martin',
  'Pontiac',
  'Lamborghini',
  'Audi',
  'BMW',
  'Chevrolet',
  'Mercedes-Benz',
  'Chrysler',
  'Kia',
  'Land'
];
const price = ['10', '20', '30', '40','50','60','70','80','90','100','110','120','130','140','150','160','170','180'];
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

    console.log(queryPrice);
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
          // type="text"
          placeholder="Enter the text"
          name="queryBrand"
          value={queryBrand}
          onChange={handleInputChange}
        />
        <datalist id="options">
          {options.map(op => (
            <option>{op}</option>
          ))}
        </datalist>
      </label>
      <label className={css.label}>
        Price/1hour
        <input
          className={css.input__price}
          list="price"
          // type="text"
          placeholder="$"
          name="queryPrice"
          value={queryPrice}
          onChange={handleInputChange}
        />
        <datalist id="price">
          {price.map(price => (
            <option>{price}</option>
          ))}
        </datalist>
        {/* <span className={css.span__input}>To $</span> */}
       
          {/* renderValue={() => (
            <span>
              <strong>To</strong>
              {' ' + queryPrice}
              <strong>$</strong>
            </span>
          )} */}
      </label>
      <label className={css.label}>
        Car mileage/km
        <div className={css.box__mile}>
          <input
            className={css.input__mileFrom}
            type="number"
            name="queryMileFrom"
            inputmode="numeric"
            pattern="\d"
            value={queryMileFrom}
            onChange={handleInputChange}
            // rendervalue={() => (
            //   <span>
            //     <strong>From</strong>
            //     {' ' + queryMileFrom / 1000}
            //   </span>
            // )}
          />
          <span className={css.span__input}>From</span>
          <div className={css.label}>
            <input
              className={css.input__mileTo}
              type="number"
              name="queryMileTo"
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

// Seachbar.prototype = {
//   query: PropTypes.string,
// };
