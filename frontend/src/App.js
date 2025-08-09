import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Courses from './components/Courses';
import Forum from './components/Forum';
import Contact from './components/Contact';
import Enrollment from './components/Enrollment';
import Footer from './components/Footer';
import FAQ from './components/FAQ';
import About from './components/About';
import Donate from './components/Donate';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/enroll/:courseId" element={<Enrollment />} />
          <Route path="/forum" element={<Forum />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/about" element={<About />} />
          <Route path="/donate" element={<Donate />} />
          {/* Additional routes for footer links */}
          <Route path="/blog" element={<div className="coming-soon">Blog - Coming Soon</div>} />
          <Route path="/research" element={<div className="coming-soon">Research Papers - Coming Soon</div>} />
          <Route path="/videos" element={<div className="coming-soon">Educational Videos - Coming Soon</div>} />
          <Route path="/podcasts" element={<div className="coming-soon">Wildlife Podcasts - Coming Soon</div>} />
          <Route path="/events" element={<div className="coming-soon">Upcoming Events - Coming Soon</div>} />
          <Route path="/volunteer" element={<div className="coming-soon">Volunteer Opportunities - Coming Soon</div>} />
          <Route path="/help" element={<div className="coming-soon">Help Center - Coming Soon</div>} />
          <Route path="/feedback" element={<div className="coming-soon">Feedback - Coming Soon</div>} />
          <Route path="/report" element={<div className="coming-soon">Report Issues - Coming Soon</div>} />
          <Route path="/suggestions" element={<div className="coming-soon">Suggestions - Coming Soon</div>} />
          <Route path="/privacy" element={<div className="coming-soon">Privacy Policy - Coming Soon</div>} />
          <Route path="/terms" element={<div className="coming-soon">Terms of Service - Coming Soon</div>} />
          <Route path="/cookies" element={<div className="coming-soon">Cookie Policy - Coming Soon</div>} />
          <Route path="/accessibility" element={<div className="coming-soon">Accessibility - Coming Soon</div>} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
