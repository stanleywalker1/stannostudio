import React from 'react'
import {Link} from 'react-scroll';
import {FaArrowUp} from 'react-icons/fa'

import { useScroll, animated } from '@react-spring/web'


import brooklyn from '../assets/ai-gallery/brooklyn.gif';
import brooklyndrunk from '../assets/ai-gallery/brooklyndrunk.gif';
import canadianexpress from '../assets/ai-gallery/canadianexpress.gif';
// import canadianexpress2 from '../assets/ai-gallery/canadianexpress2.gif';
// import lkndrone from '../assets/ai-gallery/lkndrone.gif';
// import lknsunset from '../assets/ai-gallery/lknsunset.gif';
import mountainpan from '../assets/ai-gallery/mountainpan.gif';
import mountaintrain from '../assets/ai-gallery/mountaintrain.gif';
import moutainbubbles from '../assets/ai-gallery/moutainbubbles.gif';
import shanghai from '../assets/ai-gallery/shanghai.gif';
import shanghaibing from '../assets/ai-gallery/shanghaibing.gif';
import shanghaimetro from '../assets/ai-gallery/shanghaimetro.gif';
import tram from '../assets/ai-gallery/tram.gif';
import icelandDrive from '../assets/ai-gallery/iceland-drive.gif'
import icelandHouse from '../assets/ai-gallery/iceland-house.gif'
import icelandSelfie from '../assets/ai-gallery/iceland-selfie.gif'
import icelandLights from '../assets/ai-gallery/iceland-lights.gif'
import organicBomb from '../assets/ai-gallery/organicbomb.gif'
import computerHeads from '../assets/ai-gallery/computer-heads.gif'
import computerStill from '../assets/ai-gallery/computer-still.gif'
import computerMonkey from '../assets/ai-gallery/computer-monkey.gif'
import polarMan from '../assets/ai-gallery/polar-man.gif'
import polarIceburgMesh from '../assets/ai-gallery/polar-iceburg-mesh.gif'
import polarIceburgStill from '../assets/ai-gallery/polar-iceburg-still.gif'
import iceFire from '../assets/ai-gallery/ice-fire.gif'
import atomicbomb from '../assets/ai-gallery/atomicbomb.gif'
import duneCloud from '../assets/ai-gallery/dune-cloud.gif'
import duneBranch from '../assets/ai-gallery/dune-branch.gif'
import duneDrone2 from '../assets/ai-gallery/dune-drone2.gif'
import duneSky from '../assets/ai-gallery/dune-sky.gif'
import propPlane from '../assets/ai-gallery/propplane-nyc.gif'
// import duneDrone1 from '../assets/ai-gallery/dune-drone.gif'
// import duneWave from '../assets/ai-gallery/dune-wave.gif'
// import miamiIsland from '../assets/ai-gallery/miami-island.gif'
// import duneDrone3 from '../assets/ai-gallery/dune-drone3.gif'

// import CustomScrollbar from './customScrollbar';

const GenAIContent = () => {

    const { scrollYProgress } = useScroll()

   

  return (

   
    <div name='runway' className=' w-full h-full bg-[#0a192f] text-gray-300'>


<animated.div
      style={{
        // height: '100vh', // Full viewport height
        // width: '100%', // Full width
        background: scrollYProgress.to(
            [0, 1], 
            [
                'linear-gradient(45deg, rgb(10,25,47), rgb(10,25,47), rgb(10,25,47))', 
                'linear-gradient(45deg, rgb(0, 0, 0), rgb(180, 180, 180), rgb(128, 128, 128))'
              ]
        )
      }}
    >
        {/* <CustomScrollbar targetSelector=".scroll-wrapper" /> */}
       
        <div className='flex flex-col justify-center items-center w-full h-full' style={{overflowY: 'auto', maxHeight: '10000px'}}>
        <div className='pt-20 pb-1 sm:text-center text-1xl'>
                <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600'>~~~~~~</p>
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
                    <div className="flex flex-wrap w-full">
                        <div className="w-full p-1 md:p-2">
                            <img alt="gallery" className="gallery block object-cover object-center w-full h-full rounded-lg"
                                src={polarMan}/>
                        </div>  
                    </div>
                </div>
                <div className="flex flex-wrap -m-1 md:-m-2 pt-0 p-5">
                    <div className="flex flex-wrap w-1/2">
                        <div className="w-full p-1 md:p-2">
                            <img alt="gallery" className="gallery block object-cover object-center w-full h-full rounded-lg"
                                src={polarIceburgMesh}/>
                        </div>  
                    </div>

                    <div className="flex flex-wrap w-1/2">
                        <div className="w-full p-1 md:p-2">
                        <img alt="gallery" className="gallery block object-cover object-center w-full h-full rounded-lg"
                            src={polarIceburgStill}/>
                        </div>
                     </div>
                </div>

                <div className="flex flex-wrap -m-1 md:-m-2 p-5 h-[450px]">
                    <div className="flex flex-wrap w-2/3">
                        <div className="w-full p-1 md:p-2 h-[80%]">
                        <img alt="gallery" className="gallery block object-cover object-center w-full h-[80%] rounded-lg "
                            src={icelandLights}/>
                            </div>
                    </div>

                    <div className="flex flex-wrap w-1/3">
                        <div className="w-full p-1 md:p-2 h-[80%]">
                        <img alt="gallery" className="gallery block object-cover object-center w-full h-[80%] rounded-lg"
                            src={icelandHouse}/>
                        </div>
                    </div>
                 </div>





                 <div className="flex flex-wrap -m-1 md:-m-2 p-5 h-[530px]">
                    <div className="flex flex-wrap w-1/3">
                        <div className="w-full p-1 md:p-2 h-[80%]">
                        <img alt="gallery" className="gallery block object-cover object-center w-full h-[80%] rounded-lg "
                            src={icelandSelfie}/>
                            </div>
                    </div>

                    <div className="flex flex-wrap w-2/3 ">
                        <div className="w-full p-1 md:p-2 h-[80%]">
                        <img alt="gallery" className="gallery block object-cover object-center w-full h-[80%] rounded-lg"
                            src={icelandDrive}/>
                        </div>
                    </div>
                 </div>

                 <div className="flex flex-wrap -m-1 md:-m-2 p-5">
                    <div className="flex flex-wrap w-full">
                        <div className="w-full p-1 md:p-2">
                        <img alt="gallery" className="gallery block object-cover object-center w-full h-full rounded-lg "
                            src={organicBomb}/>
                            </div>
                    </div>
                 </div>




                 <div className="flex flex-wrap -m-1 md:-m-2 pt-0 p-5">
                    <div className="flex flex-wrap w-3/5">
                    <div className="w-full p-1 md:p-2">
                        <img alt="gallery" className="gallery block object-cover object-center w-full h-full rounded-lg"
                            src={computerStill}/>
                        </div>  
                    </div>

                    <div className="flex flex-wrap w-2/5">
                        <div className="w-full p-1 md:p-2">
                        <img alt="gallery" className="gallery block object-cover object-center w-full h-full rounded-lg"
                            src={computerHeads}/>
                        </div>
                        <div className="w-full p-1 md:p-2">
                        <img alt="gallery" className="gallery block object-cover object-center w-full rounded-lg"
                            src={computerMonkey}/>
                        </div> 
                     </div>
                </div>



                <div className="flex flex-wrap -m-1 md:-m-2 pt-0 p-5">
                    <div className="flex flex-wrap w-1/2">
                        <div className="w-full p-1 md:p-2">
                            <img alt="gallery" className="gallery block object-cover object-center w-full h-full rounded-lg"
                                src={atomicbomb}/>
                        </div>  
                    </div>

                    <div className="flex flex-wrap w-1/2">
                        <div className="w-full p-1 md:p-2">
                        <img alt="gallery" className="gallery block object-cover object-center w-full h-full rounded-lg"
                            src={iceFire}/>
                        </div>
                     </div>
                </div>

                <div className="flex flex-wrap -m-1 md:-m-2 p-5">
                    <div className="flex flex-wrap w-full">
                        <div className="w-full p-1 md:p-2">
                        <img alt="gallery" className="gallery block object-cover object-center w-full h-full rounded-lg "
                            src={duneCloud}/>
                            </div>
                    </div>
                 </div>


                 <div className="flex flex-wrap -m-1 md:-m-2 pt-0 p-5">
                    <div className="flex flex-wrap w-2/5">
                    <div className="w-full p-1 md:p-2">
                        <img alt="gallery" className="gallery block object-cover object-center w-full h-full rounded-lg"
                            src={duneSky}/>
                        </div>  
                        <div className="w-full p-1 md:p-2">
                        <img alt="gallery" className="gallery block object-cover object-center w-full h-full rounded-lg"
                            src={duneDrone2}/>
                        </div>
                    </div>

                    <div className="flex flex-wrap w-3/5">
                        <div className="w-full p-1 md:p-2">
                        <img alt="gallery" className="gallery block object-cover object-right w-full h-full rounded-lg"
                            src={duneBranch}/>
                        </div>
                       
                     </div>
                </div>



                 <div className="flex flex-wrap -m-1 md:-m-2 pt-0 p-5">
                    <div className="flex flex-wrap w-full">
                        <div className="w-full p-1 md:p-2">
                            <img alt="gallery" className="gallery block object-cover object-center w-full h-full rounded-lg"
                                src={tram}/>
                        </div>  
                    </div>
                </div>


                 <div className="flex flex-wrap -m-1 md:-m-2 pt-0 p-5">
                    <div className="flex flex-wrap w-1/2">
                        <div className="w-full p-1 md:p-2">
                            <img alt="gallery" className="gallery block object-cover object-center w-full h-full rounded-lg"
                                src={brooklyndrunk}/>
                        </div>  
                    </div>

                    <div className="flex flex-wrap w-1/2">
                        <div className="w-full p-1 md:p-2">
                        <img alt="gallery" className="gallery block object-cover object-center w-full h-full rounded-lg"
                            src={brooklyn}/>
                        </div>
                     </div>
                </div>

                <div className="flex flex-wrap -m-1 md:-m-2 pt-0 p-5">
                    <div className="flex flex-wrap w-full">
                        <div className="w-full p-1 md:p-2">
                            <img alt="gallery" className="gallery block object-cover object-center w-full h-full rounded-lg"
                                src={propPlane}/>
                        </div>  
                    </div>
                </div>


                    {/* BROOKLYN 3X COLLAGE */}
                {/* <div className="flex flex-wrap -m-1 md:-m-2 pt-0 p-5">
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
                </div> */}

              

                <div className="flex flex-wrap -m-1 md:-m-2 pt-0 p-5">
                    <div className="flex flex-wrap w-1/3">
                        <div className="w-full p-1 md:p-2">
                        <img alt="gallery" className="gallery block object-cover object-center w-full rounded-lg"
                            src={shanghaimetro}/>
                        </div>
                    </div>

                    <div className="flex flex-wrap w-1/3">
                        <div className="w-full p-1 md:p-2 ">
                        <img alt="gallery" className="gallery block object-cover object-center w-full rounded-lg pb-1 flex items-start"
                            src={shanghai}/>
                        </div>
                    </div>
                    <div className="flex flex-wrap w-1/3">
                        <div className="w-full p-1 md:p-2 ">
                        <img alt="gallery" className="gallery block object-cover object-center w-full rounded-lg pt-1"
                            src={shanghaibing}/>
                        </div>
                    </div>
                </div>



            </div>
            </section>

       
            
            <div className='mt-[80px] pb-5 pl-7 pr-7 sm:text-right text-1xl font-bold font-mono'>
              <p>Made with RunwayML - Collection of my Artificial Life</p>
            </div>

            <div className="max-w-[1000px] w-full flex justify-around pb-20">
                <div>
                <p className='paragraph sm:text-left text-1xl pr-4 font-mono text-gray-400'>
                more on my twitter
                </p>
                </div>
                </div>     
             
        </div>

        <div className='w-full h-[80px] flex justify-center items-center text-gray-300'>

        {/* menu */}
        <ul >
            <li>
                <Link
                    to="/"
                    onClick={() => { window.scroll({
                        top: 0,
                        left: 0,
                        behavior: "smooth",
                        }); }}
                    className='flex row items-center text-pink-600'> Back to the top<FaArrowUp className='ml-3'/>
                </Link>
                
                
            </li>
        </ul>

    </div>

   
        </animated.div>
    </div>
    
    
  )
}

export default GenAIContent