import { Outlet, NavLink } from 'react-router-dom';
import css from '../sharedLayout/sharedLayout.module.css';
import { Suspense } from 'react';

export const SharedLayout = () => {
  return (
    <div className={css.container}>
      <header className={css.header}>
        <nav className={css.list}>
          <NavLink to="/" end className={css.navLink}>
            Home
          </NavLink>
          <div>
            <NavLink to="/catalog" className={css.navLink}>
              Catalog
            </NavLink>
            <NavLink to="/favorites" className={css.navLink}>
              Favorites
            </NavLink>
          </div>
          <a href="tel:+380730000000" className={css.navLink}>
            +380730000000
          </a>
        </nav>
      </header>
      <Suspense fallback={<div>Loading subpage...</div>}>
        <Outlet />
      </Suspense>
    </div>
  );
};
