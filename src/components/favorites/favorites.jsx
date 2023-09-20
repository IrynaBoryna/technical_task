import { useState } from 'react';
import css from '../catalog/catalog.module.css';
import { OneCar } from '../oneCar/oneCar';
import { Seachbar } from '../searchbar/searchbar';

export const Favorites = ({ favorites, onLoadMore }) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className={css.container}>
      <Seachbar />
      <ul className={css.catalog}>
        {favorites.map(
          ({
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
            favorite,
          }) => (
            <OneCar
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
              favorite={favorite}
              onClick={() => setShowModal(!showModal)}
            />
          )
        )}
      </ul>
      {favorites.length > 7 && (
        <button type="button" className={css.button} onClick={onLoadMore}>
          Load more
        </button>
      )}
    </div>
  );
};
