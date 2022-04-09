import React from 'react';
import { render } from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { BreweryList } from './BreweryList/BreweryList';

render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/brewery-list" element={<BreweryList />} />
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);
