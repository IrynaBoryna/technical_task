import css from './catalog.module.css';
import { OneCar } from '../oneCar/oneCar';
import PropTypes from 'prop-types';
import { Seachbar } from '../searchbar/searchbar';
import { Loader } from 'components/loader';

export const Catalog = ({
  addDeletFavorite,
  cars,
  onLoadMore,
  error,
  isLoading,
}) => {
  // const onSabmitQuery = ({
  // queryBrand,
  // queryPrice,
  // queryMileFrom,
  // queryMileTo,
  // }) => {

  // setQueryBrand(queryBrand);
  // setQueryPrice(queryPrice);
  // setQueryMileFrom(queryMileFrom);
  // setQueryMileTo(queryMileTo);
  // setCars([]);
  // };

  return (
    <div className={css.container}>
      <Seachbar
      // onSubmit={({ queryBrand, queryPrice, queryMileFrom, queryMileTo }) =>
      //   onSabmitQuery({ queryBrand, queryPrice, queryMileFrom, queryMileTo })
      // }
      />
      {error && <p>щось пішло не так...</p>}
      {isLoading ? (
        <Loader />
      ) : (
        <ul className={css.catalog}>
          {cars.map(
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
                // onShow={() => setShowModal(!showModal)}
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

Catalog.prototype = {
  //   tags: PropTypes.string,
  //   webformatURL: PropTypes.string,
  id: PropTypes.number,
  images: PropTypes.array,
  showModal: PropTypes.bool,
};

// const [queryBrand, setQueryBrand] = useState('');
// const [queryPrice, setQueryPrice] = useState('');
// const [queryMileFrom, setQueryMileFrom] = useState('');
// const [queryMileTo, setQueryMileTo] = useState('');
// const [showModal, setShowModal] = useState(false);
