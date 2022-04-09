import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { BreweryList } from './components/BreweryList/BreweryList';
import { UserProvider } from './components/Context/UserContext';
import { HomePage } from './components/HomePage/HomePage';

function App() {
  return (
    <UserProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/brewery-list" element={<BreweryList />} />
        </Routes>
      </BrowserRouter>
    </UserProvider>
  );
}

export default App;

