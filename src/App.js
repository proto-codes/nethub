import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import './assets/css/Style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import NotFound from './pages/NotFound';
import Home from './pages/Home';
import Profile from './pages/Profile';
import Messages from './pages/Messages';
import Friends from './pages/Friends';
import Videos from './pages/Videos';
import Shop from './pages/Shop';
import Signin from './pages/Signin';
import Signup from './pages/Signup';
import Moments from './pages/Moments';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route index element={<Home />} />
      <Route path='/moments' element={<Moments />} />
      <Route path='/profile' element={<Profile />} />
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
