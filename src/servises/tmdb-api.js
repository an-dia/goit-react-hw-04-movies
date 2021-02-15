import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org/3/';
const KEY = '8e1b01f3d4ab71ddc5b71444dcf769fc';
// `https://api.themoviedb.org/3/trending/all/day?api_key=8e1b01f3d4ab71ddc5b71444dcf769fc`

axios.defaults.baseURL = BASE_URL;
axios.defaults.params = {
  api_key: KEY,
  language: 'en-US',
  page: 1,
  include_adult: false,
}

const getTrendingMovies = async () => {
  try {
    const { data } = await axios.get('trending/all/day')
    // console.log('data', data);
    // test();
    return {
      movies: data,
    }
  } catch (error) {
    console.log(error);
    return {
      movies: [],
    }
  }
}

// `https://api.themoviedb.org/3/search/movie?api_key=8e1b01f3d4ab71ddc5b71444dcf769fc&language=en-US&query=${query}&page=1&include_adult=false`

const getSearchMovies = async (query) => {
  try {
    const { data } = await axios.get('search/movie', {
      params: {query}
    })
    // console.log('dataS', data);
    // test();
    return {
      movies: data,
    }
  } catch (error) {
    console.log(error);
    return {
      movies: [],
      query: '',
    }
  }
}

// `https://api.themoviedb.org/3/movie/${movieId}?api_key=8e1b01f3d4ab71ddc5b71444dcf769fc&language=en-US`

const getMovieDetails = async (movieId) => {
  try {
    const  { data } = await axios.get(`movie/${movieId}`)
    // console.log('dataS', data);
    // test();
    return {
      movies: data,
    }
  } catch (error) {
    console.log(error);
    return {
      movies: [],
      // movieId: '',
    }
  }
}

// `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=8e1b01f3d4ab71ddc5b71444dcf769fc&language=en-US`

const getCasts = async (movieId) => {
  try {
    const  { data } = await axios.get(`movie/${movieId}/credits`)
    // console.log('dataS', data);
    // test();
    return {
      cast: data,
    }
  } catch (error) {
    console.log(error);
    return {
      cast: [],
      // movieId: '',
    }
  }
}

// `https://api.themoviedb.org/3/movie/${movieId}/reviews?api_key=8e1b01f3d4ab71ddc5b71444dcf769fc&language=en-US&page=1`

const getReviews = async (movieId) => {
  try {
    const  { data } = await axios.get(`movie/${movieId}/reviews`)
    // console.log('dataS', data);
    // test();
    return {
      reviews: data,
    }
  } catch (error) {
    console.log(error);
    return {
      reviews: [],
      // movieId: '',
    }
  }
}

const api = {
  getTrendingMovies,
  getSearchMovies,
  getMovieDetails,
  getCasts,
  getReviews,
}

export default api;