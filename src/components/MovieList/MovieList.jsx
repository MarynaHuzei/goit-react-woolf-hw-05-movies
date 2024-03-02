import { useLocation } from 'react-router-dom';
import { List, Item, MovieLink } from '../MovieList/MovieList.styled';

export const MovieList = ({ films }) => {
  const location = useLocation();

  return (
    <List>
      {films.map(film => (
        <Item key={film.id}>
          <MovieLink
            to={`/movies/${film.id}`}
            state={{ from: location }}
            cover={film.poster_path}
          >
            {film.title}
          </MovieLink>
        </Item>
      ))}
    </List>
  );
};
