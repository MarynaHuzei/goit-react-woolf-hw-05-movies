import { fetchTrending } from 'API';
import { useState, useEffect } from 'react';
import { Loader } from 'components/Loader/Loader';
import { MovieList } from 'components/MovieList/MovieList';
import { StyledTitle } from './Home.styled';

const Home = () => {
  const [films, setFilms] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTrendingFilms = async () => {
      try {
        const trendingFilms = await fetchTrending();
        setFilms(trendingFilms);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchTrendingFilms();
  }, []);

  return (
    <main>
      {/* <h1 className="title">Trending today</h1> */}
      <StyledTitle>Trending today</StyledTitle>
      <MovieList films={films} />

      {loading && <Loader />}
    </main>
  );
};

export default Home;
