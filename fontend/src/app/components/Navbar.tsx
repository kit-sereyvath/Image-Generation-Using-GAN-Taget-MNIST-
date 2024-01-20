import React from 'react';
import Logo from '../../../public/Group 2.png';
import Image from 'next/image';
import Link from 'next/link';

const Navbar = () => {
  return (
    <div className='w-full h-24 shadow-xl text-white'>
      <div className='flex justify-between px-20 items-center h-full w-full 2xl:px-16'>
        {/* Left */}
        <div className='flex gap-x-3'>
          <Image src={Logo} alt=""/>
          <p className='text-4xl font-lilita'>Genify</p>
        </div>
        {/* Mid */}
        <div>
          <ul className='hidden sm:flex'>
            <Link href="/features">
              <li className='ml-10 text-xl font-lilita'>
                Features
              </li>
            </Link>
            <Link href="/about">
              <li className='ml-10 text-xl font-lilita'>
                About
              </li>
            </Link>
            <Link href="/blogs">
              <li className='ml-10 text-xl font-lilita'>
                Blogs
              </li>

            </Link>
          </ul>
        </div>
        {/* Right */}

        <div className='flex gap-x-5'>
          <button className='font-lilita rounded-xl px-5 py-2.5 bg-transparent border-2'>
            Log In
          </button>
          <button className='font-lilita rounded-xl px-5 py-2.5 bg-gradient-to-r from-bluvee to-pinkee text'>
            Get Started
          </button>
        </div>

      </div>
    </div>
  )
}

export default Navbar
