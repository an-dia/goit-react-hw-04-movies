import { Component } from 'react';
import s from './HomePage.module.css';
import api from '../servises/tmdb-api';
import LoaderSpinner from '../component/Loader';
import MoviesList from '../component/MoviesList';
// import axios from 'axios';
// import { Link } from 'react-router-dom';


export default class HomePage extends Component {
  state = {
    movies: [],
    isLoaded: false,
    error: null,
  }

  componentDidMount() {
     api.getTrendingMovies()
       .then((data) => {
        this.setState({ isLoaded: true })
         
         if (data.movies.results.length === 0) {
           return Promise.reject(new Error('Sorry, unfortunately nothing was found ...'));
         }
         
         this.setState({ movies: data.movies.results })
       })
      .catch(error => this.setState({ error }))
      .finally (this.setState({ isLoaded: false, }))
   

    // const response = await axios.get(`https://api.themoviedb.org/3/trending/all/day?api_key=8e1b01f3d4ab71ddc5b71444dcf769fc`)
    // console.log(response.data.results);
    
    // this.setState({movies: response.data.results})
  }
  
  render() {
    const { movies, error, isLoaded  } = this.state;
    
    return (
      <div className={s.Container}>
        {error && <h1>{error.message}</h1>}
        {!isLoaded && <LoaderSpinner />}
        {movies.length > 0 && <>
        <h1 className={s.Title}>Trending Today</h1>
        <MoviesList movies={movies}/>
        </>}
      </div>
    )
  }
}

// {this.props.match.url}

  // {/* <ul>
  //         {movies.map(movie => (
  //           <li key={movie.id}>
  //             <Link to = {`/movies/${movie.id}`}>{movie.title ? movie.title : movie.name}</Link>
  //           </li>
  //         ))}
  //       </ul> */}