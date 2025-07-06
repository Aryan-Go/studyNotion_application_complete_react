import React from 'react'
import { Routes, Route } from "react-router-dom"
import Home from "../Pages/Home.jsx"
import Dash from "../Pages/Dash.jsx"
import Signup from "../Pages/Signup.jsx"
import Login from "../Pages/Login.jsx"


const AppRoutes = () => {
  return (
      <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/signup" element={<Signup />}></Route>
          <Route path="/dashboard" element={<Dash />}></Route>
    </Routes>
  )
}

export default AppRoutes