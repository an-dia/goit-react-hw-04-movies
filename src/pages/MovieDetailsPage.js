import { Component } from 'react';
import { NavLink, Route } from 'react-router-dom';
import { ImArrowLeft } from 'react-icons/im';
import axios from 'axios';
import routes from '../routes';
import Cast from '../component/Cast';
import Reviews from '../component/Reviews';
// import defaultImg from './cat-cry.jpg';
import MoviePreview from '../component/MoviePreview';


export default class MovieDetailsPage extends Component {
  // static defaultProps = {
  //   defaultImg: defaultImg,
  // };

  state = {
    poster_path: null,
    title: null,
    name: null,
    vote_average: null,
    overview: null,
    genres: [],
    id: null,
    // loading: false,
    // error: null,
  }

  async componentDidMount() {
    const { movieId } = this.props.match.params;
    // console.log('mi',movieId);

    const response = await axios.get(`https://api.themoviedb.org/3/movie/${movieId}?api_key=8e1b01f3d4ab71ddc5b71444dcf769fc&language=en-US`)
    // console.log(response.data);

    this.setState({...response.data})
  }

  handleGoBack = () => {
    const { location, history } = this.props;
    //Старый способ
    // if(location.state && location.state.from){
    //   return history.push(location.state.from);
    // }
    // history.push(routes.home)

    history.push(location?.state?.from || routes.home)
  }

  render() {
    // console.log('location',location.state.from);
    // const { movieId } = this.props.match.params;
    // console.log(this.props.match.path);
    const { poster_path, title, name, vote_average, overview, genres } = this.state
    return (
      <>
        <button type='button' onClick={this.handleGoBack}>
          <ImArrowLeft style={{marginRight: 8}}/>
          Go back</button>
        
        <div>
          <div> 
            <MoviePreview
              poster_path={poster_path}
              title={title}
              name={name}
              vote_average={vote_average}
              overview={overview}
              genres={genres}
            />
          {/* <h1>{title ? title : name}</h1> */}
         
        {/* <img src={`https://image.tmdb.org/t/p/w300${poster_path}` ?? this.props.defaultImg} alt={title ? title : name} width='300'/>
        
          <h2>User Score:</h2>
          <p>{vote_average * 10}%</p>
          <h3>Overview</h3>
          <p>{overview}</p>
          <h3>Genres</h3> */}
          {/* <ul>{genres.map(({ id, name }) => (<li key={id}>{ name}</li>))}</ul> */}
        </div>
        </div>
        <div>
          <h2>Additional information</h2>
          <ul>
            <li> <NavLink to = {`${this.props.match.url}/cast `}>Cast</NavLink> </li>
            <li> <NavLink to = {`${this.props.match.url}/reviews `}>Reviews</NavLink> </li>
          </ul>
          <Route path={`${this.props.match.path}/cast `}  component={Cast} />
          <Route path="/movies/:movieId/reviews" component={Reviews}/>
        </div>
      </>
      
    )
  }
}

// /movies/:movieId/cast 
// /movies/:movieId/reviews