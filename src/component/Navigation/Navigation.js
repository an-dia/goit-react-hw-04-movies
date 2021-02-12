import { NavLink } from 'react-router-dom';
import routes from '../../routes';
import s from './Navigation.module.css';

const Navigation = () => {
  return (
        <nav >
          <ul className={s.List}>
          <li className={s.Item}>
            <NavLink exact className={s.LinkBase} activeClassName={s.LinkActive} to={routes.home}>
              Home
            </NavLink></li>
          <li className={s.Item}>
            <NavLink className={s.LinkBase} activeClassName={s.LinkActive} to={routes.movies}>
              Authors
            </NavLink></li>
          </ul>
        </nav>
  );
};

export default Navigation;