import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    //  <!-- Navbar -->
  <header className="bg-[#1c1c1c] shadow-md">
    <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
      <div className="flex items-center gap-3">
        <button id="menu-btn" className="md:hidden text-white text-2xl">&#9776;</button>
        <h1 className="text-xl font-bold text-green-500">Movix</h1>
      </div>
      <nav className="hidden md:flex space-x-6 text-sm">
        <Link to="/" className="hover:text-green-400 text-white">Action</Link>
        <Link to="/drama" className="hover:text-green-400 text-white">Drama</Link>
        <Link to="/fantsy" className="hover:text-green-400 text-white">Fantsy</Link>
        <Link to="/login" className="hover:text-green-400 text-white">Login</Link>
      </nav>
    </div>
  </header>
  )
}
