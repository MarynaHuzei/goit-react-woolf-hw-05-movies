import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchActors } from 'API';
import { Loader } from 'components/Loader/Loader';
import noImage from '../../components/noImage/noImage.png';
import { List, Text, SubTitle } from './cast.styled';
const Cast = () => {
  const { movieId } = useParams();
  const [actors, setActors] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchActorsOfMovie = async () => {
      try {
        setLoading(true);
        const actorsData = await fetchActors(movieId);
        setActors(actorsData);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchActorsOfMovie();
  }, [movieId]);

  return (
    <div>
      {loading && <Loader />}

      <SubTitle>Movie Cast</SubTitle>
      <List>
        {actors.map(({ id, profile_path, original_name, name, character }) => (
          <li key={id}>
            <img
              width="200px"
              height="300px"
              src={
                profile_path
                  ? `https://image.tmdb.org/t/p/w500${profile_path}`
                  : `${noImage}`
              }
              alt={original_name}
            />
            <Text>{name}</Text>
            <Text>Character: {character}</Text>
          </li>
        ))}
      </List>
    </div>
  );
};
export default Cast;
