import React from 'react'

import brooklyn from '../assets/ai-gallery/brooklyn.gif';
import brooklyndrunk from '../assets/ai-gallery/brooklyndrunk.gif';
import canadianexpress from '../assets/ai-gallery/canadianexpress.gif';
import canadianexpress2 from '../assets/ai-gallery/canadianexpress2.gif';
import lkndrone from '../assets/ai-gallery/lkndrone.gif';
import lknsunset from '../assets/ai-gallery/lknsunset.gif';
import mountainpan from '../assets/ai-gallery/mountainpan.gif';
import mountaintrain from '../assets/ai-gallery/mountaintrain.gif';
import moutainbubbles from '../assets/ai-gallery/moutainbubbles.gif';
import shanghai from '../assets/ai-gallery/shanghai.gif';
import shanghaibing from '../assets/ai-gallery/shanghaibing.gif';
import shanghaimetro from '../assets/ai-gallery/shanghaimetro.gif';
import tram from '../assets/ai-gallery/tram.gif';









const GenAIContent = () => {

  return (
    <div name='mit' className='w-full h-full bg-[#0a192f] text-gray-300'>
            
        <div className='flex flex-col justify-center items-center w-full h-full'>
        <div className='pt-20 pb-1 sm:text-center text-1xl'>
                <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600'>loud lenses </p>
                <p className='pt-6'>all you touch and all you see, is all your life will ever be</p>
            </div>
      

            <section className="overflow-hidden text-gray-700">
            <div className="container px-9 py-2 mx-auto lg:pt-18 md:pt-15 sm:pt-10">
                <div className="flex flex-wrap -m-1 md:-m-2 p-5">
                    <div className="flex flex-wrap w-2/3">
                        <div className="w-full p-1 md:p-2">
                        <img alt="gallery" className="gallery block object-cover object-center w-full h-full rounded-lg "
                            src={mountainpan}/>
                            </div>
                    </div>

                    <div className="flex flex-wrap w-1/3">
                        <div className="w-full p-1 md:p-2">
                        <img alt="gallery" className="gallery block object-cover object-center w-full h-full rounded-lg"
                            src={canadianexpress}/>
                        </div>
                        <div className="w-1/2 p-1 md:p-2">
                        <img alt="gallery" className="gallery block object-cover object-center w-full h-full rounded-lg"
                            src={mountaintrain}/>
                        </div>
                        <div className="w-1/2 p-1 md:p-2">
                        <img alt="gallery" className="gallery block object-cover object-center w-full h-full rounded-lg"
                            src={moutainbubbles}/>
                        </div>
                    </div>
                 </div>

                <div className="flex flex-wrap -m-1 md:-m-2 pt-0 p-5">
                    <div className="flex flex-wrap w-2/5">
                    <div className="w-full p-1 md:p-2">
                        <img alt="gallery" className="gallery block object-cover object-center w-full h-full rounded-lg"
                            src={brooklyndrunk}/>
                        </div>
                        <div className="w-full p-1 md:p-2">
                        <img alt="gallery" className="gallery block object-cover object-center w-full rounded-lg"
                            src={brooklyn}/>
                        </div>   
                    </div>

                    <div className="flex flex-wrap w-3/5">
                        <div className="w-full p-1 md:p-2">
                        <img alt="gallery" className="gallery block object-cover object-center w-full h-full rounded-lg"
                            src={tram}/>
                        </div>
                    </div>
                </div>

                <div className="flex flex-wrap -m-1 md:-m-2 pt-0 p-5">
                <div className="flex flex-wrap w-1/2">
                    <div className="w-full h-[70%] p-1 md:p-2">
                    <img alt="gallery" className="gallery block object-cover object-center w-full h-1/2 rounded-lg "
                        src={shanghaimetro}/>
                    </div>
                </div>

                <div className="flex flex-wrap w-1/2">
                    <div className="w-full h-[70%] p-1 md:p-2 ">
                    <img alt="gallery" className="gallery block object-cover object-center w-full h-1/4 rounded-lg pb-1 flex items-start"
                        src={shanghai}/>
                    <img alt="gallery" className="gallery block object-cover object-center w-full h-1/4 rounded-lg pt-1"
                        src={shanghaibing}/>
                    </div>
                </div>
                </div>
            </div>
            </section>

       
            
            <div className='mt-[80px] pb-5 pl-7 pr-7 sm:text-right text-1xl font-bold font-mono'>
              <p>Welcome to my MIT Media Lab portfolio page. Built in React w/ Tailwind CSS. </p>
            </div>

            <div className="max-w-[1000px] w-full flex justify-around pb-20">
                <div>
                <p className='paragraph sm:text-left text-1xl pr-4 font-mono text-gray-400'>
                Hi! My name is Stanley.
                </p>
                </div>
                </div>     
             
        </div>
        
    </div>
    
  )
}

export default GenAIContent