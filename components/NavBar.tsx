import Image from 'next/image'
import React from 'react';
import { UserButton } from "@clerk/nextjs";

const NavBar = () => {
  return (
    <div className='hidden md:flex items-center justify-between px-5 shadow-sm border-b-[1px]'>
        <Image 
            alt='logo' 
            src='/logo.png' 
            width={100} 
            height={100}
        />
        <div className='flex gap-5'>
            <h2 className='hover:bg-blue-500 px-3 cursor-pointer p-2 rounded-full hover:text-white'>Home</h2>
            <h2 className='hover:bg-blue-500 px-3 cursor-pointer p-2 rounded-full hover:text-white'>History</h2>
            <h2 className='hover:bg-blue-500 px-3 cursor-pointer p-2 rounded-full hover:text-white'>Contact Us</h2>
        </div>
        <UserButton/>
    </div>
  )
}

export default NavBar