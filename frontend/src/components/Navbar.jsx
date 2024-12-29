import React from 'react'
import { FaSearch } from "react-icons/fa";

const Navbar = () => {
  return (
    <div className='bg-white text-black flex justify-around items-center py-2 shadow-md'>
      <h1 className='font-fontInter text-xl lg:text-3xl font-bold'>
        Dream <span className='text-blue-500 font-extrabold'>Estates</span>
      </h1>
      <div className='flex items-center gap-8'>
        <form className='bg-slate-100 lg:flex items-center px-3 rounded-lg py-1 hidden'>
            <input type="search" className='font-fontInter text-lg px-3 py-2 bg-transparent text-black focus:outline-none' placeholder='Search...'/>
            <FaSearch className='text-gray-300 size-4 xl:size-6'></FaSearch>
        </form>
        <ul className='flex gap-4  items-center'>
            <li className='cursor-pointer hover:text-blue-400 transition-all hidden md:block'><a>Home</a></li>
            <li className='cursor-pointer hover:text-blue-400 transition-all hidden md:block'><a>About</a></li>
            <li className='cursor-pointer hover:text-blue-400 transition-all hidden md:block'><a>Contact</a></li>
            <li><button className='bg-blue-600 px-4 py-2 rounded-lg font-fontInter text-white hover:bg-blue-700 transition-all'>Sign Up</button></li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar
