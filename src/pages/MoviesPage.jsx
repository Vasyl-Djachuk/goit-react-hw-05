import { useSearchParams } from 'react-router-dom';
import fetchData from '../components/fetch-data-api';
import Loader from 'react-spinners/PuffLoader';
import { useState, useEffect } from 'react';
import SearchBox from '../components/SearchBox/SearchBox';
import MoviesList from '../components/MoviesList/MoviesList';

const override = {
  display: 'block',
  margin: '0 auto',
  borderColor: 'red',
};

const MoviesPage = () => {
  const [loading, setLoading] = useState(false);
  const [moviesData, setMoviesData] = useState();
  const [searchParams, setSearchParams] = useSearchParams();
  const [query, setQuery] = useState(searchParams.get('query'));

  useEffect(() => {
    if (query === null) return;
    const fetchMovies = async q => {
      try {
        setLoading(true);
        const data = await fetchData({ query: q });
        setMoviesData(data.results);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    fetchMovies(query);
  }, [query]);

  const changeQuery = text => {
    setSearchParams({ query: text });
    setQuery(text);
  };

  const color = '#6aabe4';

  return (
    <div>
      <SearchBox changeQuery={changeQuery} />
      <Loader
        color={color}
        loading={loading}
        cssOverride={override}
        size={100}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
      {moviesData && moviesData.length > 0 && (
        <MoviesList moviesData={moviesData} />
      )}
      {moviesData && moviesData.length === 0 && (
        <p>
          Sorry, there are no movies matching your search query. Please try
          again!
        </p>
      )}
    </div>
  );
};
export default MoviesPage;
