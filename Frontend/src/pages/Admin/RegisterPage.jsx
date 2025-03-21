import React from 'react'

const RegisterPage = () => {
    return (
        <div className='w-full min-h-[100vh] flex items-center justify-center'>


            <form className='m-auto p-4 w-full max-w-[600px] flex flex-col gap-4'>
                <div className='flex flex-col gap-2 items-start  w-full'>
                    <label className='font-semibold text-xl'>Full Name</label>
                    <input required type='text' placeholder='Enter your full name' className='p-2 rounded-md border-2 outline-none w-full' />
                </div>
                <div className='flex flex-col gap-2 items-start  w-full'>
                    <label className='font-semibold text-xl'>Email</label>
                    <input required type='email' placeholder='Enter your email' className='p-2 rounded-md border-2 outline-none w-full' />
                </div>
                <div className='flex flex-col gap-2 items-start  w-full'>
                    <label className='font-semibold text-xl'>Password</label>
                    <input required type='password' placeholder='Enter your password' className='p-2 rounded-md border-2 outline-none w-full' />
                </div>

                <button type='submit' className='w-full p-2 mt-6 bg-black rounded-md text-white font-semibold'>Register</button>


            </form>






        </div>
    )
}

export default RegisterPage