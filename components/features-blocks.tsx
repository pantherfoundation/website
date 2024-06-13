

import Image from 'next/image'

import ribm from "../public/images/rubber.png";

import arrow from "../public/images/arrow.svg";
import gearm from "../public/images/gearer.png";
import glassm from "../public/images/glasser.png";

export default function FeaturesBlocks() {
  return (

    <><section className="relative h-[150em] mobile">

      {/* Section background (needs .relative class on parent and next sibling elements) */}
      <div className="absolute h-[100em] inset-0 top-1/2 md:mt-20 lg:mt-0  pointer-events-none" aria-hidden="true"></div>


      <div className="relative h-[185em] max-w-6xl mx-auto px-4 sm:px-6">

        <div className="py-12 md:py-20">

          {/* Section header */}
         
          {/* Items */}
            
          <div className="max-w-sm mx-auto flex flex-row justify-center  ">
          <div className='flex flex-row justify-center'>
            <div className='w-[85vw]  h-[85em]  border-t rounded-[1.5em] border-[#CFCFCF]  absolute mt-[63em]' >
            <div className='flex flex-wrap flex-row mt-[2em] ml-[1.3em]  '><div className='w-[2em]  border-[#CFCFCF]  h-[2em]  mr-[.2em] border rounded-lg'><h1 className='text-black text-[12px] z-10 text-center mt-[.59em] '>02</h1></div> <div className='w-[9em] border-[#CFCFCF]   h-[2em]  border rounded-lg'><h1 className='text-black text-[12px] z-10 text-center mt-[.59em]'>Get Involved</h1></div></div>
            {/* 1st item */}  
          
<div className='flex  absolute mt-[2em] ml-[2em] mb-[1em]'><Image src={arrow} width={15} height={20} alt={''} className=' mr-[1em] ' /><h1 className="h4 text-black text-[18px] ">02 - Become a part </h1></div>
<p className="text-[12px] absolute  top-[11em]  ml-[2em] w-[80vw] text-[#1A1A1A]">Get involved in shaping Panther Protocol's future through various social channels.</p>



            {/* 2nd item */}

            {/* 4th item */}
            <div className="relative flex   flex-col  items-center p-6 bg-white h-[19em] mt-[9em] border-t rounded-[1.5em] border-b border-[#CFCFCF] ">
              <Image src={ribm} width={250} height={300} alt={''} className='absolute  mt-[-4em] mb-[1em]' />

              <p className="text-xl    absolute font-bold text-left  w-[80vw] ml-[1em]  mb-1 mt-[9em]">Participate</p>
              <p className="text-gray-600 text-xs  absolute top-[20em] w-[80vw] ml-[1.5em]  text-left">You can shape the future of Panther Protocol by getting involved in governance, and joining the community on the different social channels.</p>
            </div>

            {/* 5th item */}
            <div className="relative flex  flex-col  items-center p-6 bg-white h-[19em] mt-[4em] border-t rounded-[1.5em] border-b border-[#CFCFCF] ">
              <Image src={gearm} width={250} height={300} alt={''} className='absolute  mt-[-6em]' />

              <p className="text-xl  absolute  font-bold text-left  w-[80vw] mb-1 ml-[1em] mt-[8em]">Build</p>
              <p className="text-gray-600 text-xs  absolute top-[18em]  w-[80vw]  ml-[1.5em]  text-left">We contribute to the public good. The Panther Foundation wants to give back to the Web3 community. Check out our open-source code and API integration docs here. </p>
            </div>

            {/* 6th item */}
            <div className="relative flex  flex-col  items-center p-6 bg-white h-[17em] mt-[4em] border-t rounded-[1.5em]  border-b border-[#CFCFCF] ">
              <Image src={glassm} width={250} height={300} alt={''} className='absolute  mt-[-6em] ' />

              <p className="text-xl    font-bold text-left w-[80vw] ml-[1em]   mb-1 mt-[8em]">Stay Current</p>
              <p className="text-gray-600 text-xs absolute top-[18em] ml-[1.5em]  w-[80vw]  text-left">Check out the blog and keep up with the latest happenings in the Panther ecosystem. </p>
            </div>

          </div>

        </div></div></div>
      </div>
    </section><section className="relative nonMobile h-[40em] ">

        {/* Section background (needs .relative class on parent and next sibling elements) */}
        <div className="absolute h-[60em] inset-0 top-1/2 md:mt-20 lg:mt-0  pointer-events-none" aria-hidden="true"></div>


        <div className="relative  mt-[45em] w-[90vw] max-w-[90em] mx-auto px-4 sm:px-6">

          <div className="py-12 md:py-20  flex flex-row justify-center">
          
            {/* Section header */}
           

            {/* Items */}
            <div className="pt-12 md:pt-20  max-w-[73em] mt-[-7em] ml-[3em] flex flex-col justify-center">
            <div className="max-w-sm mx-auto grid gap-6 md:grid-cols-2 lg:grid-cols-3 items-start md:max-w-2xl lg:max-w-none ">
      
              <div className=' w-[90vw] max-w-[74em]  nonMobile  flex flex-col justify-center h-[43em] border-t rounded-[1.5em] border-b border-[#CFCFCF]  absolute mt-[-13em]' />
<div className='flex flex-row  max-w-[74em]   justify-center'>
              {/* 1st item */}
              <div className="max-w-[30em] left-[47em] top-[-4em]  absolute mt-[-4em] mx-auto text-left pb-12 md:pb-20">

<div className='flex mb-[1em]'><Image src={arrow} width={20} height={30} alt={''} className=' mr-[.4em] nonMobile' /><h1 className="h4 text-black font-bold text-[18px]">02 - Become a part </h1></div>
<p className="text-black font-bold text-[18px]">Get involved in shaping Panther Protocol's future through various social channels.</p>
</div>

              {/* 2nd item */}
              <div className='flex flex-wrap  flex-row ml-[-9em] absolute mt-[-11em] pb-[2em]  '><div className='w-[2.5em] font-bold  border-[#CFCFCF]  h-[2.5em]  mr-[.3em] border rounded-[.5em]'><h1 className='text-black text-[12px] z-10 text-center mt-[.9em] nonMobile'>02</h1></div> <div className='w-[9em] border-[#CFCFCF] nonMobile  h-[2.5em] border rounded-[.4em]'><h1 className='text-black text-[12px] z-10 font-bold text-center mt-[.9em]'>Get Involved</h1></div></div>
              {/* 4th item */}
              <div className="relative flex max-w-[25em]  flex-col nonMobile items-center p-6 bg-white h-[22em] mt-[4em] border-t rounded-[1.5em] border-b border-[#CFCFCF] ">
                <Image src={ribm} width={275} height={300} alt={''} className='absolute mt-[-8em]' />

                <h4 className="text-xl  text-left font-bold w-[100%] mb-1 mt-[10em]">Participate</h4>
                <p className="text-gray-600 text-xs text-left">You can shape the future of Panther Protocol by getting involved in governance, and joining our community on our different social channels.</p>
              </div>
              </div> 
              <div className='flex flex-row text-left  justify-center'>
              {/* 5th item */}
              <div className="relative flex  max-w-[25em]  text-left   flex-col nonMobile items-center p-6 bg-white h-[22em] mt-[4em] border-t rounded-[1.5em] border-b border-[#CFCFCF] ">
                <Image src={gearm} width={275} height={300} alt={''} className='absolute  mt-[-8em]' />

                <h4 className="text-xl  text-left font-bold w-[100%] mb-1 mt-[10em]">Build</h4>
                <p className="text-gray-600 text-xs  ">We contribute to the public good. The Panther Foundation wants to give back to the Web3 community. Check out our open-source code and API integration docs here. </p>
              </div>  </div> 
              <div className='flex flex-row justify-center'>
              {/* 6th item */}
              <div className="relative flex  max-w-[25em]   flex-col nonMobile items-center text-left p-6 bg-white h-[22em] mt-[4em] border-t rounded-[1.5em]  border-b border-[#CFCFCF] ">
                <Image src={glassm} width={275} height={300} alt={''} className='absolute  mt-[-8em] ml-[-2em]' />

                <h4 className="text-xl   text-left font-bold w-[100%] mb-1 mt-[10em]">Stay current</h4>
                <p className="text-gray-600 text-xs  text-left">Check out our blog and keep up with the latest happenings in the Panther ecosystem. </p>
              </div>
              </div> 
              </div> 
              </div> 
          </div>
        </div>
      </section></>
  )
}