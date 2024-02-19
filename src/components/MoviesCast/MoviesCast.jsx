import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import fetchData from '../fetch-data-api';
import css from './MoviesCast.module.css';

const MoviesCast = () => {
  const { moviesId } = useParams();
  const [cast, setCast] = useState();
  useEffect(() => {
    const fetchCast = async () => {
      try {
        const data = await fetchData({ id: moviesId, cast: true });
        setCast(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchCast();
  }, [moviesId]);

  return (
    <div>
      <ul className={css.list}>
        {cast &&
          cast.cast.map(actor => {
            return (
              <li key={actor.id} className={css.item}>
                <img
                  height="300"
                  className={css.img}
                  src={`http://image.tmdb.org/t/p/w185${actor.profile_path}`}
                  alt={actor.name}
                />
                <p className={css.actor}>{actor.name}</p>
                <p className={css.character}>
                  Character: <span>{actor.character}</span> {actor.character}
                </p>
              </li>
            );
          })}
      </ul>
    </div>
  );
};
export default MoviesCast;
