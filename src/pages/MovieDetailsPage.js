import { Component, Suspense, lazy } from 'react';
import { NavLink, Route, Switch } from 'react-router-dom';
import { ImArrowLeft } from 'react-icons/im';
import s from './MovieDetailsPage.module.css';
import api from '../servises/tmdb-api';
import LoaderSpinner from '../component/Loader';
// import axios from 'axios';
import routes from '../routes';
// import Cast from '../component/Cast';
// import Reviews from '../component/Reviews';
import MoviePreview from '../component/MoviePreview';

const Cast = lazy(() => import('../component/Cast' /* webpackChunkName: "cast" */));
const Reviews = lazy(() => import('../component/Reviews' /* webpackChunkName: "reviews" */));

export default class MovieDetailsPage extends Component {

  state = {
    poster_path: null,
    title: null,
    name: null,
    release_date: '',
    vote_average: null,
    overview: null,
    genres: [],
    id: null,
    isLoaded: false,
    error: null,
  }

  async componentDidMount() {
    const { movieId } = this.props.match.params;
    // console.log('mi',movieId);
    api.getMovieDetails(movieId)
      .then((data) => {
      // console.log('dataMD', data);
        this.setState({ isLoaded: true })
         
         if (data.movies.length === 0) {
           return Promise.reject(new Error('Not found'));
         }
         
         this.setState({ ...data.movies })
       })
      .catch(error => this.setState({ error }))
      .finally (this.setState({ isLoaded: false, }))

    // const response = await axios.get(`https://api.themoviedb.org/3/movie/${movieId}?api_key=8e1b01f3d4ab71ddc5b71444dcf769fc&language=en-US`)
    // // console.log(response.data);

    // this.setState({...response.data})
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
    // console.log('location',this.props.location);
    // const { movieId } = this.props.match.params;
    // console.log(this.props.match.path);
    // poster_path, title, name, vote_average, overview, genres, 
    
    const { poster_path, title, name, release_date, vote_average, overview, genres, error, isLoaded } = this.state;
    // console.log('genresMD', genres);
    return (
      <div className={s.Container}>
        <button className={s.Button} type='button' onClick={this.handleGoBack}>
          <ImArrowLeft style={{marginRight: 8}}/>
          Go back</button>
        {error && <h1>{error.message}</h1>}
        {!isLoaded && <LoaderSpinner />}
        {!error &&
              <MoviePreview
                poster_path={poster_path}
                title={title}
                name={name}
                release_date={release_date}
                vote_average={vote_average}
                overview={overview}
                genres={genres}
              />
        }
        {genres.length > 0  && 
        <div className={s.Wrapper}>
          <h2 className={s.Title}>Additional information</h2>
          <ul  className={s.List}>
            <li> <NavLink
              className={s.LinkBase}
              activeClassName={s.LinkActive}
              to={{ pathname: `${this.props.match.url}/cast `, state: { from: this.props.location?.state?.from || routes.movies } }}>Cast</NavLink> </li>
            <li> <NavLink
              className={s.LinkBase}
              activeClassName={s.LinkActive}
              to={{ pathname: `${this.props.match.url}/reviews `, state: { from: this.props.location?.state?.from || routes.movies  } }}>Reviews</NavLink> </li>
          </ul>
          <Suspense fallback={<LoaderSpinner />}>
            <Switch>
              <Route path={`${this.props.match.path}/cast `}  component={Cast} />
              <Route path={`${this.props.match.path}/reviews `} component={Reviews}/>
            </Switch>
          </Suspense>
        </div>}
      </div>
      
    )
  }
}

// /movies/:movieId/cast 
// /movies/:movieId/reviews

// {/* <h1>{title ? title : name}</h1> */}
         
// {/* <img src={`https://image.tmdb.org/t/p/w300${poster_path}` ?? this.props.defaultImg} alt={title ? title : name} width='300'/>
        
//     <h2>User Score:</h2>
//     <p>{vote_average * 10}%</p>
//     <h3>Overview</h3>
//     <p>{overview}</p>
//     <h3>Genres</h3> */}
// {/* <ul>{genres.map(({ id, name }) => (<li key={id}>{ name}</li>))}</ul> */}