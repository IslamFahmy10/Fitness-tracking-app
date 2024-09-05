import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Progress from './pages/Progress';
import Goals from './pages/Goals';
import Workout from './pages/Workout';
import './App.css'; // Add a CSS file for global styles

const App = () => {
  return (
    <Router>
      <div className="w-full app-container min-h-screen bg-[#E0C097] flex flex-col">
        <Navbar />
        <div className="flex-grow flex items-center justify-center">
          <div className="container mx-auto py-4">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/progress" element={<Progress />} />
              <Route path="/goals" element={<Goals />} />
              <Route path="/workout" element={<Workout />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
};

export default App;