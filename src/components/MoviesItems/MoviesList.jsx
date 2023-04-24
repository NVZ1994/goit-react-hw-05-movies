import { useLocation } from 'react-router-dom';
import {
  
  Link,
  MovieImg,
  MovieItem,
  MoviesBox,
  Title,
} from './MoviesList.styled';

export const MoviesList = ({ movies }) => {
  const imageBaseUrl = 'https://image.tmdb.org/t/p/w500/';
  const location = useLocation();

  return (
    movies && (
      <>
        
        <MoviesBox>
          {movies.map(({ id, title, original_name, poster_path }) => (
            <MovieItem key={id}>
              <Link to={`/movies/${id}`} state={{ from: location }}>
                <MovieImg
                  src={
                    poster_path
                      ? imageBaseUrl + poster_path
                      : 'https://svgsilh.com/svg_v2/1363011.svg'
                  }
                  alt="Foto"
                />
                <Title>{title ?? original_name}</Title>
              </Link>
            </MovieItem>
          ))}
        </MoviesBox>{' '}
      </>
    )
  );
};
