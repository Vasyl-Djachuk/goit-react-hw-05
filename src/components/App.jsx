import 'modern-normalize';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import { Suspense, lazy } from 'react';

const HomePage = lazy(() => import('../pages/HomePage'));
const MoviesPage = lazy(() => import('../pages/MoviesPage'));
const MoviesDetailPage = lazy(() => import('../pages/MoviesDetailPage'));
const MoviesCast = lazy(() => import('./MoviesCast/MoviesCast'));
const Reviews = lazy(() => import('./Reviews/Reviews'));
const Header = lazy(() => import('./Header/Header'));

const App = () => {
  return (
    <>
      <div className="cont">
        <Header />
        <Suspense fallback={<div>Loading page...</div>}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/movies" element={<MoviesPage />} />
            <Route path="/movies/:moviesId" element={<MoviesDetailPage />}>
              <Route path="cast" element={<MoviesCast />} />
              <Route path="reviews" element={<Reviews />} />
            </Route>
            <Route path="*" element={<HomePage />} />
          </Routes>
        </Suspense>
      </div>
    </>
  );
};

export default App;
