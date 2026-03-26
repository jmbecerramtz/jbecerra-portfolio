import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-purple-700 via-purple-500 to-purple-700 text-white py-20 sm:py-32">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">Hi, I'm a Developer</h1>
          <p className="text-xl sm:text-2xl mb-6 font-semibold opacity-95">
            Creating beautiful and functional web experiences
          </p>
          <p className="text-lg sm:text-xl mb-8 opacity-90 max-w-2xl mx-auto leading-relaxed">
            I specialize in building modern web applications using React, 
            Node.js, and other cutting-edge technologies.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center flex-wrap">
            <Link to="/projects" className="btn-primary">
              View My Work
            </Link>
            <Link to="mailto:hello@example.com" className="btn-secondary">
              Get In Touch
            </Link>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="max-w-5xl mx-auto px-4 py-16 sm:py-24">
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-light-text dark:text-dark-text mb-12 transition-colors duration-300">Skills & Technologies</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-light-surface-glass dark:bg-gradient-to-t from-purple-700 via-purple-500 to-purple-700 backdrop-blur-glass p-8 rounded-2xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
            <h3 className="text-2xl font-bold text-light-purple dark:text-dark-purple mb-6">Frontend</h3>
            <ul className="space-y-3">
              <li className="flex items-center text-light-text-secondary dark:text-dark-text-secondary">
                 React
              </li>
              <li className="flex items-center text-light-text-secondary dark:text-dark-text-secondary">
                 JavaScript/TypeScript
              </li>
              <li className="flex items-center text-light-text-secondary dark:text-dark-text-secondary">
                 HTML/CSS
              </li>
              <li className="flex items-center text-light-text-secondary dark:text-dark-text-secondary">
                 Responsive Design
              </li>
            </ul>
          </div>
          <div className="bg-light-surface-glass dark:bg-gradient-to-t from-purple-700 via-purple-500 to-purple-700 backdrop-blur-glass p-8 rounded-2xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
            <h3 className="text-2xl font-bold text-light-purple dark:text-dark-purple mb-6">Backend</h3>
            <ul className="space-y-3">
              <li className="flex items-center text-light-text-secondary dark:text-dark-text-secondary">
                 Node.js
              </li>
              <li className="flex items-center text-light-text-secondary dark:text-dark-text-secondary">
                 Express
              </li>
              <li className="flex items-center text-light-text-secondary dark:text-dark-text-secondary">
                 MongoDB
              </li>
              <li className="flex items-center text-light-text-secondary dark:text-dark-text-secondary">
                 PostgreSQL
              </li>
            </ul>
          </div>
          <div className="bg-light-surface-glass dark:bg-gradient-to-t from-purple-700 via-purple-500 to-purple-700 backdrop-blur-glass p-8 rounded-2xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
            <h3 className="text-2xl font-bold text-light-purple dark:text-dark-purple mb-6">Tools & Others</h3>
            <ul className="space-y-3">
              <li className="flex items-center text-light-text-secondary dark:text-dark-text-secondary">
                 Git/GitHub
              </li>
              <li className="flex items-center text-light-text-secondary dark:text-dark-text-secondary">
                 Docker
              </li>
              <li className="flex items-center text-light-text-secondary dark:text-dark-text-secondary">
                 REST APIs
              </li>
              <li className="flex items-center text-light-text-secondary dark:text-dark-text-secondary">
                 Agile
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="bg-light-surface dark: bg-dark-surface py-16 sm:py-24 transition-colors duration-300">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-light-text dark:text-dark-text mb-4 transition-colors duration-300">Featured Projects</h2>
          <p className="text-lg text-light-text-secondary dark:text-dark-text-secondary mb-8 transition-colors duration-300">Check out some of my recent work</p>
          <Link to="/projects" className="btn-primary inline-block">
            View All Projects
          </Link>
        </div>
      </section>
    </div>
  );
}

export default Home;
