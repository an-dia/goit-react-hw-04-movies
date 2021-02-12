import { Component } from 'react';
import getQueryParams from '../utils'
import axios from 'axios';
import Searchbox from '../component/SearchMovies/Searchbox';
import MoviesList from '../component/MoviesList';


export default class MoviesPage extends Component {
  state = {
    movies: [],
  }

  // async componentDidMount() {
  //   //  const { movieId } = this.props.match.params;

  //   const response = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=8e1b01f3d4ab71ddc5b71444dcf769fc&language=en-US&page=1&include_adult=false`)
  //   console.log(response);

  //   // this.setState({...response.data})
  // }

  async componentDidUpdate(prevProps, prevState) {
    //Деструктуризируем из параметров query
    const {query: prevQuery} = getQueryParams(prevProps.location.search);
    const {query: nextQuery} = getQueryParams(this.props.location.search);
    console.log('prevQuery', prevQuery);
    console.log('nextQuery', nextQuery);

    if (prevQuery !== nextQuery) {
      const response = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=8e1b01f3d4ab71ddc5b71444dcf769fc&language=en-US&query=${nextQuery}&page=1&include_adult=false`)
      console.log(response.data.results);
      this.setState({movies: response.data.results})
    }
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

 

  render() {
    const {movies} = this.state

    return (
      <div>
        <Searchbox onSubmit={this.handleChangeQuery}/>
        {movies.length > 0 &&
          <MoviesList movies={movies} />} 
      </div>
    )
  }
}
