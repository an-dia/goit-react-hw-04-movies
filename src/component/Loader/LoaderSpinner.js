import Loader from 'react-loader-spinner';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import s from './LoaderSpinner.module.css';

import { Component } from 'react';

export default class LoaderSpinner extends Component {
  state = {};
  render() {
    return (
      <div className={s.Container}>
        <Loader type="Hearts" color="cornflowerblue" height={60} width={60} />
      </div>
    );
  }
}

