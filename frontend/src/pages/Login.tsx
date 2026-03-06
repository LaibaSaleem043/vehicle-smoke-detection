import React from 'react';
import './Login.css';

const Login: React.FC = () => {
  return (
    <div className="login-container">
      <div className="login-box">
        <h1>Vehicle Smoke Detection & Reporting System</h1>
        <p>Secure Access Portal</p>
        <form className="login-form">
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input type="text" id="username" placeholder="Enter your username" />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" placeholder="Enter your password" />
          </div>
          <button type="submit" className="login-button">
            Secure Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
