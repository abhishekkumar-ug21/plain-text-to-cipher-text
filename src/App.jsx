import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
// import GenerateCipher from './components/GenerateCipher';
import Greeting from './components/Greeting'; // Import your Greeting component

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        {/* <Route path="/generate-cipher" element={<GenerateCipher />} /> */}
        <Route path="/greeting" element={<Greeting />} /> {/* Set Greeting as default route */}
      </Routes>
    </Router>
  );
}

export default App;
