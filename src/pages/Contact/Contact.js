import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can integrate backend/email service later
    alert('Message sent!');
    setForm({ name: '', email: '', message: '' });
  };

  return (
    <div className="container py-5 contact-page">
      <h2 className="text-center mb-4 text-dark">Get in Touch</h2>

      <div className="row">
        {/* Contact Info */}
        {/* <div className="col-md-5 mb-4">
          <h5>Contact Information</h5>
          <p><strong>Email:</strong> foodieblog@example.com</p>
          <p><strong>Location:</strong> Colombo, Sri Lanka</p>
          <p><strong>Follow me:</strong></p>
          <ul className="list-unstyled d-flex gap-3">
            <li><a href="#"><i className="bi bi-facebook"></i> Facebook</a></li>
            <li><a href="#"><i className="bi bi-instagram"></i> Instagram</a></li>
            <li><a href="#"><i className="bi bi-twitter-x"></i> Twitter</a></li>
          </ul>
        </div> */}

        {/* Contact Form */}
        <div className="col-md-7">
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label className="form-label">Name</label>
              <input
                type="text"
                name="name"
                className="form-control"
                value={form.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Email</label>
              <input
                type="email"
                name="email"
                className="form-control"
                value={form.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Message</label>
              <textarea
                name="message"
                className="form-control"
                rows="4"
                value={form.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>

            <button type="submit" className="btn btn-warning">Send Message</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
