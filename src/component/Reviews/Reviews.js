import { Component } from 'react';
import PropTypes from 'prop-types';
import api from '../../servises/tmdb-api';
import LoaderSpinner from '../Loader/LoaderSpinner';
import s from './Reviews.module.css';
// import axios from 'axios';

export default class Reviews extends Component {
     static propTypes = {
    reviews: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        author: PropTypes.string.isRequired,
        content: PropTypes.string.isRequired,
      }),
    ),
    movieId : PropTypes.string,
  };
  
  state = {
    reviews: [],
    isLoaded: false,
    error: null,
  }

  async componentDidMount() {
    const { movieId } = this.props.match.params;
    
    api.getReviews(movieId)
    .then((data) => {
        this.setState({ isLoaded: true })
        //  console.log('dataR', data);
         if (!data.reviews.results) {
           return Promise.reject(new Error('Sorry, unfortunately nothing was found ...'));
         }
         
         this.setState({ reviews: data.reviews.results })
       })
      .catch(error => this.setState({ error }))
      .finally (this.setState({ isLoaded: false, }))
   

    // const response = await axios.get(`https://api.themoviedb.org/3/movie/${movieId}/reviews?api_key=8e1b01f3d4ab71ddc5b71444dcf769fc&language=en-US&page=1`)
    // // console.log(response.data.results);
    
    // this.setState({reviews: response.data.results})
  }
  
  render() {
    const { reviews, error, isLoaded } = this.state;

    return (
      <>
        {error && <h1>{error.message}</h1>}
        {!isLoaded && <LoaderSpinner />}
        {reviews.length > 0 &&
          <ul className={s.List}>
            {reviews.map(({ author, content, id }) =>
              <li className={s.Item} key={id}>
                <h2 className={s.Title}>Author: {author}</h2>
                <p>{content}</p>
              </li>)}
          </ul>  
        }
        {reviews.length === 0 && <p>We don't have any reviews for this movie</p>}
      </>
    )
  }
}

