import { useLocation } from 'react-router-dom';
import { List, Item, CustomNavLink } from '../MovieList/MovieList.styled';

export const MovieList = ({ films }) => {
  const location = useLocation();

  return (
    <List>
      {films.map(film => (
        <Item key={film.id}>
          <CustomNavLink
            to={`/movies/${film.id}`}
            state={{ from: location }}
            cover={film.poster_path}
          >
            {film.title}
          </CustomNavLink>
        </Item>
      ))}
    </List>
  );
};
