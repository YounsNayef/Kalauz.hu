import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import CategoriesPage from './pages/CategoriesPage';
import EmergencyPage from './pages/EmergencyPage';
import TourismPage from './pages/TourismPage';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/categories" element={<CategoriesPage />} />
          <Route path="/emergency" element={<EmergencyPage />} />
          <Route path="/tourism" element={<TourismPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;