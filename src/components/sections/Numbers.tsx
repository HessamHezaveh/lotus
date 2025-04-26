
import { countUpData } from '@/utils/data'
import React from 'react'
import CountUp from 'react-countup'
import { useInView } from 'react-intersection-observer'
const Numbers = () => {
    const[ref, inView] = useInView({
        threshold :0.5,
    })
  return (
    <div ref={ref} className='flex  w-full mx-auto  items-center justify-around  container '>
        {countUpData.map((item, index) => (
            
    <div key={index} className='relative flex items-center justify-center'>
    <div className='text-4xl sm:text-5xl md:text-6xl text-mh-gold opacity-40 hover:opacity-50 transition-all duration-300 ease-in-out -z-1 mb-2 font-bold text-center absolute'>
        {inView ? 
        <CountUp 
            start={0} 
            end={item.number}  
            duration={3} 
            delay={1}/>
        : null}
        +
    </div>
    <div>
        <h3 className='font-semibold text-center text-sm sm:text-lg md:text-xl  opacity-50 z-100 '>
            {item.title}
        </h3>
    </div>
    </div>
    ))}
    </div>
    
  )
}

export default Numbers