import { Link } from 'react-router-dom';
import { HomeIcon, ClipboardDocumentListIcon, ChartBarIcon } from '@heroicons/react/24/solid';

const Header = () => {
  return (
    <header className="bg-blue-500 text-white p-4 flex justify-between items-center">
      <h1 className="text-xl font-bold">Fitness Tracker</h1>
      <nav className="flex space-x-4">
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
      </nav>
    </header>
  );
};

export default Header;