import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './App.css';
import NotFound from './pages/NotFound';
import Home from './pages/Home';
import Profile from './pages/Profile';
import EditProfile from './pages/EditProfile';
import Search from './pages/Search';
import Notifications from './pages/Notifications';
import Messages from './pages/Messages';
import Friends from './pages/Friends';
import Videos from './pages/Videos';
import Shop from './pages/Shop';
import Signin from './pages/auth/Signin';
import Signup from './pages/auth/Signup';
import Moments from './pages/Moments';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path='/moments' element={<Moments />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/profile/edit' element={<EditProfile />} />
        <Route path='/search' element={<Search />} />
        <Route path='/notifications' element={<Notifications />} />
        <Route path='/messages' element={<Messages />} />
        <Route path='/friends' element={<Friends />} />
        <Route path='/videos' element={<Videos />} />
        <Route path='/shop' element={<Shop />} />
        <Route path='/signin' element={<Signin />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
