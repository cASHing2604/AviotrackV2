// src/App.js
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ParentPage from './pages/ParentPage';
import HomePage from './pages/homepage/Homepage';              // don’t forget to import HomePage
import GuidelinesPage from './pages/Guidelines_Page/GuidelinesPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<ParentPage />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/guidelines" element={<GuidelinesPage />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
