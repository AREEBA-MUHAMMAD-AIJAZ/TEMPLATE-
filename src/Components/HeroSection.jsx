import React from 'react'
import Button from './Button'

const HeroSection = () => {
  return (
    <div className='bg-black h-[590px] text-white '>
        <div className='relative'>
         <img src="vector8.png" alt="" width={1600} className='absolute left-0 blur-sm z-0 top-28' />
        </div>

        <div className=' absolute z-50 px-20 py-40 flex flex-col gap-7'>

        <h4 className='text-2xl text-gray-400'>ExplNFT marketplace</h4>

                <h1 className=' text-7xl font-bold'>
                Discover, collect, <br />
                and sell <br />
                extraordinary NFTs
                </h1>

                <h4 className='text-2xl text-gray-400'>Explore on the world's best & largest NFT marketplace</h4>

                <div className='w-80 flex gap-2'>
                <Button />
                <Button />
                </div>
                 
        </div>

    </div>
  )
  }
export default HeroSection
