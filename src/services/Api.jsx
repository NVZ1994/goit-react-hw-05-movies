import axios from 'axios';

const searchParams = new URLSearchParams({
  api_key: '7df410b2047c6efdac8b2acbf29ad6ea',
});

axios.defaults.baseURL = 'https://api.themoviedb.org/3';

export const getTrending = () => {
  return axios.get(`/trending/movie/week?${searchParams}`);
};
export const searchMovies = name => {
  return axios.get(`/search/movie?${searchParams}&query=${name}`);
};
export const getMovieDetails = id => {
  return axios.get(`/movie/${id}?${searchParams}`);
};
export const getMovieCredits = id => {
  return axios.get(`/movie/${id}/credits?${searchParams}`);
};
export const getMovieReviews = id => {
  return axios.get(`/movie/${id}/reviews?${searchParams}`);
};
