import { Route, NavLink, Switch } from 'react-router-dom';
import s from './App.module.css';
// import Axios from 'axios';
import HomePage from './pages/HomePage';
import MoviesPage from './pages/MoviesPage';
import MovieDetailsPage from './pages/MovieDetailsPage';
import NotFoundPage from './pages/NotFoundPage';

// '/' - компонент <HomePage>, домашняя страница со списком популярных кинофильмов.
// '/movies' - компонент <MoviesPage>, страница поиска фильмов по ключевому слову.
// '/movies/:movieId' - компонент <MovieDetailsPage>, страница с детальной информацией о кинофильме.
// /movies/:movieId/cast - компонент <Cast>, информация о актерском составе. Рендерится на странице <MovieDetailsPage>.
// /movies/:movieId/reviews - компонент <Reviews>, информация об обзорах. Рендерится на странице <MovieDetailsPage>.


const App = () => {
  return (
    <>
      <ul className={s.List}>
        <li className={s.Item}><NavLink exact className={s.LinkBase} activeClassName={s.LinkActive} to="/">Home</NavLink></li>
        <li className={s.Item}><NavLink className={s.LinkBase} activeClassName={s.LinkActive} to="/movies">Authors</NavLink></li>
      </ul>
      
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route  path="/movies/:movieId" component={MovieDetailsPage} />
        <Route  path="/movies" component={MoviesPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </>
  );
};

export default App;