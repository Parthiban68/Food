import React from 'react'
import { hero1, hero2, hero3 } from '../../assets/image'

function Hero() {
    return (
        <div className='relative z-[-1]'>
            <div className="container py-16 sm:py-0">
                <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 place-items-center min-h-[550px]'>
                    <div className='space-y-7 text-dark'>
                        <h1 className='text-6xl  font-cursive text-white'>Fresh & Healthy mela plan <span className='text-primary font-cursive text-7xl '>Delivery</span> in Miami</h1>
                        <p className='lg:pr-64 text-white'>Delicious Meals Delivered to your Door Step</p>
                    </div>
                    <div className='relative z-[1] '>
                        <img src={hero1} alt="" className='w-full  sm:scale-100 sm:translate-y-1' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero