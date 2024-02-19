import css from './MoviesListItem.module.css';
import { Link, useLocation } from 'react-router-dom';

const MoviesListItem = ({ movie }) => {
  const location = useLocation();

  const url = `http://image.tmdb.org/t/p/w300${movie.poster_path}`;
  return (
    <div className={css.container}>
      <Link to={`/movies/${movie.id}`} state={{ from: location }}>
        <img className={css.img} src={url} alt={movie.title} />
      </Link>
    </div>
  );
};
export default MoviesListItem;
