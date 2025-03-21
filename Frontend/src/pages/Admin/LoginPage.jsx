import React, { useContext, useEffect, useState } from 'react'
import { CouponContext } from '../../context/couponContext'
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {

  const {handleAdminLogin,iseAdminLogined}=useContext(CouponContext);
  const [loginCredentials, setLoginCredentials] = useState({
    name: '',
    email: '',
    password: '',
  })
const navigate=useNavigate();
  const handleChange = (e) => {
    

    const { name, value } = e.target;
    setLoginCredentials((prev) => ({ ...prev, [name]: value }));
  }

  const handleLogin = async (e) => {
    e.preventDefault();
    handleAdminLogin(loginCredentials);
  
    }
  
    useEffect(()=>{

      if(iseAdminLogined){
        navigate('/admin/dashboard')
      }


    },[iseAdminLogined])





  return (
    <div className='w-full min-h-[100vh] flex items-center justify-center'>


      <form onSubmit={handleLogin} className='m-auto p-4 w-full max-w-[600px] flex flex-col gap-4'>
        <div className='flex flex-col gap-2 items-start  w-full'>
          <label className='font-semibold text-xl'>Full Name</label>
          <input name='name' onChange={handleChange} required type='text' placeholder='Enter your full name' className='p-2 rounded-md border-2 outline-none w-full' />
        </div>
        <div className='flex flex-col gap-2 items-start  w-full'>
          <label className='font-semibold text-xl'>Email</label>
          <input name='email' onChange={handleChange}  required type='email' placeholder='Enter your email' className='p-2 rounded-md border-2 outline-none w-full' />
        </div>
        <div className='flex flex-col gap-2 items-start  w-full'>
          <label className='font-semibold text-xl'>Password</label>
          <input name='password' onChange={handleChange}  required type='password' placeholder='Enter your password' className='p-2 rounded-md border-2 outline-none w-full' />
        </div>

        <button type='submit' className='w-full p-2 mt-6 bg-black rounded-md text-white font-semibold'>Login</button>


      </form>






    </div>
  )
}

export default LoginPage