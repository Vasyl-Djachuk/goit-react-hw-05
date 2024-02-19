import MoviesListItem from './MoviesListItem/MoviesListItem';
import css from './MoviesList.module.css';

const MoviesList = ({ moviesData }) => {
  return (
    <ul className={css.list}>
      {moviesData.map(movie => {
        return (
          <li className={css.item} key={movie.id}>
            <MoviesListItem movie={movie} />
          </li>
        );
      })}
    </ul>
  );
};
export default MoviesList;
