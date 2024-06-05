import React from 'react'
import logo from '../../assets/logo 1.png'
const Heder = () => {
  return (
    <>
     <div className='max-w-container mx-auto flex py-11'>

        {/* logo */}
        <div className='w-1/4'>
         <img src={logo}/>
        </div>

     {/* navbar */}
        <div className='w-2/4 flex justify-end gap-x-10  items-center'>
            <p className='font-abayia text-[#000] font-extrabold text-base'>Home</p>
            <p className='font-abayia text-comon font-extrabold text-base'>Services</p>
            <p className='font-abayia text-comon font-extrabold text-base'>Case</p>
            <p className='font-abayia text-comon font-extrabold text-base'>DaCode Specialists</p>
            

        </div>


        <div className='w-1/4  ml-12'>
            <div className='font-abayia text-[#fff] font-extrabold text-base px-7 py-3 bg-comon rounded-full w-[190px] text-center '>
            Request a quote
            </div>
        </div>
    </div> 
      
    </>
  )
}

export default Heder