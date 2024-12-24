import React from 'react'
import hero from '../assets/hero.jpg'

const Home = () => {
  return (
    <div className='flex justify-between items-center py-8 h-[90vh] gap-8'>
      <div className='flex flex-col gap-4 justify-center pl-14'>
        <h1 className='font-fontInter text-2xl lg:text-4xl xl:text-6xl font-bold'>Find your <span className='text-blue-500'>Dream</span> Property.</h1>
        <p className='font-fontInter text-xl font-normal'>We have houses, apartments, and commercial spaces that fits your needs.</p>
        <button className='bg-blue-500 px-10 py-4 rounded-lg font-normal text-2xl text-white w-fit hover:bg-blue-600 transition-all mt-5'>Search Now</button>
      </div>
      <div className='w-1/2 max-w-[900px] flex items-end'>
        <img src={hero} alt="" className='rounded-tl-[80px]'/>
      </div>
    </div>
  )
}

export default Home
