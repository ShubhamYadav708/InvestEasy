import React, { useState } from 'react';
import './Register.css';

const Register = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="register">
      <section className="form-section">
        <h2>Register</h2>
        <form onSubmit={handleSubmit}>
          <input 
            type="text" 
            name="username" 
            value={formData.username} 
            onChange={handleChange} 
            placeholder="Username" 
            className="input-field" 
          />
          <input 
            type="email" 
            name="email" 
            value={formData.email} 
            onChange={handleChange} 
            placeholder="Email" 
            className="input-field" 
          />
          <input 
            type="password" 
            name="password" 
            value={formData.password} 
            onChange={handleChange} 
            placeholder="Password" 
            className="input-field" 
          />
          <button type="submit" className="submit-btn">Register</button>
        </form>
      </section>
    </div>
  );
}

export default Register;
