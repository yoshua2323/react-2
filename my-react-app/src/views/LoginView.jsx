import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../slices/authSlice';

const LoginView = () => {
  const [form, setForm] = useState({ username: '', password: '' });
  const dispatch = useDispatch();

  const handleLogin = (e) => {
    e.preventDefault();
    dispatch(login());
    console.log('Login', form);
  };

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  return (
    <div>
      <h1>Iniciar sesión</h1>
      <form onSubmit={handleLogin}>
        <input name="username" type="text" placeholder="Username" onChange={handleFormChange} />
        <input name="password" type="password" placeholder="Password" onChange={handleFormChange} />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default LoginView;
