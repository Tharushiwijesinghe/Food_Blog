import React, { useState } from 'react';
import '../Styles/Contact.css';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [notification, setNotification] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    emailjs.send(
      'service_dk97pko',      // e.g., 'gmail'
      'template_7642zwn',     // e.g., 'contact_form_template'
      formData,               // your form data
      'WVDoE30Gx-jIdMPya'       // e.g., 'abcd123456xyz'
    )
    .then((response) => {
      console.log('SUCCESS!', response.status, response.text);
      setNotification({ type: 'success', text: '✅ Message sent successfully!' });
      setFormData({ name: '', email: '', message: '' });
      }, (err) => {
        console.error('FAILED...', err);
        setNotification({ type: 'error', text: '❌ Failed to send message.' });
      });

    setTimeout(() => setNotification(null), 4000);
  };
  return (
    <div className="contact-container py-5 d-flex flex-column align-items-center"> 
     <div className="contact-page">
     <h2>Contact Us</h2>
      {notification && (
        <div className={`notification ${notification.type}`}>
          {notification.text}
        </div>
      )}
      <form onSubmit={handleSubmit} className="contact-form">
        <input
          name="name"
          onChange={handleChange}
          value={formData.name}
          placeholder="Your Name"
          required
        />
        <input
          name="email"
          type="email"
          onChange={handleChange}
          value={formData.email}
          placeholder="Your Email"
          required
        />
        <textarea
          name="message"
          onChange={handleChange}
          value={formData.message}
          placeholder="Your Message"
          required
        />
        <button type="submit">Send</button>
      </form>
    </div>
  </div>
  );
};

export default Contact;
