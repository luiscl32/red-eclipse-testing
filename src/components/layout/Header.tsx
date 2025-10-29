// Single Responsibility: Header navigation component
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="fixed top-0 w-full bg-white/90 backdrop-blur-sm shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="flex items-center justify-between h-16">
          <Link to="/" className="text-2xl font-bold text-blue-600">
            Logo
          </Link>
          <div>
            {/* Navigation items will go here */}
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
