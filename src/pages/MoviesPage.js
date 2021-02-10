import { Component } from 'react';

// https://api.themoviedb.org/3/search/movie?api_key=8e1b01f3d4ab71ddc5b71444dcf769fc&language=en-US&page=1&include_adult=false

export default class MoviesPage extends Component {
  state = {
    filter: '',
    name: '',
  }

   handlerChange = e => {
    const { name, value } = e.currentTarget;
    this.setState({
      [name]: value,
    });
  };

  // changeFilter = e => {
  //   console.log(e.currentTarget.value);
  //   this.setState({ filter: e.currentTarget.value });
  // };

  render() {
    return (
      <div>
        <label  >
          Find contacts by name
          <input type="text" value={this.state.name} onChange={this.handlerChange} />
        </label>
      
      </div>
    )
  }
}
