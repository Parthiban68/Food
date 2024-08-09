import React from 'react'
import { hero1, hero2, hero3 } from '../../assets/image'

function Hero() {
    return (
        <div className='relative z-[-1]'>
            <div className="container py-16 sm:py-0">
                <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 place-items-center min-h-[550px]'>
                    <div className='space-y-7 text-dark lg:p-0'>
                        <h1 className='text-6xl  font-cursive text-white'>Fresh & Healthy mela plan <span className='text-primary font-cursive text-7xl '>Delivery</span> in Miami</h1>
                        <p className='lg:pr-64 text-white text-[1rem] '>Delicious Meals Delivered to your Door Step</p>
                        <button className="mt-8 inline-block rounded-full border border-secondary px-12 py-3 text-sm font-medium text-white hover:bg-secondary hover:text-white focus:outline-none focus:ring active:bg-secondary">
                        Order Now
                    </button>
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