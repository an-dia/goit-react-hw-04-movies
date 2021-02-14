import React, { Suspense, lazy } from 'react';
import { Route, Switch, Redirect  } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import s from './App.module.css';
// import HomePage from './pages/HomePage';
// import MoviesPage from './pages/MoviesPage';
// import MovieDetailsPage from './pages/MovieDetailsPage';
// import NotFoundPage from './pages/NotFoundPage';
import Layout from './component/Layout';
// import AppBar from './component/AppBar';
import routes from './routes';
import LoaderSpinner from './component/Loader/LoaderSpinner';

const HomePage = lazy(() => import('./pages/HomePage.js' /* webpackChunkName: "home-page" */));
const MovieDetailsPage = lazy(() => import('./pages/MovieDetailsPage.js' /* webpackChunkName: "movie-details-page" */));
const MoviesPage = lazy(() => import('./pages/MoviesPage.js' /* webpackChunkName: "movies-page" */));
const NotFoundPage = lazy(() => import('./pages/NotFoundPage.js' /* webpackChunkName: "not-found-page" */));

const App = () => {
  return (
    <>
      <Layout>
        <Suspense fallback={<LoaderSpinner />}>
          <Switch>
            <Route exact path={routes.home} component={HomePage} />
            <Route  path={routes.movieDetails} component={MovieDetailsPage} />
            <Route  path={routes.movies} component={MoviesPage} />
            <Route component={NotFoundPage} />
            <Redirect to={routes.home} />
          </Switch>
        </Suspense>
      </Layout>
      <ToastContainer position="top-center" autoClose={3000} />
    </>
    
  );
};

export default App;