import { useState } from 'react'
import Navbar from './Components/Navbar.jsx'
import AppRoutes from './Routes/AppRoutes.jsx'

function App() {

  return (
    <div className="bg-[#020927] w-screen h-[100%] min-h-screen overflow-x-hidden overflow-y-hidden">
      <Navbar />
      <AppRoutes />
     </div>
  )
}

export default App
