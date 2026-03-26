import { useState } from 'react';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setFormData({ name: '', email: '', subject: '', message: '' });
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-accent via-accent-light to-accent-light text-white py-16 sm:py-24">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">Get In Touch</h1>
          <p className="text-xl opacity-90">Feel free to reach out to me for any inquiries or collaboration</p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="max-w-4xl mx-auto px-4 py-16 sm:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {/* Email */}
          <div>
            <h3 className="text-xl font-bold text-primary mb-3">Email</h3>
            <p>
              <a href="mailto:hello@example.com" className="text-primary hover:text-primary-dark hover:underline font-semibold">
                hello@example.com
              </a>
            </p>
          </div>
          
          {/* Phone */}
          <div>
            <h3 className="text-xl font-bold text-primary mb-3">Phone</h3>
            <p>
              <a href="tel:+1234567890" className="text-primary hover:text-primary-dark hover:underline font-semibold">
                +1 (234) 567-890
              </a>
            </p>
          </div>
          
          {/* Location */}
          <div>
            <h3 className="text-xl font-bold text-primary mb-3">Location</h3>
            <p className="text-gray-700">City, State, Country</p>
          </div>
        </div>

        {/* Contact Form */}
        <form onSubmit={handleSubmit} className="bg-gray-50 p-8 rounded-lg shadow-md">
          {/* Name Field */}
          <div className="mb-6">
            <label htmlFor="name" className="block text-secondary font-semibold mb-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="Your name"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-primary focus:ring-3 focus:ring-primary focus:ring-opacity-10"
            />
          </div>

          {/* Email Field */}
          <div className="mb-6">
            <label htmlFor="email" className="block text-secondary font-semibold mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="Your email"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-primary focus:ring-3 focus:ring-primary focus:ring-opacity-10"
            />
          </div>

          {/* Subject Field */}
          <div className="mb-6">
            <label htmlFor="subject" className="block text-secondary font-semibold mb-2">
              Subject
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              required
              placeholder="Message subject"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-primary focus:ring-3 focus:ring-primary focus:ring-opacity-10"
            />
          </div>

          {/* Message Field */}
          <div className="mb-6">
            <label htmlFor="message" className="block text-secondary font-semibold mb-2">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows="6"
              placeholder="Your message"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-primary focus:ring-3 focus:ring-primary focus:ring-opacity-10 resize-none"
            ></textarea>
          </div>

          {/* Submit Button */}
          <button type="submit" className="btn-primary w-full mb-4">
            Send Message
          </button>

          {/* Success Message */}
          {submitted && (
            <div className="p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg text-center animate-pulse">
              Thank you for your message! I'll get back to you soon.
            </div>
          )}
        </form>
      </section>
    </div>
  );
}

export default Contact;
