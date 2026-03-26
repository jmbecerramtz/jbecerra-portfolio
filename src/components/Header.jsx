import { Link } from 'react-router-dom';
import { useContext, useState } from 'react';
import { ThemeContext } from '../context/ThemeContext';

function Header() {
  const { isDark, isAutomatic, toggleTheme, toggleAutomatic } = useContext(ThemeContext);
  const [showContactDropdown, setShowContactDropdown] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="flex flex-col gap-4 items-center md:max-w-[600px] mx-auto px-7 py-4 rounded-b-[20px] bg-white/80 dark:bg-slate-950/80 backdrop-blur-md shadow-md transition-colors duration-300">
        <Link to="/" className="text-gray-900 dark:text-white hover:text-purple-500 dark:hover:text-purple-400 transition-colors duration-300">
          <h1 className="text-2xl sm:text-3xl font-bold m-0">Dev Portfolio</h1>
        </Link>
        <nav className="flex gap-4 sm:gap-8 items-center">
          <Link to="/" className="text-gray-600 dark:text-gray-300 hover:text-purple-500 dark:hover:text-purple-400 font-semibold transition-colors duration-300 relative group">
            Home
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-purple-500 group-hover:w-full transition-all duration-300"></span>
          </Link>
          <Link to="/about" className="text-gray-600 dark:text-gray-300 hover:text-purple-500 dark:hover:text-purple-400 font-semibold transition-colors duration-300 relative group">
            About
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-purple-500 group-hover:w-full transition-all duration-300"></span>
          </Link>
          <Link to="/projects" className="text-gray-600 dark:text-gray-300 hover:text-purple-500 dark:hover:text-purple-400 font-semibold transition-colors duration-300 relative group">
            Projects
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-purple-500 group-hover:w-full transition-all duration-300"></span>
          </Link>

          {/* Contact Dropdown */}
          <div className="relative">
            <button
              onMouseEnter={() => setShowContactDropdown(true)}
              onMouseLeave={() => setShowContactDropdown(false)}
              className="text-gray-600 dark:text-gray-300 hover:text-purple-500 dark:hover:text-purple-400 font-semibold transition-colors duration-300 relative group flex items-center gap-1"
            >
              Contact
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-purple-500 group-hover:w-full transition-all duration-300"></span>
            </button>

            {/* Dropdown Menu */}
            {showContactDropdown && (
              <div
                className="absolute top-full bg-white/80 dark:bg-slate-950/90 backdrop-blur-md shadow-md transition-colors duration-300 rounded-lg shadow-lg py-3 px-4 min-w-max z-50 animate-in fade-in duration-1000"
                onMouseEnter={() => setShowContactDropdown(true)}
                onMouseLeave={() => setShowContactDropdown(false)}
              >
                <div className="space-y-3">
                  <div>
                    <p className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wide mb-1">Email</p>
                    <a href="mailto:hello@example.com" className="text-gray-900 dark:text-white hover:text-purple-500 dark:hover:text-purple-400 font-medium transition-colors duration-300">
                      hello@example.com
                    </a>
                  </div>
                  <div className="border-t border-gray-200 dark:border-gray-700 pt-3">
                    <p className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wide mb-1">Phone</p>
                    <a href="tel:+15551234567" className="text-gray-900 dark:text-white font-medium hover:text-purple-500 dark:hover:text-purple-400 transition-colors duration-300">
                      +1 (555) 123-4567
                    </a>
                  </div>
                  <div className="border-t border-gray-200 dark:border-gray-700 pt-3">
                    <p className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wide mb-1">Location</p>
                    <p className="text-gray-900 dark:text-white font-medium">San Francisco, CA</p>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Theme Toggle Buttons */}
          <div className="flex gap-2 ml-4 pl-4 border-l border-gray-200 dark:border-gray-700">
            <button
              className="px-3 py-1 rounded-lg transition-all duration-300 font-medium text-xs dark:text-gray-200 text-gray-400"
              aria-label="Theme Mode"
            >
              Theme Mode
            </button>
            <button
              onClick={toggleTheme}
              className="px-2 py-1 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-300 font-medium text-xs"
              aria-pressed={!isAutomatic && isDark}  // Adjust based on logic
            >
              {isDark ? 'Light ☀️' : 'Dark 🌙'}
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Header;
