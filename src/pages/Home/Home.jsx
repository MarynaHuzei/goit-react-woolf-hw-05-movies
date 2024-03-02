import { fetchTrending } from 'API';
import { useState, useEffect } from 'react';
import { Loader } from 'components/Loader/Loader';
import { MovieList } from 'components/MovieList/MovieList';

export const Home = () => {
  const [films, setFilms] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect =
    (() => {
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
    },
    []);

  return (
    <main>
      <h1 className="title">Trending today</h1>
      <MovieList films={films} />

      {loading && <Loader />}
    </main>
  );
};

export default Home;
