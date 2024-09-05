import { Link } from 'react-router-dom';
import { HomeIcon, ClipboardDocumentListIcon, ChartBarIcon } from '@heroicons/react/24/solid';

const Navbar = () => {
  return (
    <nav className="bg-[#2D2424] text-white p-4 flex justify-between items-center w-full">
      <h1 className="text-xl font-bold">Fitness Tracker</h1>
      <div className="space-x-4 flex">
        <Link to="/" className="flex items-center space-x-1">
          <HomeIcon className="h-5 w-5" />
          <span>Home</span>
        </Link>
        <Link to="/progress" className="flex items-center space-x-1">
          <ChartBarIcon className="h-5 w-5" />
          <span>Progress</span>
        </Link>
        <Link to="/goals" className="flex items-center space-x-1">
          <ClipboardDocumentListIcon className="h-5 w-5" />
          <span>Goals</span>
        </Link>
        <Link to="/workout" className="flex items-center space-x-1">
          <ClipboardDocumentListIcon className="h-5 w-5" />
          <span>Workout</span>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;