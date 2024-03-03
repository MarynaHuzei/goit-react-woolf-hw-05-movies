import { useEffect, useState } from 'react';
import { Link, Outlet, useLocation, useParams } from 'react-router-dom';
import { fetchMovieDetails } from 'API';
import { Loader } from 'components/Loader/Loader';
import noImage from '../../components/noImage/noImage.png';
import styles from './MovieDetails.module.css';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movieInfo, setMovieInfo] = useState(null);
  const [loading, setLoading] = useState(true);
  const location = useLocation();

  useEffect(() => {
    const fetchMovieDetailsData = async () => {
      try {
        setLoading(true);
        const detailMovie = await fetchMovieDetails(movieId);
        setMovieInfo(detailMovie);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchMovieDetailsData();
  }, [movieId]);

  if (loading) {
    return <Loader />;
  }

  if (!movieInfo) {
    return null;
  }

  const { title, release_date, overview, genres, poster_path, original_title } =
    movieInfo;

  const companiesList = movieInfo.production_companies?.map(
    ({ id, logo_path, name }) =>
      logo_path && (
        <li key={id}>
          {logo_path && (
            <img
              src={`https://image.tmdb.org/t/p/w500${logo_path}`}
              alt={name}
              style={{
                maxHeight: 50,
                maxWidth: 200,
                marginRight: 30,
                marginTop: 10,
              }}
            />
          )}
        </li>
      )
  );

  const roundedPopularity = Math.round(movieInfo.vote_average * 10);

  return (
    <>
      <Link to={location.state?.from ?? '/'}>
        <button className={styles.button} type="button">
          Go back
        </button>
      </Link>

      <div className={styles.container}>
        <img
          className={styles.img}
          src={
            poster_path
              ? `https://image.tmdb.org/t/p/w500${poster_path}`
              : `${noImage}`
          }
          alt={original_title}
        />
        <div>
          <h1 className={styles.title}>
            {title} ({release_date.slice(0, 4)})
          </h1>
          <p className={styles.score}>User score: {roundedPopularity}%</p>
          <h2 className={styles.subTitle}>Overview</h2>
          <p className={styles.overviewText}>{overview}</p>
          <h2 className={styles.subTitle}>Genres</h2>
          <ul className={styles.list}>
            {genres.map(genre => (
              <li className="pb-4" key={genre.id}>
                {genre.name}
              </li>
            ))}
          </ul>

          {companiesList[0] !== null && companiesList.length > 0 && (
            <>
              <h2 className={styles.subTitle}>Production companies</h2>
              <ul className={styles.flex}>{companiesList}</ul>
            </>
          )}
        </div>
      </div>

      <hr />

      <div>
        <h3 className={styles.subTitle}>Additional information</h3>
        <ul className={styles.listInfo}>
          <li className={styles.listLink}>
            <Link to="cast">Cast</Link>
          </li>
          <li className={styles.listLink}>
            <Link to="reviews">Reviews</Link>
          </li>
        </ul>
        <hr />
        <Outlet />
      </div>
    </>
  );
};
export default MovieDetails;
