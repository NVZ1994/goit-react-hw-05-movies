import axios from 'axios';

const searchParams = new URLSearchParams({
  api_key: 'a89efc13357c0c3140da0ea778285af5',
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
