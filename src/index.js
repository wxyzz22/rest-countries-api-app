import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import CountrySingle from './components/country-single';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CountryAll from './components/country-all';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<CountryAll />} />
        <Route path=":countryCode" element={<CountrySingle />} />
      </Route>
      <Route
      path="*"
      element={
        <main style={{ padding: "1rem" }}>
          <p>There's nothing here!</p>
        </main>
      } />
    </Routes>
  </Router>
);

reportWebVitals();
