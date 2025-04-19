import React from 'react'
import BottomTab from '../Components/BottomTab'
import { IoSearch } from 'react-icons/io5'

const Search = () => {
    return (
        <div className='dark:bg-zinc-700 dark:text-white min-h-dvh p-3'>
            <div className='flex flex-row items-center justify-around w-11/12 mx-auto outline-1 outline outline-gray-500 rounded-full p-1 dark:bg-zinc-800'>
                <IoSearch color='gray' size='1.4em' />
                <input className='w-full bg-transparent outline-none p-2' type="search" name="search" id="search" placeholder='Search here...' />
            </div>
            <BottomTab />
        </div>
    )
}

export default Search