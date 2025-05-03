import React from 'react'
import { FaWhatsapp } from "react-icons/fa";


const Poster = () => {
  return (
    <a 

    href='https://wa.me/905362957219'
    className='w-[80%] rel bg-gradient-to-t hover:shadow-2xl  shadow transition-all duration-300 ease-in-out from-mh-darkBlue to-mh-lightBlue flex items-center justify-center h-[70px] md:h-[100px] container mx-auto  gap-10 cursor-pointer
    rounded-bl-none rounded-tr-none rounded-br-[25px] rounded-tl-[25px] md:rounded-br-[50px]  md:rounded-tl-[50px]'>
        {/* <h2 className='text-white text-4xl'> Apsiyon uygulamasinda bizi bula bilirsiniz</h2> */}
        {/* <img src="/apsiyon.svg" alt="" className='h-[20px] md:h-[30px] '/> */}
        <FaWhatsapp className='h-[40px] w-[40px]  text-white animate-pulse'/>
       <p className='text-white text-lg md:text-2xl '>

       Hemen bizimle iletişime geçin!
       </p>
    </a>
  )
}

export default Poster