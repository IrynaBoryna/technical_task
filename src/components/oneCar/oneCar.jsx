import css from './oneCar.module.css';
import { useState } from 'react';
import { Modal } from '../modal/modal';
import { ReactComponent as Vector } from '../icons/Vector 4.svg';
import { ReactComponent as Heart } from '../icons/heart.svg';

export const OneCar = ({
  id,
  img,
  make,
  model,
  year,
  rentalPrice,
  rentalCompany,
  address,
  type,
  mileage,
  accessories,
  functionalities,
  description,
  rentalConditions,
  engineSize,
  onClick,
  favorite,
}) => {
  const [showModal, setShowModal] = useState(false);

  const Address = address.split(' ');
  const country = Address.slice(Address.length - 1, Address.length);
  const City = Address.slice(Address.length - 2, Address.length - 1)[0].split(
    ''
  );
  const city = City.slice(0, City.length - 1).join('');

  const variant = () => {
    return favorite === true ? 'HeartFavor' : 'Heart';
  };

  return (
    <li key={id}>
      <div className={css.card__box}>
        <img src={img} alt="car" className={css.card__img} width="280px" />
        <Heart className={css[variant()]} onClick={onClick} />
        <div className={css.title__box}>
          <div className={css.card__title}>
            <p>{make}</p>
            <p className={css.card__model}>{model}</p>
            <p>,</p>
            <p>{year}</p>
          </div>
          <p>{rentalPrice}</p>
        </div>
        <div className={css.card__info}>
          <p>{city}</p> <Vector />
          <p>{country}</p> <Vector />
          <p>{rentalCompany}</p> <Vector />
          <p>{type}</p> <Vector />
          <p>{model}</p> <Vector />
          <p>{id}</p> <Vector />
          <p>{accessories[2]}</p>
        </div>
        {showModal && (
          <Modal
            id={id}
            img={img}
            make={make}
            model={model}
            year={year}
            rentalPrice={rentalPrice}
            address={address}
            rentalCompany={rentalCompany}
            type={type}
            mileage={mileage}
            accessories={accessories}
            functionalities={functionalities}
            description={description}
            rentalConditions={rentalConditions}
            engineSize={engineSize}
            onClose={() => setShowModal(!showModal)}
          />
        )}
        <button
          className={css.card__button}
          type="button"
          onClick={() => setShowModal(!showModal)}
        >
          Learn more
        </button>
      </div>
    </li>
  );
};
