import React, { useState } from 'react';
import { LoginWrap } from './styles.js';

function Login() {
  const [showPassword, setShowPassword] = useState(false);

  const handleClick = () => {
    setShowPassword((prev) => !prev);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };

  return (
    <LoginWrap>
      <InputForm />
      <form onSubmit={handleSubmit}>
        <label>
          Email
          <input name="email" type="email" required />
        </label>
        <label>
          Password
          <input name="password" type={showPassword ? 'text' : 'password'} required />
        </label>
        <button type="submit">Submit</button>
        <button type="button" onClick={handleClick}>
          {showPassword ? 'Hide' : 'Show'} Password
        </button>
      </form>
    </LoginWrap>
  );
}

export default Login;
