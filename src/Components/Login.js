import React, { useState } from 'react';

function LoginComponent() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    // Call API or authentication function to verify credentials
    // If successful, redirect to protected route or update state
    // If failed, display error message
  };

  return (
    <div className="login-container">
      <form onSubmit={handleSubmit} className='login-form'>
        <div className='login-group'>
        <label className='login-label'>Username or Email:</label>
        <input
          type="text"
          className='login-input'
          value={username}
          onChange={(event) => setUsername(event.target.value)}
          placeholder="Enter username or email"
        />
        <br />
        <br />
        <label className='login-label'>Password:</label>
        <input
          type="password"
          className='login-input'
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          placeholder="Enter password"
        />
        <br />
        {error && <div className="error-message">{error}</div>}
        <button className='submit-login' type="submit">Login</button>
        <br />
        <label>
          <input type="checkbox" /> Remember me
        </label>
        <br />
        <a href="#">Forgot password?</a>
        </div>
      </form>
    </div>
  );
}

export default LoginComponent;