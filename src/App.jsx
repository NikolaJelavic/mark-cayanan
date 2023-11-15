import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import About from './pages/About';
import Home from './pages/Home';
import Work from './pages/Work';
import Contact from './pages/Contact';
import Navbar from './components/Navbar';

import './App.css'

function App() {
  return (
    <Router>
      <Navbar />
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/work" element={<Work />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;