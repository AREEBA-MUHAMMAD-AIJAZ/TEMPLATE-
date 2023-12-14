import React from 'react'
import Button from './Button'

const HeroSection = () => {
  return (
    <div className='bg-black h-[200px] md:h-[400px] lg:h-[590px] text-white '>
        <div className='relative'>
         <img src="vector8.png" alt="" className='absolute  blur-sm z-0 top-32 md:w-full ' width={1500}   />
        </div>

        <div className=' absolute z-50 px-10 md:py-40 lg:py-44 flex flex-col md:gap-5 gap-3 pt-20 md:pt-16  md:px-20 lg:px-40'>

        <h4 className='text-sm lg:text-2xl text-gray-400'>NFT marketplace</h4>

                <h1 className=' text-2xl md:text-6xl lg:text-8xl font-bold w-[400px] lg:w-[900px]'>
                Discover collect 
                and sell 
                extraordinary NFTs
                </h1>

                <h4 className='text-sm lg:text-2xl text-gray-400'>Explore on the worlds best & largest NFT marketplace</h4>

                <div className='md:w-80  flex gap-2'>
                <Button />
                <Button />
                </div>
                 
        </div>

    </div>
  )
  }
export default HeroSection

