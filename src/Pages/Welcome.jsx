import React from 'react'
import { IoLogoFacebook } from 'react-icons/io5'
import { Link } from 'react-router-dom'

const Welcome = () => {
    return (
        <div className='dark:bg-slate-900 bg-gray-300 dark:text-white p-4 min-h-screen flex flex-col items-center justify-around gap-3'>
            <div className='flex flex-col items-center justify-center gap-5'>
                <IoLogoFacebook size='8em' className='text-orange-600' />
                <div>
                    <h1 className='text-orange-400 text-3xl text-center font-extrabold underline mb-3'>K-Connect</h1>
                    <p className='text-slate-900 dark:text-white text-center'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi iusto, optio corporis dolorum ipsa sapiente vitae rerum libero? Hic, alias repudiandae.</p>
                </div>
            </div>
           
            <div className='flex flex-col items-center justify-between gap-3'>
                <h2 className='text-2xl font-bold text-slate-900 dark:text-white'>Join the growing community today!</h2>
                <Link to='/signup' className='p-2 rounded-full dark:bg-white w-56 flex items-center justify-center bg-orange-500 text-white'>
                    <p className='dark:text-slate-900 font-bold'>Create an account</p>
                </Link>
                <Link to='/login' className='p-2 rounded-full dark:bg-white w-56 flex items-center justify-center bg-orange-500 text-white'>
                    <p className='dark:text-slate-900 font-bold'>Log in</p>
                </Link>
            </div>
        </div>
    )
}

export default Welcome