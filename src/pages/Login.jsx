import React from 'react';
import '../css/Login.css';

const Login = () => {
  return (
    <div className="login-page">
      <form className="login-form">
        <h2 className="login-title">Login to TalentFlow</h2>
        <div className="login-field">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" placeholder="Enter your email" required />
        </div>
        <div className="login-field">
          <label htmlFor="password">Password</label>
          <input type="password" id="password" name="password" placeholder="Enter your password" required />
        </div>
        <button type="submit" className="login-btn">Login</button>
        <div className="login-signup-link">
          Don't have an account? <a href="/signup">Sign Up</a>
        </div>
      </form>
    </div>
  );
};

export default Login;
