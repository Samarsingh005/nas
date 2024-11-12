import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { SpinWheel } from './components/SpinWheel';
import { Quiz } from './components/Quiz';
import { LawChatbot } from './components/LawChatbot';
import { Scenarios } from './components/Scenarios';
import { Home } from './components/home/Home';
import { FaHome, FaDharmachakra, FaQuestion, FaRobot, FaBookReader } from 'react-icons/fa';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
        <nav className="bg-white/80 backdrop-blur-md shadow-lg sticky top-0 z-50">
          <div className="max-w-6xl mx-auto px-4">
            <div className="flex items-center justify-center h-16 space-x-8">
              <Link to="/" className="nav-link group">
                <div className="flex flex-col items-center">
                  <FaHome className="text-xl text-blue-600 group-hover:text-blue-800 transition-colors" />
                  <span className="text-sm mt-1">Home</span>
                </div>
              </Link>
              <Link to="/spin" className="nav-link group">
                <div className="flex flex-col items-center">
                  <FaDharmachakra className="text-xl text-blue-600 group-hover:text-blue-800 transition-colors" />
                  <span className="text-sm mt-1">Spin</span>
                </div>
              </Link>
              <Link to="/quiz" className="nav-link group">
                <div className="flex flex-col items-center">
                  <FaQuestion className="text-xl text-blue-600 group-hover:text-blue-800 transition-colors" />
                  <span className="text-sm mt-1">Quiz</span>
                </div>
              </Link>
              <Link to="/chatbot" className="nav-link group">
                <div className="flex flex-col items-center">
                  <FaRobot className="text-xl text-blue-600 group-hover:text-blue-800 transition-colors" />
                  <span className="text-sm mt-1">Chatbot</span>
                </div>
              </Link>
              <Link to="/scenarios" className="nav-link group">
                <div className="flex flex-col items-center">
                  <FaBookReader className="text-xl text-blue-600 group-hover:text-blue-800 transition-colors" />
                  <span className="text-sm mt-1">Scenarios</span>
                </div>
              </Link>
            </div>
          </div>
        </nav>

        <main className="container mx-auto py-8 px-4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/spin" element={<SpinWheel />} />
            <Route path="/quiz" element={<Quiz />} />
            <Route path="/chatbot" element={<LawChatbot />} />
            <Route path="/scenarios" element={<Scenarios />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;