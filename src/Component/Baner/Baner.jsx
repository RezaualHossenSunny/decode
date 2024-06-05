import React from 'react'
import baner from '../../assets/baner.png'
const Baner = () => {
  return (
    <div className='max-w-container mx-auto flex'>


        <div className='w-2/4 py-44'>
            <h1 className='font-black  text-[58px] text-[#292525] w-[689px]'>We help you create
            your <span className="text-comon">website</span></h1>

            <p className='py-7 text-[#000] text-xl font-normal'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. At ut turpis adipiscing tempus, magna elit nunc iaculis sit. Libero velit quis leo non. At donec egestas cras in libero pellentesque. Donec amet phasellus</p>


            <div className='flex gap-x-10 py-10'>
            <div className='font-abayia text-[#fff] font-extrabold text-base px-7 py-3 bg-comon rounded-full w-[190px] text-center '>
            Get Started
            </div>

            <div className='font-abayia text-comon border border-2 font-extrabold text-base px-7 py-3 bg-[#fff] rounded-full w-[190px] text-center '>
            Contact Us
            </div>
            </div>
        </div>



        <div className='w-2/4'>
            <img src={baner}/>
        </div>

    </div>
  )
}

export default Baner