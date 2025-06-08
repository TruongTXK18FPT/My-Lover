import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Journey from './pages/Journey';
import Gallery from './pages/Gallery';
import Letters from './pages/Letters';
import Surprise from './pages/Surprise';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import AdminPanel from './components/AdminPanel';
import './App.css';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time for initial animation
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  if (loading) {
    return (
      <div className="loading-screen">
        <div className="heart-loader"></div>
        <p>Loading our love story...</p>
      </div>
    );
  }

  return (
    <div className="app">
      <Navigation />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/journey" element={<Journey />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/letters" element={<Letters />} />
          <Route path="/surprise" element={<Surprise />} />
          <Route path="/admin" element={<AdminPanel />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
