import React from 'react'
import Navbar from '../Navbar/Navbar'
import Hero from '../Hero/Hero'
import { bg } from '../../assets/image'

const Bgstyle = {
    backgroundImage: `url(${bg})`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: "center",
    backgroundSize: "cover",
    width: "100%",
    height: "100%"
}

const  Home = () => {
  return (
    <div style={Bgstyle} className='relative z-[1]'>
        <Navbar/>
        <Hero/>
    </div>
  )
}

export default Home