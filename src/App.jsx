import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import About from './pages/About';
import Works from './pages/Works';
import Contact from './pages/Contact';
import Navbar from './components/Navbar';
import Home from './pages/Home';

import './App.css'
import Presence from './pages/Presence';

function App() {
  return (
    <Router >
      <Navbar />
      <div className=''>
        <Routes>
          {/* <Route path="/home" element={<Home />} /> */}
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/works" element={<Works />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/presence" element={<Presence/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;