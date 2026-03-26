function About() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 via-purple-500 to-purple-700 text-white py-16 sm:py-24">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold m-0">About Me</h1>
        </div>
      </section>

      {/* Content Section */}
      <section className="max-w-4xl mx-auto px-4 py-16 sm:py-24">
        {/* Who Am I */}
        <div className="mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-secondary border-b-4 border-primary pb-3 mb-8">
            Who Am I?
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            I'm a full-stack web developer passionate about creating beautiful, 
            functional, and user-friendly web applications. With a strong foundation 
            in both frontend and backend technologies, I enjoy solving complex problems 
            and bringing creative ideas to life.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            I started my journey in web development after recognizing the power 
            of technology to solve real-world problems. Since then, I've been 
            continuously learning and improving my skills to stay up-to-date 
            with the latest industry trends and best practices.
          </p>
        </div>

        {/* Experience */}
        <div className="mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-secondary border-b-4 border-primary pb-3 mb-8">
            Experience
          </h2>
          <div className="space-y-6">
            <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-primary hover:shadow-lg transition-shadow duration-300">
              <h3 className="text-2xl font-bold text-secondary mb-1">Senior Developer</h3>
              <p className="text-primary font-semibold mb-3 block">Tech Company Inc. | 2022 - Present</p>
              <p className="text-gray-700 leading-relaxed">
                Led development of multiple full-stack applications, mentored junior developers, 
                and improved system performance by 40%.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-primary hover:shadow-lg transition-shadow duration-300">
              <h3 className="text-2xl font-bold text-secondary mb-1">Full-Stack Developer</h3>
              <p className="text-primary font-semibold mb-3 block">StartUp Studio | 2020 - 2022</p>
              <p className="text-gray-700 leading-relaxed">
                Built and deployed web applications using React and Node.js, 
                implemented responsive designs, and managed databases.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-primary hover:shadow-lg transition-shadow duration-300">
              <h3 className="text-2xl font-bold text-secondary mb-1">Junior Developer</h3>
              <p className="text-primary font-semibold mb-3 block">Digital Agency | 2019 - 2020</p>
              <p className="text-gray-700 leading-relaxed">
                Developed frontend components, fixed bugs, and assisted in 
                project maintenance and optimization.
              </p>
            </div>
          </div>
        </div>

        {/* Education */}
        <div>
          <h2 className="text-3xl sm:text-4xl font-bold text-secondary border-b-4 border-primary pb-3 mb-8">
            Education
          </h2>
          <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-primary">
            <h3 className="text-2xl font-bold text-secondary mb-2">Bachelor of Science in Computer Science</h3>
            <p className="text-primary font-semibold">University Name | Graduated 2019</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
