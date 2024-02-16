import 'modern-normalize';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import MoviesPage from '../pages/MoviesPage';
import MoviesDetailPage from '../pages/MoviesDetailPage';
import MoviesCast from './MoviesCast/MoviesCast';
import Reviews from './Reviews/Reviews';
import Header from './Header/Header';

import { useState, useEffect } from 'react';

const App = () => {
  return (
    <>
      <div className="">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/movies" element={<MoviesPage />} />
          <Route path="/movies/:moviesId" element={<MoviesDetailPage />}>
            <Route path="cast" element={<MoviesCast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
          <Route path="*" element={<HomePage />} />
        </Routes>
      </div>
    </>
  );
};

export default App;
