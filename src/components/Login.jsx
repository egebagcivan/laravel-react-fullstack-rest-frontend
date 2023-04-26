import React, { useState, useEffect } from 'react'
import axios from 'axios';

export default function Login() {
  const [error, setError] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  /**
   * Handle login form submit
   * 
   * @param {object} e 
   */
  const handleLogin = (e) => {
    e.preventDefault()
    const email = e.target.email.value;
    const password = e.target.password.value;

    axios.post(`${import.meta.env.VITE_API_URL}api/v1/login`, {
      email,
      password
    }).then((res) => {
      setError([]);
      //save the access token to local storage
      localStorage.setItem('access_token', res.data.access_token);
      setIsLoggedIn(true);
    }
    ).catch((err) => {
      setError(err?.response?.data?.errors);
    })
  }

  useEffect(() => {
    if (isLoggedIn) {
      window.location.href = '/dashboard';
    }
  }, [isLoggedIn])

  return (
    <div className='grid h-screen place-items-center text-gray-500 bg-stone-100'>
      <div className='bg-white shadow-lg p-10 w-[500px]'>
        <h1 className='text-2xl font-bold'>Login account</h1>
        <form method='POST' onSubmit={handleLogin} className='grid grid-cols-1 gap-2 py-10'>
          <div className='grid grid-cols-1 gap-2'>
            <label htmlFor='email' className='cursor-pointer text-sm font-semibold'>Email</label>
            <input type='email' name='email' id='email' placeholder='Enter your email...' className='border border-gray-200 p-2 rounded-lg' />
            <span className='text-red-500 text-sm'>{error?.email}</span>
          </div>
          <div className='grid grid-cols-1 gap-2'>
            <label htmlFor='password' className='cursor-pointer text-sm font-semibold'>Password</label>
            <input type='password' name='password' id='password' placeholder='Enter your password...' className='border border-gray-200 p-2 rounded-lg' />
            <span className='text-red-500 text-sm'>{error?.password}</span>
          </div>
          <button type='submit' className='mt-5 bg-blue-500 text-white py-2 text-center rounded-lg hover:bg-blue-600'>Login</button>
        </form>
      </div>
    </div>
  )
}

