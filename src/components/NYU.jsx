import React from 'react'
import HW1 from './HW1';
import HW2 from './HW2';
import agar from '../assets/agar.png'

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


             <div className='p-5 sm:text-right text-1xl font-bold font-mono'>
               <p>Interactive Computing: Project 3.0 </p>
            </div>
            {/* background-repeat: no-repeat;
        background-size: cover; */}
            <div style={{backgroundImage: `url(${agar})`}} className='shadow-lg shadow-[#040c16] group container bg-repeat bg-cover rounded-md flex justify-center items-center mx-auto content-div'> 
            <div className='opacity-0 text-center group-hover:opacity-100'>
                <span className='text-2xl  font-bold text-white tracking-wider'>
                Agar.io Remix
                </span>
                <div className='pt-8 text-center'>
                <a href="https://agar-io-stanno.netlify.app/" target="_blank" rel="noopener noreferrer">
                            <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                            Live Demo
                            </button>
                        </a>
                <a href="https://github.com/stanleywalker1/agar.io.stanno" target="_blank" rel="noopener noreferrer">
                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Github
                    </button>
                </a>
                    
                </div>
             </div>
            </div>
            <div className='p-5 sm:text-left text-1xl font-mono'>
                <p>Oct 17, 2022</p>
                <p>
                This is my take on the classic agar.io game from my middle school era. This project is open source with code avalible in the github repo above. All the automated movement is derived from perlin noise. Built for Interactive Computing at NYU w/ Professor Kapp. Sound effects produced by @ha.hahao.
                </p>
             </div>


             <div className='mt-[80px] pb-5 sm:text-right text-1xl font-bold font-mono'>
              <p>Interactive Computing: Midterm Proposal </p>
            </div>
            
            <div className='p-5 sm:text-left text-1xl font-mono'>
                <p>Oct 17, 2022</p>
                <p>Interactive Ecosystem</p>
                <p>to be determined</p>
             </div>

        </div>
    </div>
  )
}

export default NYU