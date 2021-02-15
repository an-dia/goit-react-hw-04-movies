import PropTypes from 'prop-types';
import s from './MoviePreview.module.css';
import defaultImg from '../../pages/cat-cry.jpg';

const MoviePreview = ({ poster_path, title, name, release_date, vote_average, overview, genres }) => {
  // console.log('genres', genres);
  const baseImgUrl = 'https://image.tmdb.org/t/p/w300'
  return (
    <div className={s.Container}>
        <img className={s.Img}  src={poster_path ? `${baseImgUrl}${poster_path}` : defaultImg} alt={title ? title : name} width='300'/>
      <div className={s.Wrapper}>
        <div className={s.Wrap}>
          <h1 className={s.Title}>{title ? title : name}</h1>
          <p className={s.TitleData}>({release_date.slice(0,4)})</p>
        </div>
        <h2 className={s.SubTitle}>User Score:</h2>
        <p className={s.Text}>{vote_average * 10}%</p>
        <h3 className={s.SubTitle}>Overview</h3>
        <p className={s.Text}>{overview}</p>
        <h3 className={s.SubTitle}>Genres</h3>
        <ul className={s.List}>{genres.map(({ id, name }) => (<li className={s.Item} key={id}>{ name }</li>))}</ul>
      </div>
    </div>
  );
};

MoviePreview.defaultProps = {
  overview: 'Sorry, there is no description for this movie yet.',

};

MoviePreview.propTypes = {
  poster_path: PropTypes.string,
  title: PropTypes.string,
  name: PropTypes.string,
  vote_average: PropTypes.number,
  overview: PropTypes.string,
  release_date: PropTypes.string,
  genres: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
      }),
  ).isRequired,
};

export default MoviePreview;

