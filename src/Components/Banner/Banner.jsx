import React from 'react'
import {Swiper, SwiperSlide} from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/free-mode'

import {FreeMode, Pagination} from 'swiper/modules'

import { card } from '../../utils/link'


function Banner() {
  return (
    // <div>
   <div className='flex items-center justify-center flex-col h-[500px]'>
    <div>
   <h1 className='py-8 tracking-wider text-6xl font-bold text-center font-cursive text-primary'>Taste The Difference</h1>
    </div>
          <Swiper
            breakpoints={{
              340: {
                slidesPerView: 2,
                spaceBetween: 15
              },
              700: {
                slidesPerView: 4,
                spaceBetween: 40
              }
            }}

            freeMode={true}
            pagination={{
              clickable: true
            }}
            modules={[FreeMode, Pagination]}
            className='max-w-[90%] lg:max-w-[90%] rounded-3xl lg:px-10 lg:py-5 '
            // style={{backgroundImage: `URL(${bg})`}}
          >
            {card.map((items) => (
              <SwiperSlide key={items.id}>
                <div className='flex flex-col gap-6 group relative shadow-lg text-white rounded-full lg:px-6 lg:py-8 h-[150px] w-[150px] lg:h-[250px] lg:w-[250px]'>
                    <img src={items.image} alt="" className='absolute inset-0 place-items-center h-[150px] w-[150px] lg:h-[250px] lg:w-[250px] rounded-full ' />
                </div>
                <div className='flex justify-center items-center py-3'>
                <h1 className='font-cursive text-black text-[30px]'>{items.title}</h1>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          
   </div>
  
  )
}

export default Banner