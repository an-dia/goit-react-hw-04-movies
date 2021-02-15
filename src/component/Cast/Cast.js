import { Component } from 'react';
import s from './Cast.module.css';
import PropTypes from 'prop-types';
import api from '../../servises/tmdb-api';
import LoaderSpinner from '../Loader/LoaderSpinner';
// import axios from 'axios';
import defaultImg from './simons-cat.jpg';

export default class Cast extends Component {
  static defaultProps = {
    defaultImg: defaultImg,
  };

   static propTypes = {
    cast: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        character: PropTypes.string.isRequired,
        profile_path: PropTypes.string.isRequired,
      }),
    ),
    movieId : PropTypes.string,
  };

  state = {
    cast: [],
    isLoaded: false,
    error: null,
  }

  componentDidMount() {
    const { movieId } = this.props.match.params;
    
    api.getCasts(movieId)
    .then((data) => {
        this.setState({ isLoaded: true })
        //  console.log('dataC', data);
         if (!data.cast.cast) {
           return Promise.reject(new Error('Sorry, unfortunately nothing was found ...'));
         }
         
         this.setState({ cast: data.cast.cast })
       })
      .catch(error => this.setState({ error }))
      .finally (this.setState({ isLoaded: false, }))
   
  
    // const response = await axios.get(`https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=8e1b01f3d4ab71ddc5b71444dcf769fc&language=en-US`)
    // // console.log(response.data.cast);
    
    // this.setState({cast: response.data.cast})
  }
  
  render() {
    const { cast, error, isLoaded } = this.state;
    return (
      <>
        {error && <h1>{error.message}</h1>}
        {!isLoaded && <LoaderSpinner />}
        {cast.length > 0 &&  
        <ul className={s.List}>
          {cast.map(({ id, name, character, profile_path }) =>
            <li className={s.Item} key={id}>
            <img className={s.Img} src={profile_path ? `https://image.tmdb.org/t/p/w300${profile_path}` : defaultImg} alt={cast.name} width='150' /> 
            <div className={s.Wrapper}>
              <p className={s.Text}>Actor name: {name}</p>
              <p>Character: {character}</p>
            </div>
          </li>)}
          </ul>
        }
      </>
    )
  }
}

// {this.props.match.url}