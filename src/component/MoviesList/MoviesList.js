import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import s from './MoviesList.module.css';


const MoviesList = ({ movies, location }) => {
  // console.log('match', match.url);
  return (
        <ul className={s.List}>
          {movies.map(movie => (
            <li className={s.Item} key={movie.id}>
              <Link className={s.Link} to={{
                pathname: `/movies/${movie.id}`,
                state: {
                  from: location,
                }
              }}>
                {movie.title ? movie.title : movie.name}
              </Link>
            </li>
          ))}
        </ul>
  );
};

MoviesList.propTypes = {
  movies: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
      }),
  ).isRequired,
  location: PropTypes.object.isRequired,
};

// to = {`${match.url}movies/${movie.id}`}
export default withRouter(MoviesList);

