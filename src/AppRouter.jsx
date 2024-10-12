import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// pages
import Home from './pages/Home';
import WeatherList from './pages/WeatherList';
import WeatherDetail from './pages/WeatherDetail';

import NotFoundPage from './pages/NotFoundPage';

function AppRouter() {
  return (
    <Router>
      <div className="bg-gray-200 min-h-screen">
        <Routes>
          <Route path="/" element={<WeatherList />} />
          <Route path="/weather/:province" element={<WeatherDetail />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </div>
    </Router>
  );
}
export default AppRouter;
