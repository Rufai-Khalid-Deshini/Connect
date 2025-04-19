import React, { useEffect, useState } from 'react'
import BottomTab from '../Components/BottomTab'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { IoAddCircleOutline } from 'react-icons/io5'
import Loading from '../Components/Loading'

const Profile = () => {

    const id = localStorage.getItem("userId");
    const [info, setInfo] = useState({})
    const [loading, setLoading] = useState(false);

    useEffect(() => {

        // localStorage.setItem("profile", "posts")
        if(id) {
            setLoading(true);
            axios
                .get(`http://localhost:5555/user/${id}`)
                .then((req, res) => {
                    setInfo(req.data)
                    setLoading(false);
                })
                .catch((error) => {
                    if(error.response) {
                        alert(error.response.data.message)
                    }else {
                        alert(error.message)
                    }
                    setLoading(false);
                })
        }
    }, [])

    const navigate = useNavigate();

    return (
        <div className='dark:bg-zinc-700 dark:text-white min-h-dvh'>
            <div className='bg-gray-200 dark:bg-slate-900 w-full p-2'>
                <div className='flex flex-col items-center justify-center gap-10'>
                    <div className='w-24 h-24 rounded-full bg-gray-400 dark:bg-black outline flex items-center justify-center pl-5'>
                        <p>Upload Profile Picture</p>
                    </div>
                    <button type="button" className='flex flex-row items-center justify-center gap-2 -mb-3 -mt-5 bg-slate-500 text-white dark:bg-orange-400 px-2 py-1 rounded-full'>
                        <IoAddCircleOutline size='2em' className='' />
                        <span>Add Picture</span>
                    </button>
                    {!loading && (
                        <div className='flex flex-col items-center justify-center'>
                            <p>Username: {info.username}</p>
                            <p>Fullname: {info.fullname}</p>
                            <p>Email: {info.email}</p>
                            <p>Phone: {info.phone}</p>
                        </div>
                    )}
                    {loading && (
                        <div className='flex items-center justify-center fixed w-full h-dvh top-0'>
                            <Loading />
                        </div>
                    )}
                </div>

                {localStorage.getItem("profile") == "posts" && (
                    <div className='flex flex-row items-center justify-around'>
                        <p onClick={() => {localStorage.setItem("profile", "posts"); location.reload();}} className='text-xl font-bold pt-3 cursor-pointer border-b-slate-800 dark:border-b-white border-b-2'>Posts</p>
                        <p onClick={() => {localStorage.setItem("profile", "set"); location.reload();}} className='text-xl font-bold pt-3 cursor-pointer'>Settings</p>
                    </div>
                )}
                {localStorage.getItem("profile") == "set" && (
                    <div className='flex flex-row items-center justify-around'>
                        <p onClick={() => {localStorage.setItem("profile", "posts"); location.reload();}} className='text-xl font-bold pt-3 cursor-pointer'>Posts</p>
                        <p onClick={() => {localStorage.setItem("profile", "set"); location.reload();}} className='text-xl font-bold pt-3 cursor-pointer border-b-slate-800 dark:border-b-white border-b-2'>Settings</p>
                    </div>
                )}
                

            </div>

            <br /><br />

            

            {localStorage.getItem("userId") && <p className='bg-orange-400 text-white w-20 flex items-center justify-center m-auto p-2 rounded-full active:opacity-70 cursor-pointer selection:select-none' onClick={() => {localStorage.removeItem("userId"); localStorage.setItem("active", "home"); navigate('/')}}>Logout</p>}
            <BottomTab />
        </div>
    )
}

export default Profile