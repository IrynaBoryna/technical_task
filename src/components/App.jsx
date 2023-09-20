import { Routes, Route } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { Catalog } from './catalog/catalog';
import { Home } from './home/home';
import { Favorites } from './favorites/favorites';
import { SharedLayout } from './sharedLayout/sharedLayout';
import { fetchCars } from '../components/servises';

export const App = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const [favorites, setFavorites] = useState(() => {
    return JSON.parse(localStorage.getItem('favorites')) ?? [];
  });

  const [cars, setCars] = useState(() => {
    return JSON.parse(localStorage.getItem('cars')) ?? [];
  });

  useEffect(() => {
    if (cars.length > 0) {
      return;
    }
    if (cars.length === 0) {
      setIsLoading(true);
      const Foo = async () => {
        try {
          const date = await fetchCars(1);
          setCars([...date]);
        } catch (error) {
          setError({ error });
        } finally {
          setIsLoading(false);
        }
      };
      Foo();
    }
  }, [cars]);

  useEffect(() => {
    if (page > 5) {
       Notify.success('You have viewed all cars...');
      return;
    }
    if (page > 1 && page < 5) {
      setIsLoading(true);
      const Foo = async () => {
        try {
          const date = await fetchCars(page);
          setCars(prevCars => [...prevCars, ...date]);
        } catch (error) {
          setError({ error });
        } finally {
          setIsLoading(false);
        }
      };
      Foo();
    }
  }, [page]);

  useEffect(() => {
    localStorage.setItem('cars', JSON.stringify(cars));
  }, [cars]);

  useEffect(() => {
    localStorage.setItem('favorites', JSON.stringify(favorites));
  }, [favorites]);
   

  const addDeletFavorite = id => {
    const favorCar = cars.find(car => car.id === id);
    const index = cars.indexOf(favorCar);

    if (favorCar.favorite === true) {
      setFavorites(favorites.filter(favorite => favorite.id !== id));
    }
    favorCar.favorite = !favorCar.favorite;
    cars.splice(index, 1, favorCar);  
    setFavorites(prevFavorites => [...prevFavorites, { ...favorCar }]);
  };

  const onLoadMore = () => {
    setPage(prevPage => prevPage + 1);
  };

  
  return (
    <div>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route path="/" element={<Home />} />
          <Route
            path="/catalog"
            element={
              <Catalog
                cars={cars}
                addDeletFavorite={addDeletFavorite}
                onLoadMore={onLoadMore}
                error={error}
                isLoading={isLoading}
              />
            }
          />
          <Route
            path="/favorites"
            element={
              <Favorites
                favorites={favorites}
                addDeletFavorite={addDeletFavorite}
                onLoadMore={onLoadMore}
              />
            }
          />
          <Route path="*" element={<Home />} />
        </Route>
      </Routes>
    </div>
  );
};
