import React, { Component } from 'react';
import axios from 'axios';

export default class MoviesList extends Component {

  async componentDidUpdate(prevProps, prevState) {
    console.log('prev', prevProps.query);
    console.log('next', this.props.query);
    
    // if (prevProps.query !== this.props.query) {
    // const response = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=8e1b01f3d4ab71ddc5b71444dcf769fc&language=en-US&page=1&include_adult=false`)
    //     console.log(response);
    // }

  }

  render() {
    return (
      <div>
        <p>{this.props.query}</p>
      </div>
    )
  }
}
