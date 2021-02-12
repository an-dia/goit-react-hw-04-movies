import s from './Layout.module.css';
import AppBar from '../AppBar/';

const Layout = ({ children }) => (
  <div className={s.Container}>
    <AppBar />
    {children}
  </div>
);

export default Layout;