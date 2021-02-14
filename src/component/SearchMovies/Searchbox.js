import React, { Component } from 'react';
import s from './Searchbox.module.css';
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
      <>
      <form className={s.SearchForm} onSubmit={this.handleSubmit}>
        <input className={s.Input} autoFocus placeholder="Search movies" type="text" name='query' value={value} onChange={this.handleChange} />
         <button className={s.button} type='submit'>Search</button>
        </form>
       
        </>
    )
  }
}
