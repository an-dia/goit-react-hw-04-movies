import React from 'react';
import defaultImg from '../../pages/cat-cry.jpg';

const MoviePreview = ({ poster_path, title, name, vote_average, overview, genres }) => {
  const baseImgUrl = 'https://image.tmdb.org/t/p/w300'
  return (
      <div>
          <img src={`${baseImgUrl}${poster_path}` ?? defaultImg} alt={title ? title : name} width='300'/>
        <div>
          <h1>{title ? title : name}</h1>
          <h2>User Score:</h2>
          <p>{vote_average * 10}%</p>
          <h3>Overview</h3>
          <p>{overview}</p>
          <h3>Genres</h3>
      </div>
      <ul>{genres.map(({ id, name }) => (<li key={id}>{ name}</li>))}</ul>
      </div>
  );
};

export default MoviePreview;