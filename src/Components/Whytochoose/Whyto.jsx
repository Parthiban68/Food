import React from 'react'
import { card3 } from '../../assets/image'

function Whyto() {
    return (
        <div className='mt-10'>
            <div className='flex justify-center items-center p-10'>
                <h1 className='text-6xl font-bold text-primary font-cursive'>Why to Choose Us</h1>
            </div>
            <div className='grid lg:grid-cols-2 gap-1 md:grid-cols-1 p-5 '>
                <div className='p-10 flex  flex-col justify-evenly'>
                    <h1 className='text-4xl font-bold'>fdshjf</h1>
                    <h2 className='text-xl font-semibold'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem iure laborum vero itaque aspernatur quibusdam, saepe in ipsa similique dicta nesciunt nihil natus consectetur est recusandae culpa iusto, magnam unde?</h2>
                </div>
                <div className='flex justify-center items-center'>
                    <img src={card3} alt="" className='h-[350px] w-[350px] rounded-full'/>
                </div>
            </div>
            <div className='grid lg:grid-cols-2 gap-1 md:grid-cols-1 p-5'>
                <div className='flex justify-center items-center'>
                    <img src={card3} alt="" className='h-[350px] w-[350px] rounded-full' />
                </div>
                <div className='p-10 flex flex-col justify-evenly'>
                    <h1 className='text-4xl font-bold'>fdshjf</h1>
                    <h2 className='text-xl font-semibold'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem iure laborum vero itaque aspernatur quibusdam, saepe in ipsa similique dicta nesciunt nihil natus consectetur est recusandae culpa iusto, magnam unde?</h2>
                </div>
            </div>
            <div className='grid lg:grid-cols-2 gap-1 md:grid-cols-1 p-5'>
                <div className='p-10 flex flex-col justify-evenly'>
                    <h1 className='text-4xl font-bold'>fdshjf</h1>
                    <h2 className='text-xl font-semibold'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem iure laborum vero itaque aspernatur quibusdam, saepe in ipsa similique dicta nesciunt nihil natus consectetur est recusandae culpa iusto, magnam unde?</h2>
                </div>
                <div className='flex justify-center items-center'>
                    <img src={card3} alt="" className='h-[350px] w-[350px] rounded-full' />
                </div>

            </div>
            <div className='grid lg:grid-cols-2 gap-1 md:grid-cols-1 p-5'>
                <div className='flex justify-center items-center'>
                    <img src={card3} alt="" className='h-[350px] w-[350px] rounded-full' />
                </div>
                <div className='p-10 flex flex-col justify-evenly'>
                    <h1 className='text-4xl font-bold'>fdshjf</h1>
                    <h2 className='text-xl font-semibold'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem iure laborum vero itaque aspernatur quibusdam, saepe in ipsa similique dicta nesciunt nihil natus consectetur est recusandae culpa iusto, magnam unde?</h2>
                </div>
            </div>
        </div>

    )
}

export default Whyto