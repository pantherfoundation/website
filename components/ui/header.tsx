'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import logo1 from "../../public/images/lion2.svg";
import Link from 'next/link'

import MobileMenu from './mobile-menu'

export default function Header() {

  const [top, setTop] = useState<boolean>(true)

  // detect whether user has scrolled the page down by 10px
  const scrollHandler = () => {
    window.pageYOffset > 10 ? setTop(false) : setTop(true)
  }  

  useEffect(() => {
    scrollHandler()
    window.addEventListener('scroll', scrollHandler)
    return () => window.removeEventListener('scroll', scrollHandler)
  }, [top])

  return (
    <header className={`fixed w-full z-30 md:bg-opacity-90 transition duration-300 ease-in-out ${!top ? '' : ''}`}>
      <div className="max-w-6xl mx-auto px-5 sm:px-6">
        <div className="flex items-center border rounded-xl pl-[2em] ml-[-3em] pr-[3em] mr-[-2em] bg-white backdrop-blur-sm shadow-lg justify-between h-16 md:h-20 mt-[1em]">

          {/* Site branding */}
          <div className="shrink-0 mr-4 ">
            <div className='flex flex-row items-center'>
          <Image src={logo1} width={35} height={30} alt={''} className=' mr-[2em]'/> 
          <p className="text-[17px] nonMobile font-extrabold leading-tighter tracking-tighter mb-[-.101em]" data-aos="zoom-y-out">Panther Protocol Foundation</p>
          <p className="text-[11px] mobile font-extrabold leading-tighter tracking-tighter mb-[-.101em]" data-aos="zoom-y-out">Panther Protocol Foundation</p>
          </div>
          </div>

          {/* Desktop navigation */}
          <nav className="hidden md:flex md:grow">
            {/* Desktop sign in links */}
            <ul className="flex grow justify-end flex-wrap items-center">
            <li>
            <Link href="https://github.com/pantherfoundation" className="font-bold text-gray-600 hover:text-gray-900 px-5 py-3 flex items-center text-[13px] transition duration-150 ease-in-out">Developers</Link>
              </li>
              <li>
              <Link href="https://snapshot.org/#/pantherprotocol.eth" className="font-medium text-gray-600 hover:text-gray-900 px-5 py-3 flex items-center text-[13px] transition duration-150 ease-in-out">Governance</Link>
              </li>
       
              <li>
              <Link href="https://docs.google.com/forms/d/1b5RPrKte7gtqqvKtA04twjfj3pFVrQCS-xTKjW9la_w/edit" className="font-medium text-gray-600 hover:text-gray-900 px-5 py-3 flex items-center text-[13px] transition duration-150 ease-in-out">Contact Form</Link>
              </li>
              <li>
           
              </li>
            </ul>

          </nav>

          <MobileMenu />

        </div>
      </div>
    </header>
  )
}
