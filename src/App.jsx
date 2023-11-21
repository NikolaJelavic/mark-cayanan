import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import About from './pages/About';
import Works from './pages/Works';
import Contact from './pages/Contact';
import Navbar from './components/Navbar';

import './App.css'

function App() {
  return (
    <Router>
      <Navbar />
      <div>
        <Routes>
          {/* <Route path="/home" element={<Home />} /> */}
          <Route path="/mark-cayanan/about" element={<About />} />
          <Route path="/mark-cayanan/works" element={<Works />} />
          <Route path="/mark-cayanan/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;