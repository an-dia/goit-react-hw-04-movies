import React, { Component } from 'react';
import { toast } from 'react-toastify';

export default class Searchbox extends Component {
  state = {
    value: '',
  }

  handleChange = event => {
    // console.log(event.currentTarget.value);
    this.setState({value: event.currentTarget.value.toLowerCase()})
  }

  handleSubmit = event => {
    const { value } = this.state;
    event.preventDefault();

    if (value.trim() === '') {
      return toast.dark('Please, enter the title of the movie!');
    }

    this.props.onSubmit(this.state.value)
    this.setState({value: ''})
  }

  render() {
    const { value } = this.state; 

    return (
      <form onSubmit={this.handleSubmit}>
        <input type="text" name='query' value={value} onChange={this.handleChange} />
        <button type='submit'>Search</button>
      </form>
    )
  }
}
