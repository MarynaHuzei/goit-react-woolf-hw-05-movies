// import { useEffect, useState } from 'react';
// import { useSearchParams } from 'react-router-dom';
// import { Loader } from 'components/Loader/Loader';
// import { fetchSearchByKeyword } from 'API';
// import { Form } from '../../components/Form/Form';
// import { MovieList } from '../../components/MovieList/MovieList';
// import styles from './Movies.module.css';

// const Movies = () => {
//   const [searchFilms, setSearchFilms] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [noMoviesText, setNoMoviesText] = useState(false);
//   const [searchParams, setSearchParams] = useSearchParams();
//   const movieName = searchParams.get('query') || '';

//   const updateQueryString = query => {
//     const nextParams = query !== '' && { query };
//     setSearchParams(nextParams);
//   };

//   useEffect(() => {
//     const search = async () => {
//       try {
//         setLoading(true);
//         const movies = await fetchSearchByKeyword(movieName);
//         setSearchFilms(movies);
//         setNoMoviesText(movies.length === 0);
//       } catch (error) {
//         console.error(error);
//       } finally {
//         setLoading(false);
//       }
//     };
//     search();
//   }, [movieName]);

//   return (
//     <main>
//       <Form searchMovies={updateQueryString} />
//       {loading && <Loader />}
//       {noMoviesText && (
//         <p className={styles.text}>
//           There are no movies with this request. Please, try again...
//         </p>
//       )}
//       <MovieList films={searchFilms} />
//     </main>
//   );
// };
// export default Movies;

import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Loader } from 'components/Loader/Loader';
import { fetchSearchByKeyword } from 'API';
import { Form } from '../../components/Form/Form';
import { MovieList } from '../../components/MovieList/MovieList';
import styles from './Movies.module.css';

const Movies = () => {
  const [searchFilms, setSearchFilms] = useState([]);
  const [loading, setLoading] = useState(false);
  const [noMoviesText, setNoMoviesText] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const movieName = searchParams.get('query') || '';
  const [showListStyles, setShowListStyles] = useState(false);

  const updateQueryString = query => {
    const nextParams = query !== '' && { query };
    setSearchParams(nextParams);
  };

  useEffect(() => {
    const search = async () => {
      try {
        setLoading(true);
        const movies = await fetchSearchByKeyword(movieName);
        setSearchFilms(movies);
        setNoMoviesText(movies.length === 0);
        setShowListStyles(movies.length > 0); // Показати стилі лише коли є результати пошуку
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
    search();
  }, [movieName]);

  return (
    <main>
      <Form searchMovies={updateQueryString} />
      {loading && <Loader />}
      {noMoviesText && (
        <p className={styles.text}>
          There are no movies with this request. Please, try again...
        </p>
      )}
      {showListStyles && <MovieList films={searchFilms} />}
    </main>
  );
};
export default Movies;
