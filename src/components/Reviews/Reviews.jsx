import fetchData from '../fetch-data-api';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import css from './Reviews.module.css';

const Reviews = () => {
  const { moviesId } = useParams();
  const [reviews, setReviews] = useState();
  useEffect(() => {
    const fetchCast = async () => {
      try {
        const data = await fetchData({ id: moviesId, review: true });
        setReviews(data.results);
      } catch (error) {
        console.log(error);
      }
    };
    fetchCast();
  }, [moviesId]);

  return (
    <div>
      <ul>
        {reviews && reviews.length > 0 ? (
          reviews.map(review => {
            return (
              <li className={css.item} key={review.id}>
                <p className={css.author}>Author: {review.author}</p>
                <p>{review.content}</p>
              </li>
            );
          })
        ) : (
          <p className={css.noreview}>We don't have reviews for this movie</p>
        )}
      </ul>
    </div>
  );
};
export default Reviews;
