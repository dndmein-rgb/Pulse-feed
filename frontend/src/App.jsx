import React from 'react'
import HomePage from "./pages/home/HomePage";
import LoginPage from "./pages/auth/login/LoginPage";
import SignUpPage from "./pages/auth/signup/SignUpPage";


import Sidebar from "./components/common/Sidebar";
import RightPanel from "./components/common/RightPanel";

import { Routes, Route } from "react-router";
import NotificationPage from './pages/notifications/NotificationPage';
import ProfilePage from './pages/profile/ProfilePage';


const App = () => {
  return (
  <div className=" flex max-w-6xl mx-auto">
    <Sidebar/>
  <Routes>
    <Route path="/" element={<HomePage />} />
    <Route path="/login" element={<LoginPage />} />
    <Route path="/signup" element={<SignUpPage />} />
    <Route path='/notifications' element={<NotificationPage />} />
    <Route path='/profile/:username'element={<ProfilePage />} />
  </Routes>
  <RightPanel />
  </div>
  )
}

export default App