import { Component } from 'react';
import axios from 'axios';

export default class Reviews extends Component {
  
  state = {
    reviews: [],
  }

  async componentDidMount() {
     const { movieId } = this.props.match.params;
    const response = await axios.get(`https://api.themoviedb.org/3/movie/${movieId}/reviews?api_key=8e1b01f3d4ab71ddc5b71444dcf769fc&language=en-US&page=1`)
    // console.log(response.data.results);
    
    this.setState({reviews: response.data.results})
  }
  
  render() {
    const { reviews } = this.state;

    return (
      <>
        {reviews.length > 0 &&
          <ul>
            {reviews.map(({ author, content, id }) =>
              <li key={id}>
                <h2>Author: {author}</h2>
                <p>{content}</p>
              </li>)}
          </ul>  
        }
        {reviews.length === 0 && <p>We don't have any reviews for this movie</p>}
      </>
    )
  }
}

