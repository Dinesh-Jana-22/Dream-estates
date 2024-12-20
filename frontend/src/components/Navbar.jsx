import React from 'react'
import { FaSearch } from "react-icons/fa";

const Navbar = () => {
  return (
    <div className='bg-black text-white flex justify-around items-center py-2'>
      <h1 className='font-fontInter text-xl font-bold'>
        Dream <span className='text-blue-400 font-extrabold'>Estates</span>
      </h1>
      <div className='flex items-center gap-8'>
        <form className='bg-white flex items-center px-3 rounded-lg py-1'>
            <input type="search" className='font-fontInter text-xl px-3 py-2 text-black focus:outline-none' placeholder='Search...'/>
            <FaSearch className='text-black size-6'></FaSearch>
        </form>
        <ul className='flex gap-4 items-center'>
            <li className='cursor-pointer hover:text-blue-400 transition-all'><a>Home</a></li>
            <li className='cursor-pointer hover:text-blue-400 transition-all'><a>About</a></li>
            <li className='cursor-pointer hover:text-blue-400 transition-all'><a>Contact</a></li>
            <li><button className='bg-blue-600 px-4 py-2 rounded-lg font-fontInter'>Sign Up</button></li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar
