import { Route, Switch } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import s from './App.module.css';
// import Axios from 'axios';
import HomePage from './pages/HomePage';
import MoviesPage from './pages/MoviesPage';
import MovieDetailsPage from './pages/MovieDetailsPage';
import NotFoundPage from './pages/NotFoundPage';
import AppBar from './component/AppBar';
import routes from './routes';

const App = () => {
  return (
    <>
      <AppBar/>
      <Switch>
        <Route exact path={routes.home} component={HomePage} />
        <Route  path={routes.movieDetails} component={MovieDetailsPage} />
        <Route  path={routes.movies} component={MoviesPage} />
        <Route component={NotFoundPage} />
      </Switch>
      <ToastContainer position="top-center" autoClose={3000} />
    </>
    
  );
};

export default App;