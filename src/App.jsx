import React from 'react';
import { Routes, Route } from 'react-router-dom';

// Import Page Components
import HomePage from './pages/HomePage';
import QuizPage from './components/features/Quiz/QuizPage';
import ResultsPage from './components/features/CareerExplorer/ResultsPage';
import CareerDetailPage from './components/features/CareerExplorer/CareerDetailPage';
import ExplorePage from './pages/ExplorePage';

// Import Layout Components
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
// Import the Error Boundary
import ErrorBoundary from './components/ErrorBoundary'; // <-- Import it

function App() {
  return (
    <div className="app-container">
      <Header />
      <main>
        <ErrorBoundary> {/* Wrap your routes in the Error Boundary */}
          <Routes>
            {/* Public Route */}
            <Route path="/" element={<HomePage />} />
            
            {/* Quiz Flow */}
            <Route path="/quiz" element={<QuizPage />} />
            <Route path="/results" element={<ResultsPage />} />
            
            {/* Career Exploration */}
            <Route path="/explore" element={<ExplorePage />} />
            <Route path="/career/:roleName" element={<CareerDetailPage />} />
            
            {/* Fallback for 404 Not Found */}
            <Route path="*" element={<div><h2>404 - Page Not Found</h2></div>} />
          </Routes>
        </ErrorBoundary> {/* Close the Error Boundary wrapper */}
      </main>
      <Footer />
    </div>
  );
}

export default App; 