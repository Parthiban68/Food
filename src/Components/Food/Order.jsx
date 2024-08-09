import React, { useState } from 'react'
import { card1, card10 } from '../../assets/image'
function Order() {
  const [count, setCout] = useState(0);


  return (
    <>
      <div className='flex flex-wrap justify-center items-center p-10'>
        <h1 className='text-6xl font-bold font-cursive'>Order <span className='font-bold font-cursive text-primary text-[50px]'> & </span> Feel The Taste</h1>
      </div>
      <div className='flex flex-col lg:flex-row justify-center items-center px-'>
        <div class="grid lg:grid-cols-2 gap-1 md:grid-cols-1 ">
          <div className='flex flex-col justify-start items-center '>
            <img src={card10} alt="" className='lg:rounded-e-[20rem] rounded-l-3xl lg:h-full w-full ' />
          </div>
          <div className=' flex justify-center flex-wrap p-5 gap-5'>
            <div className='w-[300px] bg-white rounded-3xl h-[560px] p-2 border-l-8 border-secondary'>
              <img src={card1} alt="" className='h-[300px] w-[300px] p-2 items-center rounded-3xl' />
              <div className='px-5'>
                <h1 className='text-[40px] font-cursive font-bold text-primary'>Sanvage</h1>
                <div className='flex justify-between'>
                  <h3 className='text-[20px] font-semibold'> Price : <span className='text-[30px]'>$18</span></h3>
                  <p className='text-[20px] font-semibold hover:cursor-pointer' onClick={() => { setCout(count - 1) }}>-</p>
                  <p className='text-[20px] font-semibold'>{count}</p>
                  <p className='text-[20px] font-semibold' onClick={() => { setCout(count + 1) }}>+</p>
                </div>
                <p className='text-[20px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                <div className='pX-2 flex justify-between'>
                  <button className='bg-green-500 p-3 rounded-3xl font-semibold hover:text-white'>Order Now</button>
                  <button className='bg-orange-500 p-3 rounded-3xl font-semibold hover:text-white'>Add Favrate</button>
                </div>
              </div>
            </div>
            <div className='w-[300px] bg-white rounded-3xl h-[560px] p-2 border-l-8 border-secondary'>
              <img src={card1} alt="" className='h-[300px] w-[300px] p-2 items-center rounded-3xl' />
              <div className='px-5'>
                <h1 className='text-[40px] font-cursive font-bold text-primary'>Sanvage</h1>
                <div className='flex justify-between'>
                  <h3 className='text-[20px] font-semibold'> Price : <span className='text-[30px]'>$18</span></h3>
                  <p className='text-[20px] font-semibold hover:cursor-pointer' onClick={() => { setCout(count - 1) }}>-</p>
                  <p className='text-[20px] font-semibold'>{count}</p>
                  <p className='text-[20px] font-semibold' onClick={() => { setCout(count + 1) }}>+</p>
                </div>
                <p className='text-[20px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                <div className='p-2 flex justify-between'>
                  <button className='bg-green-500 p-3 rounded-3xl font-semibold hover:text-white'>Order Now</button>
                  <button className='bg-orange-500 p-3 rounded-3xl font-semibold hover:text-white'>Add Favrate</button>
                </div>
              </div>
            </div>

            <div className='w-[300px] bg-white rounded-3xl h-[560px] p-2 border-l-8 border-secondary'>
              <img src={card1} alt="" className='h-[300px] w-[300px] p-2 items-center rounded-3xl' />
              <div className='px-5'>
                <h1 className='text-[40px] font-cursive font-bold text-primary'>Sanvage</h1>
                <div className='flex justify-between'>
                  <h3 className='text-[20px] font-semibold'> Price : <span className='text-[30px]'>$18</span></h3>
                  <p className='text-[20px] font-semibold hover:cursor-pointer' onClick={() => { setCout(count - 1) }}>-</p>
                  <p className='text-[20px] font-semibold'>{count}</p>
                  <p className='text-[20px] font-semibold' onClick={() => { setCout(count + 1) }}>+</p>
                </div>
                <p className='text-[20px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                <div className='p-2 flex justify-between'>
                  <button className='bg-green-500 p-3 rounded-3xl font-semibold hover:text-white'>Order Now</button>
                  <button className='bg-orange-500 p-3 rounded-3xl font-semibold hover:text-white'>Add Favrate</button>
                </div>
              </div>
            </div>
            <div className='w-[300px] bg-white rounded-3xl h-[560px] p-2 border-l-8 border-secondary'>
              <img src={card1} alt="" className='h-[300px] w-[300px] p-2 items-center rounded-3xl' />
              <div className='px-5'>
                <h1 className='text-[40px] font-cursive font-bold text-primary'>Sanvage</h1>
                <div className='flex justify-between'>
                  <h3 className='text-[20px] font-semibold'> Price : <span className='text-[30px]'>$18</span></h3>
                  <p className='text-[20px] font-semibold hover:cursor-pointer' onClick={(e) => { setCout(count - 1) }}>-</p>
                  <p className='text-[20px] font-semibold'>{count}</p>
                  <p className='text-[20px] font-semibold' onClick={(e) => { setCout(count + 1) }}>+</p>
                </div>
                <p className='text-[20px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                <div className='p-2 flex justify-between'>
                  <button className='bg-green-500 p-3 rounded-3xl font-semibold hover:text-white'>Order Now</button>
                  <button className='bg-orange-500 p-3 rounded-3xl font-semibold hover:text-white'>Add Favrate</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Order