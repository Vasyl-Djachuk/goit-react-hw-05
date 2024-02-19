import { useParams, Outlet, Link, useLocation } from 'react-router-dom';
import Loader from 'react-spinners/PuffLoader';
import fetchData from '../components/fetch-data-api';
import { useState, useEffect } from 'react';
import MovieDetail from '../components/MovieDetail/MovieDetail';
import BackLink from '../components/BackLink/BackLink.jsx';
import css from './MoviesDetailPage.module.css';
import { Suspense } from 'react';

const override = {
  display: 'block',
  margin: '0 auto',
  borderColor: 'red',
};

const MoviesDetailPage = () => {
  const [loading, setLoading] = useState(true);
  const [moviesData, setMoviesData] = useState();
  const { moviesId } = useParams();
  const [location] = useState(useLocation());

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        setLoading(true);
        const data = await fetchData({ id: moviesId });
        setMoviesData(data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    fetchMovies();
  }, [moviesId]);

  const backLinkHref = location.state?.from ?? '/';

  const color = '#6aabe4';
  return (
    <div>
      <Loader
        color={color}
        loading={loading}
        cssOverride={override}
        size={100}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
      {moviesData && !loading && (
        <BackLink to={backLinkHref}>Back movies</BackLink>
      )}
      {moviesData && <MovieDetail moviesData={moviesData} />}
      {moviesData && (
        <div className={css.add}>
          <p>Additional information</p>
          <ul className={css.list}>
            <li className={css.item}>
              <Link to="cast">Cast</Link>
            </li>
            <li>
              <Link to="reviews">Reviews</Link>
            </li>
          </ul>
        </div>
      )}
      <Suspense fallback={<div>Loading subpage...</div>}>
        <Outlet />
      </Suspense>
    </div>
  );
};
export default MoviesDetailPage;
