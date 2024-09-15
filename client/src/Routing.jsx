import React from 'react'
import { Routes, Route } from 'react-router-dom'
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'
import LandingPage from './pages/LandingPage'
import Event from './pages/Event'
import Pricing from './pages/Pricing'
import UploadImage from './pages/UploadImage'

function Routing() {
  return (
    <Routes>
        <Route path="/" element={<LandingPage />}></Route>
        <Route path="/sign-in" element={<SignIn />}></Route>
        <Route path="/sign-up" element={<SignUp />}></Route>
        <Route path="/create-event" element={<Event />}></Route>
        <Route path="/pricing" element={<Pricing />}></Route>
        <Route path="/upload-image/:id" element={<UploadImage />}></Route>
    </Routes>
  )
}

export default Routing