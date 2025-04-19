import React from 'react'
import { Link } from 'react-router-dom'
import { IoHome, IoHomeOutline, IoNotifications, IoNotificationsOutline, IoPerson, IoPersonOutline, IoSearch, IoSearchOutline } from 'react-icons/io5'

const BottomTab = () => {
    return (
        <div style={{gap: 1}} className='fixed bottom-0 left-0 w-full flex flex-row items-center justify-between'>

            {localStorage.getItem('active') == 'home' ? (
                <Link title='Home' to='/home' onClick={() => localStorage.setItem('active', 'home')} className='flex flex-col items-center justify-between bg-gray-400 text-black flex-1 dark:bg-slate-900 dark:text-white p-4'>
                    <IoHome size='1.8em' />
                    {/* <p>Home</p> */}
                </Link>
            ) : (
                <Link title='Home' to='/home' onClick={() => localStorage.setItem('active', 'home')} className='flex flex-col items-center justify-between bg-gray-200 text-black flex-1 dark:bg-slate-700 dark:text-white p-4'>
                    <IoHomeOutline size='1.8em' />
                    {/* <p>Home</p> */}
                </Link>
            )}

            {localStorage.getItem('active') == 'search' ? (
                <Link title='Search' to='/discover' onClick={() => localStorage.setItem('active', 'search')} className='flex flex-col items-center justify-between bg-gray-400 text-black flex-1 dark:bg-slate-900 dark:text-white p-4'>
                    <IoSearch size='1.8em' />
                    {/* <p>Search</p> */}
                </Link>
            ) : (
                <Link title='Search' to='/discover' onClick={() => localStorage.setItem('active', 'search')} className='flex flex-col items-center justify-between bg-gray-200 text-black flex-1 dark:bg-slate-700 dark:text-white p-4'>
                    <IoSearchOutline size='1.8em' />
                    {/* <p>Search</p> */}
                </Link>
            )}

            {localStorage.getItem('active') == 'notifications' ? (
                <Link title='Notifications' to='/notifications' onClick={() => localStorage.setItem('active', 'notifications')} className='flex flex-col items-center justify-between bg-gray-400 text-black flex-1 dark:bg-slate-900 dark:text-white p-4'>
                    <IoNotifications size='1.8em' />
                    {/* <p>Notifications</p> */}
                </Link>
            ) : (
                <Link title='Notifications' to='/notifications' onClick={() => localStorage.setItem('active', 'notifications')} className='flex flex-col items-center justify-between bg-gray-200 text-black flex-1 dark:bg-slate-700 dark:text-white p-4'>
                    <IoNotificationsOutline size='1.8em' />
                    {/* <p>Notifications</p> */}
                </Link>
            )}

            {localStorage.getItem('active') == 'profile' ? (
                <Link title='Profile' to='/profile' onClick={() => localStorage.setItem('active', 'profile')} className='flex flex-col items-center justify-between bg-gray-400 text-black flex-1 dark:bg-slate-900 dark:text-white p-4'>
                    {localStorage.getItem('active') == 'profile' ? <IoPerson size='1.8em' /> : <IoPersonOutline size='1.8em' />}
                    {/* <p>Profile</p> */}
                </Link>
            ) : (
                <Link title='Profile' to='/profile' onClick={() => localStorage.setItem('active', 'profile')} className='flex flex-col items-center justify-between bg-gray-200 text-black flex-1 dark:bg-slate-700 dark:text-white p-4'>
                    {localStorage.getItem('active') == 'profile' ? <IoPerson size='1.8em' /> : <IoPersonOutline size='1.8em' />}
                    {/* <p>Profile</p> */}
                </Link>
            )}
            
            
        </div>
    )
}

export default BottomTab