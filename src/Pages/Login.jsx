import axios from 'axios';
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import Loading from '../Components/Loading';
import { IoEye, IoEyeOff } from 'react-icons/io5';
import SnackbarComponent from '../Components/SnackbarComponent';

const Login = () => {
    
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [snackbar, setSnackbar] = useState({
        message: '',
        open: false,
        severity: 'error'
    })

    const handleClose = () => {
        setSnackbar({ ...snackbar, open: false });
    }

    const navigate = useNavigate();

    const signup = (e) => {

        setLoading(true);

        e.preventDefault();

        const formData = {
            username,
            password
        }

        axios
            .post('https://connect-backend-x2ns.onrender.com/user/login', formData)
            .then((req, res) => {
                localStorage.setItem("userId", req.data._id);
                setSnackbar({
                    message: 'Login was successful.',
                    open: true,
                    severity: 'error'
                })
                setPassword('');
                setUsername('');
                navigate('/home');
                setLoading(false);
            })
            .catch((error) => {
                if(error.response) {
                    setSnackbar({
                        message: error.response.data.message,
                        open: true,
                        severity: 'error'
                    })
                }else {
                    setSnackbar({
                        message: error.message,
                        open: true,
                        severity: 'error'
                    })
                }
                setLoading(false);
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
                <h2 className='font-semibold text-2xl'>Log in to Your Account</h2>
            </div>

            <SnackbarComponent
                open={snackbar.open}
                message={snackbar.message}
                severity={snackbar.severity}
                handleClose={handleClose}
            />

            {loading && (
                <div className='flex items-center justify-center fixed w-full h-dvh top-0'>
                    <Loading />
                </div>
            )}

            <form onSubmit={signup} className='bg-gray-300 dark:bg-slate-600 rounded p-2 mt-5 flex flex-col items-center justify-center gap-4 w-10/12 m-auto'>
                <div className='flex flex-col items-center w-full mt-3'>
                    <label className='text-xl mb-1' htmlFor="username">Username</label>
                    <input value={username} onChange={(e) => setUsername(e.target.value)} className='outline-none dark:text-black p-2 w-10/12' type="text" name="username" id="username" required autoFocus />
                </div>
                <div className='flex flex-col items-center mt-3 w-full'>
                    <label className='text-xl mb-1' htmlFor="password">Password</label>
                    <div className='flex flex-row items-center justify-between dark:text-black bg-white p-1 w-10/12'>
                        <input className='outline-none w-11/12 h-full p-1' value={password} onChange={(e) => setPassword(e.target.value)} type="password" name="password" id="password" required />
                        <IoEye id='eye1' onClick={see} size='1.3em' color='#555' className='cursor-pointer mr-1' />
                        <IoEyeOff id='eye2' onClick={see} size='1.3em' color='#555' className='cursor-pointer mr-1 hidden' />
                    </div>
                </div>

                <input type="submit" className='bg-blue-900 px-3 py-2 mt-4 cursor-pointer text-white' value='Log in' />
                <p className='mb-3'>Don't have an account? Click <Link to='/signup' className='text-slate-900 underline'>here</Link> to create one.</p>
            </form>
        </div>
    )
}

export default Login