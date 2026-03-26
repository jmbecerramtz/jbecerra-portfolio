import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';

function Header() {
  const { isDark, isAutomatic, toggleTheme, toggleAutomatic } = useContext(ThemeContext);

  return (
    <header className="sticky top-0 z-50 bg-white/80 dark:bg-slate-950/80 backdrop-blur-md shadow-md transition-colors duration-300">
      <div className="max-w-5xl mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="text-gray-900 dark:text-white hover:text-blue-500 dark:hover:text-blue-400 transition-colors duration-300">
          <h1 className="text-2xl sm:text-3xl font-bold m-0">Dev Portfolio</h1>
        </Link>
        <nav className="flex gap-4 sm:gap-8 items-center">
          <Link to="/" className="text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 font-semibold transition-colors duration-300 relative group">
            Home
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-500 group-hover:w-full transition-all duration-300"></span>
          </Link>
          <Link to="/about" className="text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 font-semibold transition-colors duration-300 relative group">
            About
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-500 group-hover:w-full transition-all duration-300"></span>
          </Link>
          <Link to="/projects" className="text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 font-semibold transition-colors duration-300 relative group">
            Projects
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-500 group-hover:w-full transition-all duration-300"></span>
          </Link>
          <Link to="/contact" className="text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 font-semibold transition-colors duration-300 relative group">
            Contact
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-500 group-hover:w-full transition-all duration-300"></span>
          </Link>
          
          {/* Theme Toggle Buttons */}
          <div className="flex gap-2 ml-4 pl-4 border-l border-gray-200 dark:border-gray-700">
            <button
              onClick={toggleAutomatic}
              className={`px-3 py-1 rounded-lg transition-all duration-300 ${
                isAutomatic
                  ? 'bg-blue-500/20 text-blue-600 dark:text-blue-400'
                  : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400'
              }`}
              title="Toggle automatic theme (6 PM - 6 AM)"
            >
              ⏰
            </button>
            <button
              onClick={toggleTheme}
              className="px-3 py-1 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-300"
              title="Toggle light/dark mode"
            >
              {isDark ? '☀️' : '🌙'}
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Header;
