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
      <section className="bg-gradient-to-r from-purple-700 via-purple-500 to-purple-700 text-white py-20 sm:py-32">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">Get In Touch</h1>
          <p className="text-xl opacity-90">Feel free to reach out to me for any inquiries or collaboration</p>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-4 py-16 sm:py-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div>
            <h3 className="text-xl font-bold text-purple-main mb-3">Email</h3>
            <p>
              <a href="mailto:hello@example.com" className="text-purple-main hover:text-purple-subtle hover:underline font-semibold">
                hello@example.com
              </a>
            </p>
          </div>
          <div className="info-item">
            <h3>Phone</h3>
            <p>
              <a href="tel:+1234567890">+1 (234) 567-890</a>
            </p>
          </div>
          <div className="info-item">
            <h3>Location</h3>
            <p>City, State, Country</p>
          </div>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="Your name"
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="Your email"
            />
          </div>

          <div className="form-group">
            <label htmlFor="subject">Subject</label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              required
              placeholder="Message subject"
            />
          </div>

          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows="6"
              placeholder="Your message"
            ></textarea>
          </div>

          <button type="submit" className="btn-primary btn-submit">
            Send Message
          </button>

          {submitted && (
            <div className="success-message">
              Thank you for your message! I'll get back to you soon.
            </div>
          )}
        </form>
      </section>
    </div>
  );
}

export default Contact;
