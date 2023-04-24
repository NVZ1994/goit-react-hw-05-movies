import { useState, useEffect} from 'react';
import { getTrending } from 'services/Api';
import { MoviesList } from 'components/MoviesItems/MoviesList';
import { HomeTitle } from './Home.styled';

const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getTrending().then(res => setMovies(res.data.results));
  }, []);

  return (
    <>
    
    <HomeTitle> Trending today </HomeTitle>
      <MoviesList movies={movies} />
      
    </>
  );
};
 export default Home;