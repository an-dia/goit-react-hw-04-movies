import { Component } from 'react';
import axios from 'axios';
// import { Link } from 'react-router-dom';
import MoviesList from '../component/MoviesList';

export default class HomePage extends Component {
  state = {
    movies: [],
  }

  async componentDidMount() {
    const response = await axios.get(`https://api.themoviedb.org/3/trending/all/day?api_key=8e1b01f3d4ab71ddc5b71444dcf769fc`)
    // console.log(response.data.results);
    
    this.setState({movies: response.data.results})
  }
  
  render() {
    const { movies } = this.state;
    
    return (
      <>
        <h1>Trending Today</h1>
        <MoviesList movies={movies}/>
        {/* <ul>
          {movies.map(movie => (
            <li key={movie.id}>
              <Link to = {`/movies/${movie.id}`}>{movie.title ? movie.title : movie.name}</Link>
            </li>
          ))}
        </ul> */}
      </>
    )
  }
}

// {this.props.match.url}