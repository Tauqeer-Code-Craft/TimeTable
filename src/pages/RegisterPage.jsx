import React, { useState } from 'react';
import user from '../assets/image.png';
import { useNavigate } from 'react-router-dom';
import { supabase } from '../supabaseClient';

function RegisterPage() {
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phone, setPhone] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { user: authUser, error: signupError } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: {
          userName,
          phone,
        },
      },
    });

    if (signupError) {
      alert(signupError.message);
      return;
    }

    const { error: insertError } = await supabase
      .from('profiles')
      .insert([{
        user_id: authUser.id,
        username: userName,
        email,
        phone,
      }]);

    if (insertError) {
      alert(insertError.message);
    } else {
      alert("Registration successful! Check your email for verification.");
      navigate('/login');
    }
  };

  const handleLogin = () => {
    navigate('/login');
  };

  return (
    <div className='h-screen w-full flex flex-col items-center justify-center text-white'>
      <div className='flex flex-col md:flex-row p-6 m-10 border-2 border-bg-zinc-700 rounded-xl max-w-lg w-full'>
        <form className='w-full md:w-1/2 p-4' onSubmit={handleSubmit}>
          <h1 className='text-white p-2 text-3xl text-center'>Register</h1>
          <div className='m-2 w-full'>
            <label htmlFor="userName">Username: </label>
            <br />
            <input
              type="text"
              id='userName'
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
              className='w-full rounded-lg text-black mt-2 border border-gray-300 focus:border-blue-500'
              placeholder='Username'
              required
            />
          </div>
          <div className='m-2 w-full'>
            <label htmlFor="email">Email: </label>
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
            <label htmlFor="password">Password: </label>
            <br />
            <input
              type="password"
              id='password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className='w-full rounded-lg text-black mt-2 border border-gray-300 focus:border-blue-500'
              placeholder='Password'
              required
            />
          </div>
          <div className='m-2 w-full'>
            <label htmlFor="phone">Phone Number: </label>
            <br />
            <input
              type="tel"
              id='phone'
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className='w-full rounded-lg text-black mt-2 border border-gray-300 focus:border-blue-500'
              placeholder='Phone Number'
              required
            />
          </div>
          <div>
            <input
              className="m-2 mt-4 w-full bg-blue-800 text-white text-xl p-3 rounded-lg cursor-pointer"
              type="submit"
              value="Register"
            />
          </div>
          <div>
            <li
              className='list-none text-center text-blue-800 hover:text-blue-600 cursor-pointer'
              onClick={handleLogin}
            >
              Already have an account?
            </li>
          </div>
        </form>
        <div className='hidden md:block w-1/2 p-4'>
          <img className='w-full object-cover mt-20' src={user} alt="User Icon" />
        </div>
      </div>
    </div>
  );
}

export default RegisterPage;
