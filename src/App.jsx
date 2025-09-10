import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ParentPage from './pages/ParentPage';
import HomePage from './pages/homepage/Homepage';
import GuidelinesPage from './pages/Guidelines_Page/GuidelinesPage';
import Manual from './pages/Manual_Page/Manual';   // ✅ check path carefully

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<ParentPage />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/guidelines" element={<GuidelinesPage />} />
          <Route path="/manual" element={<Manual />} />   {/* ✅ must be /manual */}
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
