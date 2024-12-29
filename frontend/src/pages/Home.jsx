import React from 'react'
import hero from '../assets/hero.jpg'

const Home = () => {
  return (
    <div className='flex md:justify-between md:items-center py-8 md:h-[90vh] md:gap-8 gap-4 flex-col-reverse md:flex-row'>
      <div className='flex flex-col gap-4 justify-center md:pl-14 px-6'>
        <h1 className='font-fontInter text-xl md:text-2xl lg:text-4xl xl:text-6xl font-bold'>Find your <span className='text-blue-500'>Dream</span> Property.</h1>
        <p className='font-fontInter text-xl font-normal'>We have houses, apartments, and commercial spaces that fits your needs.</p>
        <button className='bg-blue-500 px-4 py-2 lg:px-10 lg:py-4 rounded-lg font-normal text-lg lg:text-2xl text-white w-fit hover:bg-blue-600 transition-all mt-5'>Search Now</button>
      </div>
      <div className='md:w-1/2 md:min-w-[500px] flex items-end w-full'>
        <img src={hero} alt="" className='md:rounded-tl-[80px]'/>
      </div>
    </div>
  )
}

export default Home
