import axios from 'axios';
import React, { useState } from 'react'
import { IoEye, IoEyeOff } from 'react-icons/io5';
import { Link, useNavigate } from 'react-router-dom';
import Loading from '../Components/Loading';
import SnackbarComponent from '../Components/SnackbarComponent';

const Signup = () => {

    const navigate = useNavigate();

    const [fullname, setFullname] = useState('');
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [snackbar, setSnackbar] = useState({
        message: '',
        open: false,
        severity: ''
    })

    const handleClose = () => {
        setSnackbar({ ...snackbar, open: false })
    }

    const signup = (e) => {

        e.preventDefault();

        const formData = {
            username,
            fullname,
            email,
            phone,
            password
        }

        setLoading(true);
        axios
            .post('https://connect-backend-x2ns.onrender.com/user', formData)
            .then((req, res) => {
                localStorage.setItem("userId", req.data._id);
                navigate('/home');
                setEmail('');
                setFullname('');
                setPassword('');
                setPhone('');
                setUsername('');
                setSnackbar({
                    message: 'Your account was successfully created.',
                    open: true,
                    severity: 'success'
                })
            })
            .catch((error) => {
                setLoading(false)
                setSnackbar({
                    message: error.response.data.message,
                    open: true,
                    severity: 'error'
                })
            })
    }

    const see = (e) => {
        let password = document.getElementById("password");
        if(password.type == 'password') {
            password.type = "text";
            document.getElementById("eye1").classList.add("hidden");
            document.getElementById("eye2").classList.remove("hidden");
        }else {
            password.type = "password";
            document.getElementById("eye2").classList.add("hidden");
            document.getElementById("eye1").classList.remove("hidden");
        }
    }

    return (
        <div className='dark:bg-slate-950 dark:text-white min-h-screen p-3'>
            <div className='flex flex-col items-center justify-center gap-4 mb-12'>
                <h1 className='font-extrabold text-3xl'>K Connect</h1>
                <h2 className='font-semibold text-2xl'>Create an Account</h2>
            </div>

            {loading && (
                <div className='flex items-center justify-center fixed w-full h-dvh top-0'>
                    <Loading />
                </div>
            )}

            <SnackbarComponent
                message={snackbar.message}
                open={snackbar.open}
                severity={snackbar.severity}
                handleClose={handleClose}
            />

            <form onSubmit={signup} className='bg-gray-300 dark:bg-slate-600 rounded p-2 mt-5 flex flex-col items-center justify-center gap-4 w-10/12 m-auto'>
                <div className='flex flex-col items-center w-full mt-3'>
                    <label className='text-xl mb-1' htmlFor="fullname">Fullname</label>
                    <input value={fullname} onChange={(e) => setFullname(e.target.value)} className='outline-none dark:text-black p-2 w-10/12' type="text" name="fullname" id="fullname" autoFocus required />
                </div>
                <div className='flex flex-col items-center w-full mt-3'>
                    <label className='text-xl mb-1' htmlFor="username">Username</label>
                    <input value={username} onChange={(e) => setUsername(e.target.value)} className='outline-none dark:text-black p-2 w-10/12' type="text" name="username" id="username" required />
                </div>
                <div className='flex flex-col items-center w-full'>
                    <label className='text-xl mb-1' htmlFor="email">Email</label>
                    <input value={email} onChange={(e) => setEmail(e.target.value)} className='outline-none dark:text-black p-2 w-10/12' type="email" name="email" id="email" required />
                </div>
                <div className='flex flex-col items-center w-full'>
                    <label className='text-xl mb-1' htmlFor="phone">Phone</label>
                    <input value={phone} onChange={(e) => setPhone(e.target.value)} className='outline-none dark:text-black p-2 w-10/12' type="tel" name="phone" id="phone" required />
                </div>
                <div className='flex flex-col items-center mt-3 w-full'>
                    <label className='text-xl mb-1' htmlFor="password">Password</label>
                    <div className='flex flex-row items-center justify-between dark:text-black bg-white p-1 w-10/12'>
                        <input className='outline-none w-11/12 h-full p-1' value={password} onChange={(e) => setPassword(e.target.value)} type="password" name="password" id="password" required />
                        <IoEye id='eye1' onClick={see} size='1.3em' color='#555' className='cursor-pointer mr-1' />
                        <IoEyeOff id='eye2' onClick={see} size='1.3em' color='#555' className='cursor-pointer mr-1 hidden' />
                    </div>
                </div>

                <input type="submit" className='bg-blue-900 px-3 py-2 my-4 cursor-pointer' value='Create Account' />
                <p className='mb-3'>Already have an account? Click <Link to='/login' className='text-slate-900 underline'>here</Link> to signin.</p>
            </form>
        </div>
    )
}

export default Signup