import css from './catalog.module.css';
import { OneCar } from '../oneCar/oneCar';
import { Seachbar } from '../searchbar/searchbar';
import { Loader } from 'components/loader';
import { nanoid } from 'nanoid';

export const Catalog = ({
  addDeletFavorite,
  cars,
  onLoadMore,
  error,
  isLoading,
  queryBrand,
  queryPrice,
  queryMileFrom,
  queryMileTo,
}) => {

  let queryArray = cars;

  const onSabmitQuery = () => {
    if (queryBrand !== '') {
      queryArray = cars.filter(car => car.make === queryBrand);
    } else if (queryPrice !== '') {
      queryArray = cars.filter(car => car.rentalPrice <= queryPrice)
    } else if (queryMileFrom !== '' || queryMileTo !== '') {
      queryArray = cars.filter(
        car => car.mileage <= queryMileTo && car.mileage >= queryMileFrom)
    } else queryArray = cars;
    return queryArray;
  }


  return (
    <div className={css.container}>
      <Seachbar
        onSubmit={({ queryBrand, queryPrice, queryMileFrom, queryMileTo }) =>
          onSabmitQuery({ queryBrand, queryPrice, queryMileFrom, queryMileTo })
        }
      />
      {error && <p>щось пішло не так...</p>}
      {isLoading ? (
        <Loader />
      ) : (
        <ul className={css.catalog}>
          {queryArray.map(
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
                key={nanoid()}
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
                onClick={() => addDeletFavorite(id)}
                favorite={favorite}
              />
            )
          )}
        </ul>
      )}

      {cars.length > 7 && (
        <button type="button" className={css.button} onClick={onLoadMore}>
          Load more
        </button>
      )}
    </div>
  );
};

