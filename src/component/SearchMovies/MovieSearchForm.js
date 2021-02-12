import React, { Component } from 'react';
import { toast } from 'react-toastify';

export default class MovieSearchForm extends Component {
  state = {
    query: '',
  }

  handleQueryChange = event => {
    console.log(event.currentTarget.value);
    this.setState({query: event.currentTarget.value.toLowerCase()})
  }

  handleSubmit = event => {
    const { query } = this.state;
    event.preventDefault();

    if (query.trim() === '') {
      return toast.dark('Please, enter the title of the movie!');
    }

    this.props.onSubmit(this.state.query)
    this.setState({query: ''})
  }

  render() {
    const { query } = this.state; 

    return (
      <form onSubmit={this.handleSubmit}>
        <input type="text" name='query' value={query} onChange={this.handleQueryChange} />
        <button type='submit'>Search</button>
      </form>
    )
  }
}
