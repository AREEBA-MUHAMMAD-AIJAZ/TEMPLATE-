import React from 'react'
import Navbar from '@/Components/Navbar'
import Dropdown from '../Components/Dropdown'
import HeroSection from '@/Components/HeroSection'
import SwiperSlider from '@/Components/AuctionsSection'
import CreativeArtist from '@/Components/CreativeArtist'
import MostPopular from '@/Components/MostPopular'
import ExclusiveArtist from '@/Components/ExclusiveAssets'
import HowItWorks from '@/Components/HowItWorks'
import Footer from '@/Components/Footer'
const Front = () => {
  return (
    <div>
      <Navbar/>

      {/* <Dropdown /> */}
      <HeroSection/>
      <SwiperSlider />
      <CreativeArtist />
      <MostPopular />
      <ExclusiveArtist />
      <HowItWorks />
      <Footer />
    </div>
  )
}

export default Front
