import React from 'react'
import { link } from '../../utils/link'

function Navbar() {
  return (
    <div className=' bg-transparent shadow-2xl backdrop-blur-[50px]'>
        <div className='container flex justify-between py-4 sm:py-3'>
            <div className='text-white font-bold'>
                Logo
            </div>
            <div>
                <ul className='flex items-center gap-10'>
                    {link.map((links)=>(
                        <li key={links.id}>
                            <a href={links.path} className='inline-block text-white hover:text-primary text-xl font-semibold'>{links.name}</a>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    </div>
  )
  
}

export default Navbar