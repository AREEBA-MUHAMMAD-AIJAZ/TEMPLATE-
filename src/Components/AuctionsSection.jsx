'use client'
// import Swiper core and required modules
// import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
// import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
// import 'swiper/css';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';
// import 'swiper/css/scrollbar';

// const SwiperSlider =() => {
//   return (
//     <div className='text-white'>
//     <Swiper
//       // install Swiper modules
//       modules={[Navigation, Pagination, Scrollbar, A11y]}
//       spaceBetween={50}
//       slidesPerView={3}
//       navigation
//       pagination={{ clickable: true }}
//       scrollbar={{ draggable: true }}
//       onSwiper={(swiper) => console.log(swiper)}
//       onSlideChange={() => console.log('slide change')}
//     >
//       <SwiperSlide>Slide 1</SwiperSlide>
//       <SwiperSlide>Slide 2</SwiperSlide>
//       <SwiperSlide>Slide 3</SwiperSlide>
//       <SwiperSlide>Slide 4</SwiperSlide>
//       <SwiperSlide>Slide 1</SwiperSlide>
//       <SwiperSlide>Slide 2</SwiperSlide>
//       <SwiperSlide>Slide 3</SwiperSlide>
//       <SwiperSlide>Slide 4</SwiperSlide>
//       <SwiperSlide>Slide 1</SwiperSlide>
//       <SwiperSlide>Slide 2</SwiperSlide>
//       <SwiperSlide>Slide 3</SwiperSlide>
//       <SwiperSlide>Slide 4</SwiperSlide>
//       <SwiperSlide>Slide 1</SwiperSlide>
//       <SwiperSlide>Slide 2</SwiperSlide>
//       <SwiperSlide>Slide 3</SwiperSlide>
//       <SwiperSlide>Slide 4</SwiperSlide>
//     </Swiper>

//     </div>
// )};
// export SwiperSlider
//////////////////////////////////////////

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Scrollbar, A11y } from 'swiper/modules';
import "swiper/css";
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import { Pagination } from "swiper/modules";

const LiveAuction = () => {
  return (
    <>
      <div className="w-[1500px] p-40">
        <Swiper
          breakpoints={{
            1024: {
              width: 1160,
              slidesPerView: 4,
            },
            768: {
              width: 900,
              slidesPerView: 3,
            },
            425: {
              width: 300,
              slidesPerView: 1,
            },
            375: {
              width: 375,
              slidesPerView: 1,
            },
            320: {
              width: 320,
              slidesPerView: 1,
            },
          }}
            spaceBetween={40}
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            slidesPerView={3}
            navigation
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
            className="mySwiper xl:mx-20 xl:py-20 lg:py-20 lg:mx-24 mx-1 md:px-5 md:pt-5 px-4 pt-5 text-white"
            >

          <SwiperSlide className="bg-[#212529] rounded-xl p-7">
            <img
              src="auction-1.jpg"
              alt=""
              className="mx-auto mb-5 rounded-md"
            />
            <h1 className="mb-3 text-2xl font-semibold">Arts</h1>
            <div className="flex items-center">
              <div>
                <img
                  src="avatar4.jpg"
                  className="rounded-full w-16 h-16"
                />
              </div>
              <div className="ml-2 font-semibold">
                <h1>MKHBolds</h1>
              </div>
            </div>
            <div className="flex justify-between mt-5 font-semibold">
              <h3>1.5 BNB</h3>
              <h3>1 of 1</h3>
            </div>
          </SwiperSlide>
          <SwiperSlide className="bg-[#212529] rounded-xl p-7 text-center">
            
                <img
                  src="auction-4.jpg"
                  alt=""
                  className="mx-auto mb-5 rounded-md"
                />

              <div className="flex gap-2 text-sm">
                <p>DATE <br /> 23</p>
                <p>HOUR <br /> 24</p>
                <p>MINUTE <br /> 60</p>
                <p>SECONDS <br />55</p>
              </div>

              <h1 className="mb-3 text-2xl font-semibold py-2">Virtual Worlds</h1>

              <div className="flex items-center" >
                <img src="auction-4.jpg" className="rounded-full w-16 h-16"/>
                 <h1 className="ml-2 font-semibold">@Richard</h1>
              </div>
            
              <div className="flex justify-between mt-5 font-semibold">
               <h3>1.5 BNB</h3>
               <h3>1 of 1</h3>
              </div>

          </SwiperSlide>
        
          
        </Swiper>
      </div>
    </>
  );
};
export default LiveAuction;