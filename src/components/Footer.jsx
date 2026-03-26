function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white/50 dark:bg-gray-900/50 backdrop-blur-md text-gray-900 dark:text-gray-200 py-8 border-t border-gray-200 dark:border-gray-800 transition-colors duration-300">
      <div className="max-w-5xl mx-auto px-4">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 flex-wrap">
          <p className="m-0 text-sm">
            &copy; {currentYear} Dev Portfolio. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a 
              href="https://github.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 hover:underline font-semibold transition-colors duration-300"
            >
              GitHub
            </a>
            <a 
              href="https://linkedin.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 hover:underline font-semibold transition-colors duration-300"
            >
              LinkedIn
            </a>
            <a 
              href="https://twitter.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 hover:underline font-semibold transition-colors duration-300"
            >
              Twitter
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
