import React from 'react';
import { Link, withRouter } from 'react-router-dom';
// import MoviePreview from '../MoviePreview';

const MoviesList = ({ movies, match, location }) => {
  // console.log('match', match.url);
  return (
        <ul>
          {movies.map(movie => (
            <li key={movie.id}>
              {/* <MoviePreview {...movies} /> */}
              <Link to={{
                pathname: `${match.url}movies/${movie.id}`,
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
// to = {`${match.url}movies/${movie.id}`}
export default withRouter(MoviesList);