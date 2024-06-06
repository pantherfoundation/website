
import Image from 'next/image'
import logo1 from "../../public/images/logo1.svg";
import light from "../../public/images/lightning.svg";
import add from "../../public/images/add.svg";
import github from "../../public/images/github.svg";
import link from "../../public/images/linker.svg";
import Link from 'next/link';
export default function Footer() {
  return (

    <><footer className='mobile '>
      <div className="max-w-[100vw] bg-[#1E1E1E]  mx-auto px-4 sm:px-6">
        <div className="max-w-6xl bg-[#1E1E1E]  mx-auto px-4 sm:px-6">

          {/* Top area: Blocks */}
         

            {/* 1st block */}
  

          {/* Bottom area */}
          <div className=" items-center  py-4 md:py-8 border-t border-[#3B3B3B]">
  
            {/* Social as */}
            <ul className="flex flex-row justify-between flex-stretch mb-4 md:order-1  md:mb-0">
              <div>
            <li className='text-white mt-[.25em]'>
            Panther Foundation
            </li>
            </div>
            <div className='flex flex-row'>
              <li> <Link href="https://snapshot.org/#/pantherprotocol.eth">
                <Image src={light} width={30} height={30} alt={''} className=' ' />
                </Link>

              </li>
              <li>
                <Image src={github} width={30} height={30} alt={''} className='ml-[.1em] ' />

              </li>
              <li>
                <Image src={add} width={30} height={30} alt={''} className='ml-[.1em]  ' />

              </li>
              <Image src={link} width={30} height={30} alt={''} className='ml-[.1em] ' />
              </div>
            </ul>


            {/* Copyrights note */}
       

          </div>

        </div>
      </div>
    </footer><footer className='nonMobile'>
        <div className="max-w-[100vw] h-[25em] bg-[#1E1E1E]  mx-auto px-4 sm:px-6">
          <div className="max-w-6xl bg-[#1E1E1E]  mx-auto px-4 sm:px-6">

            {/* Top area: Blocks */}
            <div className="grid sm:grid-cols-12  gap-8 py-8 md:py-12  ">

              {/* 1st block */}
              <div className="sm:col-span-12 lg:col-span-3">
                <div className="mb-2">
                  <Image src={logo1} width={150} height={30} alt={''} className=' mr-[2em]' />

                </div>
                <div className="text-sm  text-gray-600">
                  
                </div>
              </div>

              {/* 2nd block */}
              <div className="ml-[20em]  sm:col-span-6 md:col-span-3 lg:col-span-2">
                <h6 className="text-[#FFFFFF]  font-bold mb-2">Connect</h6>
                <ul className="text-sm">
                  <li className="mb-2">
                    <a href="#0" className="text-[#FFFFFF] text-[12px] hover:text-gray-900 transition duration-150 ease-in-out">Resources</a>
                  </li>
                  <li className="mb-2">
                    <a href="#0" className="text-[#FFFFFF] text-[12px] hover:text-gray-900 transition duration-150 ease-in-out">Contact </a>
                  </li>
                  <li className="mb-2">
                    <a href="#0" className="text-[#FFFFFF] text-[12px] hover:text-gray-900 transition duration-150 ease-in-out">Blog</a>
                  </li>

                </ul>
              </div>

              {/* 3rd block */}
              <div className="ml-[20em] sm:col-span-6 md:col-span-3 lg:col-span-2">
                <h6 className="text-[#FFFFFF]  font-bold mb-2">Codebase</h6>
                <ul className="text-sm">
                  <li className="mb-2">
                    <a href="#0" className="text-[#FFFFFF] text-[12px] hover:text-gray-900 transition duration-150 ease-in-out">Github</a>
                  </li>
                  <li className="mb-2">
                    <a href="#0" className="text-[#FFFFFF] text-[12px] hover:text-gray-900 transition duration-150 ease-in-out">PIPs</a>
                  </li>
                  <li className="mb-2">
                    <a href="#0" className="text-[#FFFFFF] text-[12px] hover:text-gray-900 transition duration-150 ease-in-out">About</a>
                  </li>

                </ul>
              </div>

              {/* 4th block */}
              <div className="ml-[20em] w-[20em]">
                <h6 className="text-[#FFFFFF]  font-bold mb-2">Guidelines</h6>
                <ul className="text-sm">
                  <li className="mb-2">
                    <a href="#0" className="text-[#FFFFFF] text-[12px] w-[30em] hover:text-gray-900 transition duration-150 ease-in-out">FAQ</a>
                  </li>
                  <li className="mb-2">
                    <a href="#0" className="text-[#FFFFFF] text-[12px] w-[30em] hover:text-gray-900 transition duration-150 ease-in-out">Privacy Policy</a>
                  </li>
                  <li className="mb-2">
                    <a href="#0" className="text-[#FFFFFF] text-[12px] w-[30em] hover:text-gray-900 transition duration-150 ease-in-out">Trademark policy</a>
                  </li>

                </ul>
              </div>

              {/* 5th block */}


            </div>

            {/* Bottom area */}
            <div className="md:flex md:items-center md:justify-between py-4 md:py-8 border-t border-[#3B3B3B]">

              {/* Social as */}
              <ul className="flex mb-4 md:order-1 md:ml-4 md:mb-0">
                <li>  <Link href="https://snapshot.org/#/pantherprotocol.eth">
                  <Image src={light} width={40} height={30} alt={''} className=' ' />
                  </Link>
                </li>
                <li>
                  <Image src={github} width={40} height={30} alt={''} className='ml-[.5em] ' />

                </li>
                <li>
                  <Image src={add} width={40} height={30} alt={''} className='ml-[.5em]  ' />

                </li>
                <Image src={link} width={40} height={30} alt={''} className='ml-[.5em] ' />
              </ul>


              {/* Copyrights note */}
              <div className="text-sm text-white mr-4">Panther Foundation 2024.</div>

            </div>

          </div>
        </div>
      </footer></>
  )
}
