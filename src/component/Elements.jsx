import React from 'react'
import { useParams } from 'react-router-dom'
import Navbar from './Navbar'

const Elements = () => {
    const {item}=useParams()
  return (
    <div className='bg-black'>
    <div className="navbar flex justify-center bg-white z-20 relative">
      <Navbar />
    </div>
    <main className="relative z-0">
      <img src="../src/assets/tesk.jpeg" alt="Background" className="w-full object-cover" style={{ height: '100vh' }} />
      <h1 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-3xl text-white font-bold">
        Welcome to the Elements page Item no: {item}
      </h1>
    </main>
  </div>
  )
}

export default Elements
