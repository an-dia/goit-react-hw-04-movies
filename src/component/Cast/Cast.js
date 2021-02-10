import { Component } from 'react';
import axios from 'axios';
import defaultImg from '../../pages/cat-cry.jpg';

export default class Cast extends Component {
  static defaultProps = {
    defaultImg: defaultImg,
  };

  state = {
    cast: [],
  }

  async componentDidMount() {
     const { movieId } = this.props.match.params;
    const response = await axios.get(`https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=8e1b01f3d4ab71ddc5b71444dcf769fc&language=en-US`)
    // console.log(response.data.cast);
    
    this.setState({cast: response.data.cast})
  }
  
  render() {
    const { cast } = this.state;
    console.log(cast);
    return (
      <>
        <ul>
          {cast.map(({ id, name, character, profile_path }) =>
            <li key={id}>
            <img src={`https://image.tmdb.org/t/p/w300${profile_path}` ?? defaultImg} alt={cast.name} width='150' /> 
            <p>Actor name: {name}</p>
            <p>Character: {character}</p>
          </li>)}
        </ul>
      </>
    )
  }
}

// {this.props.match.url}