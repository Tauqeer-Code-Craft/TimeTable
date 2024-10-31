import React, { useState } from 'react';
import user from '../assets/image.png';
import { useNavigate } from 'react-router-dom';
import { supabase } from '../supabaseClient';

function LoginPage() {
  const [email, setEmail] = useState(''); // Use email instead of userName
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { user: authUser, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      alert(error.message);
      return;
    } else {
      alert('Login successful!');
      navigate('/dashboard');
    }

    if (authUser) {
    }
  };

  const handleRegister = () => {
    navigate('/register');
  };

  return (
    <div className='h-screen w-full flex flex-col items-center justify-center text-white'>
      <div className='flex flex-col md:flex-row p-6 m-10 border-2 border-bg-zinc-700 rounded-xl max-w-lg w-full'>
        <form className='w-full md:w-1/2 p-4' onSubmit={handleSubmit}>
          <h1 className='text-white p-2 text-3xl text-center'>Login</h1>
          <div className='m-2 w-full'>
            <label htmlFor="email">Email:</label>
            <br />
            <input
              type="email"
              id='email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className='w-full rounded-lg text-black mt-2 border border-gray-300 focus:border-blue-500'
              placeholder='Email'
              required
            />
          </div>
          <div className='m-2 w-full'>
            <label htmlFor="password">Password:</label>
            <br />
            <input
              type="password"
              id='password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className='w-full rounded-lg text-black mt-2 border border-gray-300 focus:border-blue-500'
              placeholder="Password"
              required
            />
          </div>
          <div>
            <input
              className="m-2 mt-4 w-full bg-blue-800 text-white text-xl p-3 rounded-lg cursor-pointer"
              type="submit"
              value="Submit"
            />
          </div>
          <div>
            <li
              className='list-none text-center text-blue-800 hover:text-blue-600 cursor-pointer'
              onClick={handleRegister}
            >
              Don't have an account?
            </li>
          </div>
        </form>
        <div className='hidden md:block w-1/2 p-4'>
          <img className='w-full object-cover mt-16' src={user} alt="User Icon" />
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
