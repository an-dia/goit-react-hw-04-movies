import PropTypes from 'prop-types';
import s from './Layout.module.css';
import AppBar from '../AppBar/';

const Layout = ({ children }) => (
  <div className={s.Container}>
    <AppBar />
    {children}
  </div>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;

