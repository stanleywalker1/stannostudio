import React from 'react'
import HW1 from './HW1';
import HW2 from './HW2';

const NYU = () => {

  return (
    <div name='nyu' className='w-full h-full bg-[#0a192f] text-gray-300'>
        <div className='flex flex-col justify-center items-center w-full h-full'>
           
               <div className='mt-[80px] pb-5 sm:text-right text-1xl font-bold font-mono'>
                <p>Interactive Computing: Project 1.0 </p>
                </div>
               
                <HW1></HW1>
          
            
            <div className='p-5 sm:text-left text-1xl font-mono'>
                <p>Sept 19, 2022</p>
                <p>I designed this accidentally while animating various shapes and lines in p5.js. This was a pretty quick assignment so I didn’t think too deep into it. I wrote it in pure p5.js and then used a React p5 wrapper to merge it onto this site - a nice little experiment. </p>
             </div>
        
      
               <div className='p-5 sm:text-right text-1xl font-bold font-mono'>
                <p>Interactive Computing: Project 2.0 </p>
                </div>
               
                
            
            <HW2/>
            
            <div className='p-5 sm:text-left text-1xl font-mono'>
                <p>Oct 3, 2022</p>
                <p>I made this pong game in pure p5.js and realized that the complexity of it made it difficult to wrap for React, so I leveraged p5 in-browser editor to simply add it here via iFrame. I’m pretty happy how this turned out; some slight bugs (if you can find them) but overall enjoyable. All the assets I generated in DallE-2 and the sound effects produced by @ha.hahao</p>
             </div>

             </div>

        
    </div>
  )
}

export default NYU