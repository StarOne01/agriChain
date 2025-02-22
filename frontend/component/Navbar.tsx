import Link from 'next/link';
import React from 'react'

const Navbar = () => {
  return (
    <nav className=' top-0 left-0 flex items-center  fixed z-30 backdrop-blur-md  w-full'>
         <h1 className='px-4 py-2 font-bold text-white font-manrope text-xl'>Agri Chain</h1>
         <div className=''>
         <Link href={'/userlogin'}>
           <p className='text-white'>Explore</p>
         </Link>
         </div>
        
    </nav>
  )
}

export default Navbar;