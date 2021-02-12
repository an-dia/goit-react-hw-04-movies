import { Component } from 'react';
// import axios from 'axios';
import MovieSearchForm from '../component/SearchMovies/MovieSearchForm';
import MoviesList from '../component/SearchMovies/MoviesList';


export default class MoviesPage extends Component {
  state = {
    query: [],
    // filter: '',
  }

  // async componentDidMount() {
  //   //  const { movieId } = this.props.match.params;

  //   const response = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=8e1b01f3d4ab71ddc5b71444dcf769fc&language=en-US&page=1&include_adult=false`)
  //   console.log(response);

  //   // this.setState({...response.data})
  // }

  handleSubmit = query => {
    this.setState({ query });
  }

 

  render() {
    return (
      <div>
        <MovieSearchForm onSubmit={this.handleSubmit}/>
        <MoviesList query={this.state.query}/>
      </div>
    )
  }
}
