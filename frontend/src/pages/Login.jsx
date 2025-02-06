import React, { useState } from 'react';
import './Login.css';

const Login = () => {
  const [formData, setFormData] = useState({
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
    <div className="login">
      <section className="form-section">
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
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
          <button type="submit" className="submit-btn">Login</button>
        </form>
      </section>
    </div>
  );
}

export default Login;
