import React from 'react';
import { Routes, Route } from 'react-router-dom';

import HomePage from './pages/HomePage';
import QuizPage from './components/features/Quiz/QuizPage';
import ResultsPage from './components/features/CareerExplorer/ResultsPage';
import CareerDetailPage from './components/features/CareerExplorer/CareerDetailPage';
import ExplorePage from './pages/ExplorePage';

import Header from './components/layout/Header';
import Footer from './components/layout/Footer';

import ErrorBoundary from './components/ErrorBoundary'; // <-- Import it

function App() {
  return (
    <div className="app-container">
      <Header />
      <main>
        <ErrorBoundary> 
          <Routes>
            
            <Route path="/" element={<HomePage />} />
            
            <Route path="/quiz" element={<QuizPage />} />
            <Route path="/results" element={<ResultsPage />} />
          
            <Route path="/explore" element={<ExplorePage />} />
            <Route path="/career/:roleName" element={<CareerDetailPage />} />
          
            <Route path="*" element={<div><h2>404 - Page Not Found</h2></div>} />
          </Routes>
        </ErrorBoundary> 
      </main>
      <Footer />
    </div>
  );
}

export default App; 