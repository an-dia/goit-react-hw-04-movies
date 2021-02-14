import { Component } from 'react';
import s from './MoviesPage.module.css';
import getQueryParams from '../utils';
import api from '../servises/tmdb-api';
// import LoaderSpinner from '../component/Loader';
import Searchbox from '../component/SearchMovies/Searchbox';
import MoviesList from '../component/MoviesList';


export default class MoviesPage extends Component {
  state = {
    movies: [],
    // isLoaded: false,
    error: null,
  }

  componentDidMount() {
    const { query } = getQueryParams(this.props.location.search);
    
    if (query) {
       this.fetchSearchMovies(query);  
    }
    // if (query) {
    //   const response = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=8e1b01f3d4ab71ddc5b71444dcf769fc&language=en-US&query=${query}&page=1&include_adult=false`)
    //   console.log(response.data.results);
    //   this.setState({ movies: response.data.results })
    // }
  }

  async componentDidUpdate(prevProps, prevState) {
    //Деструктуризируем из параметров query
    const {query: prevQuery} = getQueryParams(prevProps.location.search);
    const {query: nextQuery} = getQueryParams(this.props.location.search);
    // console.log('prevQuery', prevQuery);
    // console.log('nextQuery', nextQuery);
  
    if (prevQuery !== nextQuery) { 
      this.fetchSearchMovies(nextQuery);
    }

    // if (prevQuery !== nextQuery) {
    //   const response = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=8e1b01f3d4ab71ddc5b71444dcf769fc&language=en-US&query=${nextQuery}&page=1&include_adult=false`)
    //   // console.log(response.data.results);
    //   this.setState({movies: response.data.results})
    // }
  }

  fetchSearchMovies = query => {
    api.getSearchMovies(query)
    .then((data) => {
          // console.log('dataN', data);
           this.setState({ isLoaded: true });
          if (data.movies.results.length === 0) {
            return Promise.reject(new Error('Sorry, your search returned no results ...'));
          }
         
          this.setState({ movies: data.movies.results })
        })
        .catch(error => this.setState({ error }))
        .finally(this.setState({ isLoaded: false }));
  }

  handleChangeQuery = query => {
    this.props.history.push({
      // pathname: this.props.location.pathname,
      ...this.props.location,
      search: `query=${query}`,
    })
    
    // console.log('this.props.location.pathname',this.props.location.pathname);
    // console.log('query',query);
  }

 
// isLoaded
  render() {
    const {movies, error,  } = this.state

    return (
      <div className={s.Container}>
        {error && <h1>{error.message}</h1>}
        {/* {!isLoaded && <LoaderSpinner />} */}
        <Searchbox onSubmit={this.handleChangeQuery}/>
        {movies.length > 0 &&
          <MoviesList movies={movies} />} 
      </div>
    )
  }
}
