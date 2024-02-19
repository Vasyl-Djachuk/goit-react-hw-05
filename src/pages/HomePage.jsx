import MoviesList from '../components/MoviesList/MoviesList';
import { useState, useEffect } from 'react';
import Loader from 'react-spinners/PuffLoader';
import fetchData from '../components/fetch-data-api';
import css from './HomePage.module.css';

const override = {
  display: 'block',
  margin: '0 auto',
  borderColor: 'red',
};

const HomePage = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [moviesData, setMoviesData] = useState([]);

  const fetchMovies = async () => {
    try {
      setError(false);
      setLoading(true);
      const data = await fetchData({ page: 1 });
      setMoviesData(data.results);
    } catch (error) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMovies();
  }, []);

  const color = '#6aabe4';
  return (
    <div className={css.container}>
      <Loader
        color={color}
        loading={loading}
        cssOverride={override}
        size={100}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
      {!loading && <h1 className={css.title}>Trending today</h1>}

      {!error && <MoviesList moviesData={moviesData} />}
    </div>
  );
};
export default HomePage;
