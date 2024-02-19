import css from './MovieDetail.module.css';

const MovieDetail = ({ moviesData }) => {
  const imgUrl = `http://image.tmdb.org/t/p/w300${moviesData.poster_path}`;
  const genres = moviesData.genres.map(genre => genre.name).join(` `);
  const rege = Math.round(moviesData.vote_average * 10);

  return (
    <div>
      <div className={css.wrapper}>
        <img className={css.img} src={imgUrl} alt={moviesData.title} />
        <ul className={css.list}>
          <li>
            <h2 className={css.title}>{moviesData.title}</h2>
          </li>
          <li>
            <p className={css.score}>User score: {rege}%</p>
          </li>
          <li>
            <p className={css.descr}> Owerview</p>
          </li>
          <li>
            <p>{moviesData.overview}</p>
          </li>
          <li>
            <p className={css.descr}>Genres</p>
          </li>
          <li>
            <p>{genres}</p>
          </li>
          <li>
            <p>Date: {moviesData.release_date}</p>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default MovieDetail;

//
