import { useEffect } from 'react';
import css from './modal.module.css';
import { ReactComponent as Vector } from '../icons/Vector 4.svg';
import { ReactComponent as Close } from '../icons/x.svg';

export const Modal = ({
  onClose,
  id,
  img,
  make,
  model,
  year,
  rentalPrice,
  address,
  type,
  mileage,
  accessories,
  functionalities,
  fuelConsumption,
  description,
  rentalConditions,
  engineSize,
}) => {
  useEffect(() => {
    const handleKeyDown = evt => {
      if (evt.code === 'Escape') {
        onClose();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  const handleKeyDown = evt => {
    if (evt.code === 'Escape') {
      onClose();
    }
  };

  const handleBackdropClick = evt => {
    if (evt.currentTarget === evt.target) {
      onClose();
    }
  };
  const Address = address.split(' ');
  const country = Address.slice(Address.length - 1, Address.length);
  const City = Address.slice(Address.length - 2, Address.length - 1)[0].split(
    ''
  );
  const city = City.slice(0, City.length - 1).join('');

  const MinimumEge = rentalConditions.slice(
    rentalConditions.indexOf(':') + 1,
    rentalConditions.indexOf('\n')
  );
  const options = rentalConditions.slice(
    rentalConditions.indexOf('\n') + 1,
    rentalConditions.length
  );
  const partTwo = options.slice(0, options.indexOf('\n'));
  const partTree = options.slice(options.indexOf('\n') + 1, options.length);

  return (
    <div className={css.Overlay} onClick={handleBackdropClick}>
      <div className={css.Modal} onClick={handleKeyDown}>
        <button className={css.modal__close} type="button">
          <Close onClick={() => onClose()} />
        </button>
        <img src={img} className={css.modal__img} alt="car" width="489px" />
        <div className={css.card__title}>
          <span>{make}</span>
          <span className={css.card__model}>
            {model}
            <span>,</span>
          </span>
          <span>{year}</span>
        </div>
        <div className={css.card__info}>
          <p>{city}</p>
          <Vector />
          <p>{country}</p>
          <Vector />
          <p>id: {id}</p>
          <Vector />
          <p>Year: {year}</p>
          <Vector />
          <p>Type: {type}</p>
          <Vector />
          <p>Fuel Consumption:{fuelConsumption}</p>
          <Vector />
          <p>Engine Size:{engineSize}</p>
          <p className={css.details__title}>{description}</p>
        </div>

        <p className={css.details__title}>Accessories and functionalities:</p>
        <div className={css.details__accessories}>
          <p>{accessories[0]}</p> <Vector />
          <p>{accessories[1]}</p> <Vector />
          <p>{accessories[2]}</p>
        </div>
        <div className={css.details__accessories}>
          <p>{functionalities[0]}</p> <Vector />
          <p>{functionalities[1]}</p> <Vector />
          <p>{functionalities[2]}</p>
        </div>

        <p className={css.details__title}> Pental Conditions:</p>
        <div className={css.details__box}>
          <p className={css.details__numberTitle}>
            Minimum ege:
            <span className={css.details__number}>{MinimumEge}</span>
          </p>
          <p className={css.details}>{partTwo}</p>
          <p className={css.details}>{partTree}</p>
          <p className={css.details__numberTitle}>
            Mileage:
            <span className={css.details__number}>{mileage / 1000}</span>
          </p>
          <p className={css.details__numberTitle}>
            Price: <span className={css.details__number}>{rentalPrice}</span>
          </p>
        </div>

        <a className={css.button__link} href="tel:+380730000000">
          <span>Rental car</span>
        </a>
      </div>
    </div>
  );
};
