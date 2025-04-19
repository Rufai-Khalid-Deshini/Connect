import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import Profile from './Pages/Profile'
import NotFound from './Pages/NotFound'
import Notifications from './Pages/Notifications'
import Search from './Pages/Search'
import PostDetails from './Pages/PostDetails'
import Welcome from './Pages/Welcome'
import Login from './Pages/Login'
import Signup from './Pages/Signup'

const Navigation = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='*' element={<NotFound />} />
                <Route path='/' element={<Welcome />} />
                <Route path='/home' element={<Home />} />
                <Route path='/posts/:id' element={<PostDetails />} />
                <Route path='/profile' element={<Profile />} />
                <Route path='/notifications' element={<Notifications />} />
                <Route path='/login' element={<Login />} />
                <Route path='/signup' element={<Signup />} />
                <Route path='/discover' element={<Search />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Navigation