import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchReviews } from 'API';
import { Loader } from 'components/Loader/Loader';
import { List, Item, MovieReviews } from './Reviews.styled';

const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchMovieReviews = async () => {
      try {
        setLoading(true);
        const fetchedReviews = await fetchReviews(movieId);
        setReviews(fetchedReviews);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchMovieReviews();
  }, [movieId]);

  return (
    <>
      {loading && <Loader />}
      {reviews.length !== 0 ? (
        <div>
          <MovieReviews>Movie Reviews</MovieReviews>
          <List>
            {reviews.map(review => (
              <Item key={review.id}>
                <h2>Author: {review.author}</h2>
                <p>{review.content}</p>
              </Item>
            ))}
          </List>
        </div>
      ) : (
        <div>We don't have any reviews for this movie</div>
      )}
    </>
  );
};
export default Reviews;
