import React from 'react'
import { NavLink } from 'react-router-dom'

export const Header = () => {
  return (
    <div className='w-full flex items-center justify-between'>
       <h1 className='font-bold text-4xl text-black'> Coupon Claim System</h1>
        <NavLink to={'/admin/login'} className='p-2 border text-black rounded-md hover:bg-black hover:text-white'>
            Admin 
            Login
        </NavLink>


    </div>
  )
}
