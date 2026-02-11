
import Image from 'next/image'
import logo1 from "../../public/images/white.svg";
import light from "../../public/images/lightning.svg";
import add from "../../public/images/add.svg";
import github from "../../public/images/github.svg";
import link from "../../public/images/linker.svg";
import Link from 'next/link';
export default function Footer() {
  return (

    <><footer className='mobile '>
     <div className="max-w-[100vw] bg-[#1E1E1E] mx-auto px-4 sm:px-6">
  <div className="max-w-6xl bg-[#1E1E1E] mx-auto px-4 sm:px-6">

    {/* Top area: Blocks */}
    <div className="grid grid-cols-1 sm:grid-cols-12 gap-8 py-8 md:py-12">

      {/* 1st block */}
      <div className="sm:col-span-12 lg:col-span-1">
        <div className="mb-2 flex flex-row items-center">
          <Image src={logo1} width={35} height={30} alt={''} className="mr-[.7em]" />
          <p className="text-[17px] text-white leading-tighter tracking-tighter mb-[-.101em]" data-aos="zoom-y-out">
            Panther Protocol <br />Foundation
          </p>
        </div>
        <div className="text-sm text-gray-600">
          {/* optional blurb */}
        </div>
      </div>

      {/* 2nd block */}
      <div className="sm:col-span-6 md:col-span-3 lg:col-span-2">
        <h6 className="text-[#FFFFFF] font-bold mb-2">Connect</h6>
        <ul className="text-sm">
          <li className="mb-2">
            <a
              href="https://docs.google.com/forms/d/1b5RPrKte7gtqqvKtA04twjfj3pFVrQCS-xTKjW9la_w/edit"
              className="text-[#FFFFFF] text-[12px] hover:text-gray-300 transition duration-150 ease-in-out"
            >
              Contact
            </a>
          </li>
          <li className="mb-2">
            <a
              href="https://blog.pantherprotocol.io/"
              className="text-[#FFFFFF] text-[12px] hover:text-gray-300 transition duration-150 ease-in-out"
            >
              Blog
            </a>
          </li>
        </ul>
      </div>

      {/* 3rd block */}
      <div className="sm:col-span-6 md:col-span-3 lg:col-span-2">
        <h6 className="text-[#FFFFFF] font-bold mb-2">Codebase</h6>
        <ul className="text-sm">
          <li className="mb-2">
            <a
              href="https://github.com/pantherfoundation"
              className="text-[#FFFFFF] text-[12px] hover:text-gray-300 transition duration-150 ease-in-out"
            >
              Github
            </a>
          </li>
          <li className="mb-2">
            <a
              href="https://snapshot.org/#/pantherprotocol.eth"
              className="text-[#FFFFFF] text-[12px] hover:text-gray-300 transition duration-150 ease-in-out"
            >
              PIPs
            </a>
          </li>
        </ul>
      </div>

      {/* 4th block */}
      <div className="sm:col-span-12 md:col-span-6 lg:col-span-4">
        <h6 className="text-[#FFFFFF] font-bold mb-2">Guidelines & Legal</h6>
        <ul className="text-sm">
          <li className="mb-2">
            <a href="/PPF_Governance_Neutrality_Policy_greyscale_blackheader.html"
              className="text-[#FFFFFF] text-[12px] hover:text-gray-300 transition duration-150 ease-in-out">
              Governance Neutrality Policy
            </a>
          </li>
          <li className="mb-2">
            <a href="/PPF_Grant_Policy_greyscale_blackheader.html" className="text-[#FFFFFF] text-[12px] hover:text-gray-300 transition duration-150 ease-in-out">
              Grant Making & UI Maintenance
            </a>
          </li>
          <li className="mb-2">
            <a href="/PPF_DAO_Governance_Participation_Disclaimer_greyscale_blackheader.html" className="text-[#FFFFFF] text-[12px] hover:text-gray-300 transition duration-150 ease-in-out">
              DAO Governance Disclaimer
            </a>
          </li>
          <li className="mb-2">
            <a href="/privacypolicy.html" className="text-[#FFFFFF] text-[12px] hover:text-gray-300 transition duration-150 ease-in-out">
              Privacy Notice
            </a>
          </li>
          <li className="mb-2">
            <a href="/tou.html" className="text-[#FFFFFF] text-[12px] hover:text-gray-300 transition duration-150 ease-in-out">
              Terms of Use
            </a>
          </li>
        </ul>
      </div>

      {/* 5th block */}
      {/* (leave empty or add more as needed) */}

    </div>

    {/* Bottom area */}
    <div className="md:flex md:items-center md:justify-between py-4 md:py-8 border-t border-[#3B3B3B]">
      {/* Social as */}
      {/* ... */}
    </div>

  </div>
</div>

    </footer><footer className='nonMobile'>
        <div className="max-w-[100vw] h-[16em] bg-[#1E1E1E]  mx-auto px-4 sm:px-6">
          <div className="max-w-6xl bg-[#1E1E1E]  mx-auto px-4 sm:px-6">

            {/* Top area: Blocks */}
            <div className="grid sm:grid-cols-12  gap-8 py-8 md:py-12  ">

              {/* 1st block */}
              <div className="sm:col-span-12 lg:col-span-3">
                <div className="mb-2 flex flex-row">
                <Image src={logo1} width={35} height={30} alt={''} className=' mr-[.7em]'/> 
                <p className="text-[17px] text-white   leading-tighter tracking-tighter mb-[-.101em]" data-aos="zoom-y-out">Panther Protocol <br/>Foundation</p>

                </div>
                <div className="text-sm  text-gray-600">
                  
                </div>
              </div>

              {/* 2nd block */}
              <div className="ml-[20em]  sm:col-span-6 md:col-span-3 lg:col-span-2">
                <h6 className="text-[#FFFFFF]  font-bold mb-2">Connect</h6>
                <ul className="text-sm">


                  <li className="mb-2">
                    <a href="https://docs.google.com/forms/d/1b5RPrKte7gtqqvKtA04twjfj3pFVrQCS-xTKjW9la_w/edit" className="text-[#FFFFFF] text-[12px] hover:text-gray-900 transition duration-150 ease-in-out">Contact </a>
                  </li>
                  <li className="mb-2">
                    <a href="https://blog.pantherprotocol.io/" className="text-[#FFFFFF] text-[12px] hover:text-gray-900 transition duration-150 ease-in-out">Blog</a>
                  </li>

                </ul>
              </div>

              {/* 3rd block */}
              <div className="ml-[20em] sm:col-span-6 md:col-span-3 lg:col-span-2">
                <h6 className="text-[#FFFFFF]  font-bold mb-2">Codebase</h6>
                <ul className="text-sm">
                  <li className="mb-2">
                    <a href=" https://github.com/pantherfoundation" className="text-[#FFFFFF] text-[12px] hover:text-gray-900 transition duration-150 ease-in-out">Github</a>
                  </li>
                  <li className="mb-2">
                    <a href="https://snapshot.org/#/pantherprotocol.eth" className="text-[#FFFFFF] text-[12px] hover:text-gray-900 transition duration-150 ease-in-out">PIPs</a>
                  </li>
           

                </ul>
              </div>

              {/* 4th block */}
              <div className="ml-[20em] w-[20em]">
                <h6 className="text-[#FFFFFF]  font-bold mb-2">Guidelines & Legal</h6>
                <ul className="text-sm">
                  <li className="mb-2">
                    <a href="/PPF_Governance_Neutrality_Policy_greyscale_blackheader.html" className="text-[#FFFFFF] text-[12px] w-[30em] hover:text-gray-900 transition duration-150 ease-in-out">Governance Neutrality Policy</a>
                  </li>
                  <li className="mb-2">
                    <a href="/PPF_Grant_Policy_greyscale_blackheader.html" className="text-[#FFFFFF] text-[12px] w-[30em] hover:text-gray-900 transition duration-150 ease-in-out">Grant Making & UI Maintenance</a>
                  </li>
                  <li className="mb-2">
                    <a href="/PPF_DAO_Governance_Participation_Disclaimer_greyscale_blackheader.html" className="text-[#FFFFFF] text-[12px] w-[30em] hover:text-gray-900 transition duration-150 ease-in-out">DAO Governance Disclaimer</a>
                  </li>
                  <li className="mb-2">
                    <a href="/privacypolicy.html" className="text-[#FFFFFF] text-[12px] w-[30em] hover:text-gray-900 transition duration-150 ease-in-out">Privacy Notice</a>
                  </li>
                  <li className="mb-2">
                    <a href="/tou.html" className="text-[#FFFFFF] text-[12px] w-[30em] hover:text-gray-900 transition duration-150 ease-in-out">Terms of Use</a>
                  </li>
                </ul>
              </div>

              {/* 5th block */}


            </div>

            {/* Bottom area */}
            <div className="md:flex md:items-center md:justify-between py-4 md:py-8 border-t border-[#3B3B3B]">

              {/* Social as */}
             

            </div>

          </div>
        </div>
      </footer></>
  )
}
