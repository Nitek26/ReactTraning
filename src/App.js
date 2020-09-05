import React from 'react';
import './App.css';
import HomePage from './components/HomePage/HomePage';
import ErrorBoundary from './components/ErrorBoundary';

function App() {
  return (
    <div className="App">
      <ErrorBoundary>
        <HomePage />
      </ErrorBoundary>
    </div>
  );
}

export default App;
