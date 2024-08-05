import React from 'react'
import { hero1, hero2, hero3, about1, about2, about3, about4 } from '../../assets/image'
function About() {
  return (
    <div className='flex flex-col lg:flex-row justify-center items-center gap:10 lg:py-24 py-20 px-10 lg:px-20 bg-slate-950 w-full h-fit'>
        <div className='lg:w-[50%] w-full flex flex-col justify-end items-center lg:items-start'>
            <h1 className='text-white lg:text-8xl text-6xl font-cursive font-bold'>About <span className='text-primary font-cursive'>Us</span></h1>
            <h1 className='text-white text-xl font-semibold py-3'>GRAB THIS TASTY FOOD</h1>
            <p className='text-white text-xl font-semibold text-center lg:text-start'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolor omnis perspiciatis sint! Ad nisi cum corrupti possimus id,</p>
            <p className='text-white text-xl font-semibold text-center py-3 lg:text-start'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolor omnis perspiciatis sint! Ad nisi cum corrupti possimus id,</p>
            <button className='bg-primary px-8 py-4 rounded-full hover:bg-primaryDark hover:text-black font-bold mt-6'>Order Now</button>
        </div>
       <div className='flex justify-center items-center lg:w-[50%] w-full'>
        <img src={about4} width={500} height={500} alt="about image" className='rounded-xl py-10 lg:py-0' />
       </div>
    </div>
  )
}

export default About