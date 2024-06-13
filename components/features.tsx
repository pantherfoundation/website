'use client'

import { useState, useRef, useEffect } from 'react'
import { Transition } from '@headlessui/react'
import Image from 'next/image'
import middle from "../public/images/middle2.png";


import arrow from "../public/images/whitearrow.svg";

export default function Features() {
  
  const [tab, setTab] = useState<number>(1)

  const tabs = useRef<HTMLDivElement>(null)

  const heightFix = () => {
    if (tabs.current && tabs.current.parentElement) tabs.current.parentElement.style.height = `${tabs.current.clientHeight}px`
  }

  useEffect(() => {
    heightFix()
  }, []) 

  return (
    <><section className="mobile relative">
 
        <div className="absolute inset-0  bg-[#1A1A1A] z-[0] h-[44em] top-[25em] pointer-events-none mb-16" aria-hidden="true"></div>

      
       
        <div className="relative   px-4 ">

          <div className="pt-12 ">
       
          <Image src={middle} className=' absolute max-w-[400px] top-[774.3px] ml-[-2em] '   alt=''
        // Make the image display full width
       
        />
 
            <div className='flex flex-row justify-center'>
            <div className='w-[85vw] h-[38em] ml-[1em] border-t  rounded-[1.5em] border-b   absolute top-[27em]'>
               <div className='flex flex-wrap  flex-row ml-[1em]  '><div className='w-[2em]  border-[#CFCFCF]  h-[2em] mt-[2em] mr-[.31em]  border rounded-lg'><h1 className='text-[#FFFFFF] text-[12px] z-10 text-center mt-[.6em]'>01</h1></div> <div className='w-[9em] border-[#CFCFCF]  h-[2em] mt-[2em] border rounded-lg'><h1 className='text-[#FFFFFF] text-[10px] z-10 text-center mt-[.8em]'>Panther Protocol Foundation</h1></div></div>
            <div className="max-w-xl  w-[70vw] mt-[3em]    mx-auto  lg:col-span-6 " data-aos="fade-right">
                <div className="md:pr-4 lg:pr-12 xl:pr-16 mb-3">
                <div className='flex absolute top-[5em] w-[9em] left-[1em]   ml-[.3em] mt-[2em] '><Image src={arrow} width={15} height={30} alt={''} className='mr-[.41em] mt-[-.7161em] ' /> <div className="h4 text-white absolute left-[2em] mt-[-1em] text-[16px] ">01-About</div>  </div>
                  <p className="text-[14px]  absolute top-[8em] font-bold left-[1.3em] mb-[13em]   mt-[2em]  text-white z-[50] ">We believe that privacy-preserving technologies are essential for Web3 to scale. </p>
                  <p className="text-[13px] absolute top-[14em] left-[1.3em] mt-[3.8em]  text-white z-[50] mb-[10em]">As such, we care about Panther Protocol, and stand for a more inclusive and decentralized way of how we interact and transact with each other. We act to protect and grow Panther Protocol and its community through transparency, open communication and direct engagement.</p>
                </div></div>
             </div>
              </div>
            {/* Section header */}
           




            {/* Section content */}
            <div className="md:grid md:grid-cols-12 md:gap-6">




              {/* Tabs items */}
              <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 md:order-1">
                <div className="transition-all">
                  <div className="relative flex flex-col text-center lg:text-right" data-aos="zoom-y-out" ref={tabs}>
                    {/* Item 1 */}
                    <Transition
                      show={tab === 1}
                      appear={true}
                      className="w-full"
                      enter="transition ease-in-out duration-700 transform order-first"
                      enterFrom="opacity-0 translate-y-16"
                      enterTo="opacity-100 translate-y-0"
                      leave="transition ease-in-out duration-300 transform absolute"
                      leaveFrom="opacity-100 translate-y-0"
                      leaveTo="opacity-0 -translate-y-16"
                      beforeEnter={() => heightFix()}
                      unmount={false}
                    >
                      <div className="relative inline-flex flex-col">

              
                      </div>
                    </Transition>
                    {/* Item 2 */}
                    <Transition
                      show={tab === 2}
                      appear={true}
                      className="w-full"
                      enter="transition ease-in-out duration-700 transform order-first"
                      enterFrom="opacity-0 translate-y-16"
                      enterTo="opacity-100 translate-y-0"
                      leave="transition ease-in-out duration-300 transform absolute"
                      leaveFrom="opacity-100 translate-y-0"
                      leaveTo="opacity-0 -translate-y-16"
                      beforeEnter={() => heightFix()}
                      unmount={false}
                    >
                      <div className="relative inline-flex flex-col">

                
                      </div>
                    </Transition>
                    {/* Item 3 */}
                    <Transition
                      show={tab === 3}
                      appear={true}
                      className="w-full"
                      enter="transition ease-in-out duration-700 transform order-first"
                      enterFrom="opacity-0 translate-y-16"
                      enterTo="opacity-100 translate-y-0"
                      leave="transition ease-in-out duration-300 transform absolute"
                      leaveFrom="opacity-100 translate-y-0"
                      leaveTo="opacity-0 -translate-y-16"
                      beforeEnter={() => heightFix()}
                      unmount={false}
                    >
                      <div className="relative inline-flex flex-col">

                
                      </div>
                    </Transition>
                  </div>
                </div>
              </div>

            </div>

          </div>
        </div>
    </section><section className="nonMobile relative">

        {/* Section background (needs .relative class on parent and next sibling elements) */}
        <div className="absolute inset-0 nonMobile bg-[#1A1A1A] z-[-1] h-[38em] pointer-events-none mb-16" aria-hidden="true"></div>
        <div className="absolute inset-0 mobile bg-[#1A1A1A] z-[0] h-[40em] top-[15em] pointer-events-none mb-16" aria-hidden="true"></div>


        <div className="relative w-[90vw] max-w-[90em]   mx-auto px-4 sm:px-6">

          <div className="pt-12 md:pt-20 flex flex-row justify-center">
            <Image src={middle} alt={''} width={700} height={300} className='absolute nonMobile top-[-17em] left-[4em] mt-[22em] z-[-1]' />
          
            <div className='h-[30em] w-[90vw] max-w-[74em] ml-[-1em]  border-t nonMobile rounded-[1.5em] border-b nonMobile  absolute mt-[-1em]'>
              <div className='flex flex-wrap w-[90vw] max-w-[90em]  nonMobile ml-[2em] mt-[-2em] flex-row  '><div className='w-[2.5em] nonMobile border-[#CFCFCF]  h-[2.5em] mt-[4em] mr-[.5em] nonMobile border rounded-[.5em]'><h1 className='text-[#FFFFFF] text-[12px] z-10 font-bold text-center mt-[.9em]'>01</h1></div> <div className='w-[10em] border-[#CFCFCF]  h-[2.5em] mt-[4em] border rounded-[.5em]'><h1 className='text-[#FFFFFF] text-[10px] z-10 font-bold text-center mt-[1.4em]'>Panther Protocol Foundation</h1></div></div></div>
          
            {/* Section header */}
         




            {/* Section content */}
            <div className="md:grid md:grid-cols-12 md:gap-6 ">
   <div className='flex   nonMobile left-[47em] absolute mt-[13em]  '><Image src={arrow} width={15} height={15} alt={''} className='mr-[1em]  ' /> <h1 className="h4  text-[18px] text-white ">01-About</h1>  </div>15
              {/* Content */}
              <div className="max-w-[45em] w-[21vw]  left-[47em] absolute   md:col-span-7 lg:col-span-6 mt-[16em]" data-aos="fade-right">
                <div className="md:pr-4 lg:pr-12 xl:pr-16 mb-3">

                  <p className="text-[18px] w-[28em] nonMobile font-bold text-white z-[50] mb-5 ">We believe that privacy-preserving technologies are essential for Web3 to scale. </p>
                  <p className="text-[13px] w-[36em]  nonMobile text-white z-[50] mb-[10em]">As such, we care about Panther Protocol, and stand for a more inclusive and decentralized way of how we interact and transact with each other. We act to protect and grow Panther Protocol and its community through transparency, open communication and direct engagement.</p>
                </div>
                {/* Tabs buttons */}

              </div>



              {/* Tabs items */}
              <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 md:order-1">
                <div className="transition-all">
                  <div className="relative flex flex-col text-center lg:text-right" data-aos="zoom-y-out" ref={tabs}>
                    {/* Item 1 */}
                    <Transition
                      show={tab === 1}
                      appear={true}
                      className="w-full"
                      enter="transition ease-in-out duration-700 transform order-first"
                      enterFrom="opacity-0 translate-y-16"
                      enterTo="opacity-100 translate-y-0"
                      leave="transition ease-in-out duration-300 transform absolute"
                      leaveFrom="opacity-100 translate-y-0"
                      leaveTo="opacity-0 -translate-y-16"
                      beforeEnter={() => heightFix()}
                      unmount={false}
                    >
                      <div className="relative inline-flex flex-col">

              
                      </div>
                    </Transition>
                    {/* Item 2 */}
                    <Transition
                      show={tab === 2}
                      appear={true}
                      className="w-full"
                      enter="transition ease-in-out duration-700 transform order-first"
                      enterFrom="opacity-0 translate-y-16"
                      enterTo="opacity-100 translate-y-0"
                      leave="transition ease-in-out duration-300 transform absolute"
                      leaveFrom="opacity-100 translate-y-0"
                      leaveTo="opacity-0 -translate-y-16"
                      beforeEnter={() => heightFix()}
                      unmount={false}
                    >
                      <div className="relative inline-flex flex-col">

                       
                      </div>
                    </Transition>
                    {/* Item 3 */}
                    <Transition
                      show={tab === 3}
                      appear={true}
                      className="w-full"
                      enter="transition ease-in-out duration-700 transform order-first"
                      enterFrom="opacity-0 translate-y-16"
                      enterTo="opacity-100 translate-y-0"
                      leave="transition ease-in-out duration-300 transform absolute"
                      leaveFrom="opacity-100 translate-y-0"
                      leaveTo="opacity-0 -translate-y-16"
                      beforeEnter={() => heightFix()}
                      unmount={false}
                    >
                      <div className="relative inline-flex flex-col">

           
                      </div>
                    </Transition>
                  </div>
                </div>
              </div>

            </div>

          </div>
        </div>
      </section></>
  )
}