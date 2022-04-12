//import './App.css';
import './scss/App.scss';
import { Routes, Route } from 'react-router-dom';
import LandingPage from './components/LandingPage/LandingPage.jsx';
import Home from './components/Home/Home.jsx';
import Details from './components/Details/Details.jsx';
import TourActivity from './components/Tour_Activity/TourActivity.jsx'

function App() {
  return (
    <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/home" element={<Home />} />
        <Route path="/Country/:id" element={<Details />} />
        <Route path="/TourActivity" element={<TourActivity />} />
    </Routes>
  );
}

export default App;
