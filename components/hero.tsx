
import Image from 'next/image'
import eye from "../public/images/hero1.png";
import bg from "../public/images/GRID 1.svg";

export default function Hero() {
  return (
    <>     <section className=" mb-[-28em] flex flex-row justify-center nonMobile">
 <Image src={bg} alt={''}  className='max-w-[100vw] absolute self-center   z-[-2]'/>
      {/* Illustration behind hero content */}
      <div className=" mb-[40em]  absolute left-1/2 transform -translate-x-1/2 bottom-[20em]  pointer-events-none -z-1" aria-hidden="true">
      
       
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 ">

        {/* Hero content */}
        <div className="pt-32 pb-12 md:pt-40 md:pb-20">

          {/* Section header */}
          <div className="text-center  pb-12 md:pb-16">
            <h1 className="text-[30px] md:text-[60px] font-extrabold leading-tighter tracking-tighter mb-[-.101em]" data-aos="zoom-y-out">Panther Protocol</h1>
            <h1 className=" md:text-[60px] font-extrabold  leading-tighter text-[30px] tracking-tighter mb-4" data-aos="zoom-y-out"> Foundation</h1>
            <div className=" mx-auto flex flex-col flex-wrap items-center ">
              <p className="text-[15px] w-[33em] text-gray-600 mb-3" >An independent organization dedicated to supporting the adoption and sustainability of Panther Protocol.</p>
              <div className=" mb-[-3em]   flex flex-col justify-center">
              <Image src={eye} alt={''} className='w-[65em]  mt-[-7em]  nonMobile z-[-1]  '/>
              </div>
       
              
            </div>
         
          </div>


         

        </div>

      </div>
    </section>
    <section className=" mb-[-28em] w-[100vw] mobile flex flex-row justify-center">
 <Image src={bg} alt={''}  className='w-[300vw] absolute mobile  self-center overflow-hidden   z-[-2]'/>
      {/* Illustration behind hero content */}
      <div className=" mb-[40em] mobile absolute left-1/2 transform -translate-x-1/2 bottom-[20em]  pointer-events-none -z-1" aria-hidden="true">
      
       
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 mobile ">

        {/* Hero content */}
        <div className="pt-32 pb-12 md:pt-40 md:pb-20 mobile">

          {/* Section header */}
          <div className="text-center mt-[-.81em] pb-12 md:pb-16 mobile">
            <h1 className="text-[38px] md:text-[60px] font-extrabold leading-tighter tracking-tighter mb-[-.101em]" data-aos="zoom-y-out">Panther Protocol </h1>
            <h1 className=" md:text-[60px] font-extrabold  leading-tighter text-[38px] tracking-tighter mb-1" data-aos="zoom-y-out"> Foundation</h1>
            <div className="max-w-3xl mx-auto flex flex-col flex-wrap items-center ">
              <p className="text-[12px] max-w-[80vw]  text-gray-600 mb-3" >An independent organization dedicated to supporting the adoption and sustainability of Panther Protocol.</p>
              <div className="max-w-xs mb-[8em] mx-auto sm:max-w-none sm:flex sm:justify-center">
            
              </div>
       
              
            </div>
            <div className='flex flex-col items-center'>
            <Image src={eye} alt={''} className='max-w-[30em]   mt-[-12em] left-[-1.8em] mobile  mb-[-10em] '/></div>
          </div>


         

        </div>

      </div>
    </section></>
  )
}