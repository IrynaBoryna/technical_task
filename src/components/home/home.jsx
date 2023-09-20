import css from './home.module.css';
import { NavLink } from 'react-router-dom';

export const Home = () => {
  return (
    <section className={css.home__overlay}>
      <div className={css.home__title}>
        <h2>Traveling with us is easy and reliable!</h2>
      </div>

      <div className={css.home__title}>
        <NavLink to="/catalog" className={css.home__message}>
          Rent a car for every taste!
        </NavLink>
      </div>
    </section>
  );
};
