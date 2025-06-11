import React, { useState } from 'react';
import './Contact.css';
import axios from 'axios';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [notification, setNotification] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    // You can integrate backend/email service later
    try{
      await axios.post('http://localhost:5000/api/contact', formData);
      setNotification({type:'success', text:'✅ Message sent successfully!'})
      setFormData({ name: '', email: '', message: '' });
    } catch(error){
      console.error('Failed to send message:', error);
       setNotification({type:'error', text:'❌ Message sending failed... Please try again...'})
    }
    setTimeout(() => setNotification(null), 4000); 
  };

  return (
    // <form onSubmit={handleSubmit}>
    //   <input name="name" onChange={handleChange} value={formData.name} placeholder="Your Name" required />
    //   <input name="email" onChange={handleChange} value={formData.email} placeholder="Your Email" required />
    //   <textarea name="message" onChange={handleChange} value={formData.message} placeholder="Message" required />
    //   <button type="submit">Send</button>
    // </form>
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
  );
};

export default Contact;
