import React, { useRef , useEffect, useState} from 'react'
import {Link} from 'react-scroll';
import {FaArrowUp} from 'react-icons/fa'

import { useScroll, animated } from '@react-spring/web'


import brooklyn from '../assets/ai-gallery/brooklyn.gif';
import brooklyndrunk from '../assets/ai-gallery/brooklyndrunk.gif';
import canadianexpress from '../assets/ai-gallery/canadianexpress.gif';

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


// more content that I can save for later ;D 
// import canadianexpress2 from '../assets/ai-gallery/canadianexpress2.gif';
// import lkndrone from '../assets/ai-gallery/lkndrone.gif';
// import lknsunset from '../assets/ai-gallery/lknsunset.gif';
// import duneDrone1 from '../assets/ai-gallery/dune-drone.gif'
// import duneWave from '../assets/ai-gallery/dune-wave.gif'
// import miamiIsland from '../assets/ai-gallery/miami-island.gif'
// import duneDrone3 from '../assets/ai-gallery/dune-drone3.gif'

import brooklynLow from '../assets/ai-gallery/low-res-ai-placeholder/brooklyn-low.jpg';
import brooklyndrunkLow from '../assets/ai-gallery/low-res-ai-placeholder/brooklyndrunk-low.jpg';
import canadianexpressLow from '../assets/ai-gallery/low-res-ai-placeholder/canadianexpress-low.jpg';
import mountainpanLow from '../assets/ai-gallery/low-res-ai-placeholder/mountainpan-low.jpg';
import mountaintrainLow from '../assets/ai-gallery/low-res-ai-placeholder/mountaintrain-low.jpg';
import moutainbubblesLow from '../assets/ai-gallery/low-res-ai-placeholder/moutainbubbles-low.jpg';
import shanghaiLow from '../assets/ai-gallery/low-res-ai-placeholder/shanghai-low.jpg';
import shanghaibingLow from '../assets/ai-gallery/low-res-ai-placeholder/shanghaibing-low.jpg';
import shanghaimetroLow from '../assets/ai-gallery/low-res-ai-placeholder/shanghaimetro-low.jpg';
import tramLow from '../assets/ai-gallery/low-res-ai-placeholder/tram-low.jpg';
import icelandDriveLow from '../assets/ai-gallery/low-res-ai-placeholder/iceland-drive-low.jpg'
import icelandHouseLow from '../assets/ai-gallery/low-res-ai-placeholder/iceland-house-low.jpg'
import icelandSelfieLow from '../assets/ai-gallery/low-res-ai-placeholder/iceland-selfie-low.jpg'
import icelandLightsLow from '../assets/ai-gallery/low-res-ai-placeholder/iceland-lights-low.jpg'
import organicBombLow from '../assets/ai-gallery/low-res-ai-placeholder/organicbomb-low.jpg'
import computerHeadsLow from '../assets/ai-gallery/low-res-ai-placeholder/computer-heads-low.jpg'
import computerStillLow from '../assets/ai-gallery/low-res-ai-placeholder/computer-still-low.jpg'
import computerMonkeyLow from '../assets/ai-gallery/low-res-ai-placeholder/computer-monkey-low.jpg'
import polarManLow from '../assets/ai-gallery/low-res-ai-placeholder/polar-man-low.jpg'
import polarIceburgMeshLow from '../assets/ai-gallery/low-res-ai-placeholder/polar-iceburg-mesh-low.jpg'
import polarIceburgStillLow from '../assets/ai-gallery/low-res-ai-placeholder/polar-iceburg-still-low.jpg'
import iceFireLow from '../assets/ai-gallery/low-res-ai-placeholder/ice-fire-low.jpg'
import atomicbombLow from '../assets/ai-gallery/low-res-ai-placeholder/atomicbomb-low.jpg'
import duneCloudLow from '../assets/ai-gallery/low-res-ai-placeholder/dune-cloud-low.jpg'
import duneBranchLow from '../assets/ai-gallery/low-res-ai-placeholder/dune-branch-low.jpg'
import duneDrone2Low from '../assets/ai-gallery/low-res-ai-placeholder/dune-drone2-low.jpg'
import duneSkyLow from '../assets/ai-gallery/low-res-ai-placeholder/dune-sky-low.jpg'
import propPlaneLow from '../assets/ai-gallery/low-res-ai-placeholder/propplane-nyc-low.jpg'



function useOnScreen(options) {
    const ref = useRef(null);
    const [isIntersecting, setIntersecting] = useState(false);
  
    useEffect(() => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          setIntersecting(entry.isIntersecting);
        },
        options
      );
      if (ref.current) {
        observer.observe(ref.current);
      }
      return () => {
        observer.unobserve(ref.current);
      };
    }, [ref, options]);
  
    return [ref, isIntersecting];
  }

const GenAIContent = () => {

    const { scrollYProgress } = useScroll()

  return (

    <div name='runway' className=' w-full h-full bg-[#0a192f] text-gray-300'>
        <animated.div
            style={{
                background: scrollYProgress.to(
                    [0, 1], 
                    [
                        'linear-gradient(45deg, rgb(10,25,47), rgb(10,25,47), rgb(10,25,47))', 
                        'linear-gradient(45deg, rgb(0, 0, 0), rgb(180, 180, 180), rgb(128, 128, 128))'
                    ]
                )
            }}
            >
    
        <div className='flex flex-col justify-center items-center w-full h-full' style={{overflowY: 'auto', maxHeight: '12000px'}}>
        <div className='pt-20 pb-1 sm:text-center text-1xl'>
                <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600'>~~~~~~</p>
                <p className='pt-6'>all you touch and all you see, is all your life will ever be</p>
            </div>

            <section className="overflow-hidden text-gray-700">
            <div className="container px-0 py-2 mx-auto lg:pt-18 md:pt-15 sm:pt-10" style ={{scrollSnapType: 'y mandatory', overscrollBehaviorY: "contain"}}>
                <div className="flex flex-wrap -m-1 md:-m-2 md:p-5" style={{ scrollSnapAlign: 'center' }}>
                    <div className="flex flex-wrap md:w-2/3 w-full">
                        <div className="w-full p-1 md:p-2">
                        {/* <img alt="gallery" loading="lazy" className="gallery block object-cover object-center w-full h-full md:rounded-lg "
                            src={mountainpan}/> */}
                            <LazyImage src={mountainpan} blurredSrc={mountainpanLow} alt="Mountain Panorama" />
                            </div>
                    </div>

                    <div className="flex flex-wrap md:w-1/3 w-full">
                        <div className="w-full p-1 md:p-2">
                        {/* <img alt="gallery" loading="lazy" className="gallery block object-cover object-center w-full h-full md:rounded-lg"
                            src={canadianexpress}/> */}
                            <LazyImage src={canadianexpress} blurredSrc={canadianexpressLow} alt="Mountain Panorama" />
                        </div>
                        <div className="md:w-1/2 w-full p-1 md:p-2">
                        {/* <img alt="gallery" loading="lazy" className="gallery block object-cover object-center w-full h-full md:rounded-lg"
                            src={mountaintrain}/> */}
                             <LazyImage src={mountaintrain} blurredSrc={mountaintrainLow} alt="Mountain Panorama" />
                        </div>
                        <div className="md:w-1/2 w-full p-1 md:p-2">
                        {/* <img alt="gallery" loading="lazy" className="gallery block object-cover object-center w-full h-full md:rounded-lg"
                            src={moutainbubbles}/> */}
                             <LazyImage src={moutainbubbles} blurredSrc={moutainbubblesLow} alt="Mountain Panorama" />
                        </div>
                    </div>
                 </div>

               

                <div className="flex flex-wrap -m-1 md:-m-2 md:pt-0 md:p-5 pt-2"  style={{ scrollSnapAlign: 'center' }}>
                    <div className="flex flex-wrap w-full">
                        <div className="w-full p-1 md:p-2">
                            {/* <img alt="gallery" loading="lazy" className="gallery block object-cover object-center w-full h-full md:rounded-lg"
                                src={polarMan}/> */}
                                  <LazyImage src={polarMan}  blurredSrc={polarManLow} alt="Mountain Panorama" />
                        </div>  
                    </div>
                    <div className="flex flex-wrap md:w-1/2 w-full">
                        <div className="w-full p-1 md:p-2">
                            {/* <img alt="gallery" loading="lazy" className="gallery block object-cover object-center w-full h-full md:rounded-lg"
                                src={polarIceburgMesh}/> */}
                                  <LazyImage src={polarIceburgMesh}  blurredSrc={polarIceburgMeshLow} alt="Mountain Panorama" />
                        </div>  
                    </div>

                    <div className="flex flex-wrap md:w-1/2 w-full">
                        <div className="w-full p-1 md:p-2">
                        {/* <img alt="gallery" loading="lazy" className="gallery block object-cover object-center w-full h-full md:rounded-lg"
                            src={polarIceburgStill}/> */}

                        <LazyImage src={polarIceburgStill}  blurredSrc={polarIceburgStillLow} alt="Mountain Panorama" />
                        </div>
                     </div>
                </div>


                <div className="flex flex-wrap -m-1 md:-m-2 md:pb-0 md:pt-0 md:p-5 pt-2" style={{ scrollSnapAlign: 'center' }} >
                    <div className="flex md:w-full flex-wrap">
                        <div className="md:w-2/3 w-full p-1 md:p-2">
                            {/* <img alt="gallery" loading="lazy" className="gallery block object-cover object-center w-full h-full md:rounded-lg"
                                src={icelandLights}/> */}
                                 <LazyImage src={icelandLights}  blurredSrc={icelandLightsLow} alt="Mountain Panorama" />
                        </div>  
                        <div className="md:w-1/3 w-full p-1 md:p-2">
                            {/* <img alt="gallery" loading="lazy" className="gallery block object-cover object-center w-full h-full md:rounded-lg"
                                src={icelandHouse}/> */}
                                 <LazyImage src={icelandHouse}  blurredSrc={icelandHouseLow} alt="Mountain Panorama" />
                        </div>  
                    </div>
                    
                    <div className="flex md:w-full flex-wrap">
                        <div className="md:w-1/3 w-full p-1 md:p-2">
                            {/* <img alt="gallery" loading="lazy" className="gallery block object-cover object-center w-full h-full md:rounded-lg"
                                src={icelandSelfie}/> */}
                                 <LazyImage src={icelandSelfie}  blurredSrc={icelandSelfieLow} alt="Mountain Panorama" />
                        </div>  
                        <div className="md:w-2/3 w-full p-1 md:p-2">
                            {/* <img alt="gallery" loading="lazy" className="gallery block object-cover object-center w-full h-full md:rounded-lg"
                                src={icelandDrive}/> */}
                                 <LazyImage src={icelandDrive}  blurredSrc={icelandDriveLow} alt="Mountain Panorama" />
                        </div>  
                    </div>
                </div>

                 <div className="flex flex-wrap -m-1 md:-m-2 md:p-5" style={{ scrollSnapAlign: 'center' }}>
                    <div className="flex flex-wrap w-full">
                        <div className="w-full p-1 md:p-2">
                        {/* <img alt="gallery" loading="lazy" className="gallery block object-cover object-center w-full h-full md:rounded-lg "
                            src={organicBomb}/> */}
                             <LazyImage src={organicBomb}  blurredSrc={organicBombLow} alt="Mountain Panorama" />
                            </div>
                    </div>
                 </div>

                 <div className="flex flex-wrap -m-1 md:-m-2 md:pt-0 md:p-5" style={{ scrollSnapAlign: 'center' }}>
                    <div className="flex flex-wrap md:w-3/5 w-full">
                    <div className="w-full p-1 md:p-2">
                        {/* <img alt="gallery" loading="lazy" className="gallery block object-cover object-center w-full h-full md:rounded-lg"
                            src={computerStill}/> */}
                             <LazyImage src={computerStill}  blurredSrc={computerStillLow} alt="Mountain Panorama" />
                        </div>  
                    </div>

                    <div className="flex flex-wrap md:w-2/5 w-full">
                        <div className="w-full p-1 md:p-2">
                        {/* <img alt="gallery" loading="lazy" className="gallery block object-cover object-center w-full h-full md:rounded-lg"
                            src={computerHeads}/> */}
                             <LazyImage src={computerHeads}  blurredSrc={computerHeadsLow} alt="Mountain Panorama" />
                        </div>
                        <div className="w-full p-1 md:p-2">
                        {/* <img alt="gallery" loading="lazy" className="gallery block object-cover object-center w-full md:rounded-lg"
                            src={computerMonkey}/> */}
                             <LazyImage src={computerMonkey}  blurredSrc={computerMonkeyLow} alt="Mountain Panorama" />
                        </div> 
                     </div>
                </div>

                <div className="flex flex-wrap -m-1 md:-m-2 md:pt-0 md:p-5" style={{ scrollSnapAlign: 'center' }}>
                    <div className="flex flex-wrap md:w-1/2 w-full">
                        <div className="w-full md:p-2 pt-2">
                            {/* <img alt="gallery" loading="lazy" className="gallery block object-cover object-center w-full h-full md:rounded-lg"
                                src={atomicbomb}/> */}
                                 <LazyImage src={atomicbomb}  blurredSrc={atomicbombLow} alt="Mountain Panorama" />
                        </div>  
                    </div>

                    <div className="flex flex-wrap md:w-1/2 w-full">
                        <div className="w-full md:p-2 pb-2">
                        {/* <img alt="gallery" loading="lazy" className="gallery block object-cover object-center w-full h-full md:rounded-lg"
                            src={iceFire}/> */}
                             <LazyImage src={iceFire}  blurredSrc={iceFireLow} alt="Mountain Panorama" />
                        </div>
                     </div>
                </div>

                <div className="flex flex-wrap -m-1 md:-m-2 md:p-5 md:pb-1 md:pt-0">
                    <div className="flex flex-wrap w-full">
                        <div className="w-full p-1 md:p-2">
                        {/* <img alt="gallery" loading="lazy" className="gallery block object-cover object-center w-full h-full md:rounded-lg "
                            src={duneCloud}/> */}
                             <LazyImage src={duneCloud}  blurredSrc={duneCloudLow} alt="Mountain Panorama" />
                            </div>
                    </div>
                 </div>


                 <div className="flex flex-wrap -m-1 md:-m-2 md:pt-0 md:p-5">
                    <div className="flex flex-wrap md:w-2/5 w-full">
                    <div className="w-full p-1 md:p-2">
                        {/* <img alt="gallery" className="gallery block object-cover object-center w-full h-full md:rounded-lg"
                            src={duneSky}/> */}
                             <LazyImage src={duneSky}  blurredSrc={duneSkyLow} alt="Mountain Panorama" />
                        </div>  
                        <div className="w-full pb-1 md:p-2">
                        {/* <img alt="gallery" loading="lazy" className="gallery block object-cover object-center w-full h-full md:rounded-lg"
                            src={duneDrone2}/> */}
                             <LazyImage src={duneDrone2}  blurredSrc={duneDrone2Low} alt="Mountain Panorama" />
                        </div>
                    </div>

                    <div className="flex flex-wrap md:w-3/5 w-full">
                        <div className="w-full pb-1 md:p-2">
                        {/* <img alt="gallery" loading="lazy" className="gallery block object-cover object-right w-full h-full md:rounded-lg"
                            src={duneBranch}/> */}
                             <LazyImage src={duneBranch}  blurredSrc={duneBranchLow} alt="Mountain Panorama" />
                        </div>
                       
                     </div>
                </div>



                 <div className="flex flex-wrap -m-1 md:-m-2 pt-0 pb-1 md:p-5">
                    <div className="flex flex-wrap w-full">
                        <div className="w-full p-1 md:p-2">
                            {/* <img alt="gallery" loading="lazy" className="gallery block object-cover object-center w-full h-full md:rounded-lg"
                                src={tram}/> */}
                                 <LazyImage src={tram}  blurredSrc={tramLow} alt="Mountain Panorama" />
                        </div>  
                    </div>
                </div>

                 <div className="flex flex-wrap -m-1 md:-m-2 pt-0 md:p-5">
                    <div className="flex flex-wrap md:w-1/2 w-full">
                        <div className="w-full p-1 md:p-2">
                            {/* <img alt="gallery" loading="lazy" className="gallery block object-cover object-center w-full h-full md:rounded-lg"
                                src={brooklyndrunk}/> */}
                                 <LazyImage src={brooklyndrunk}  blurredSrc={brooklyndrunkLow} alt="Mountain Panorama" />
                        </div>  
                    </div>

                    <div className="flex flex-wrap md:w-1/2 w-full">
                        <div className="w-full p-1 md:p-2">
                        {/* <img alt="gallery" loading="lazy" className="gallery block object-cover object-center w-full h-full md:rounded-lg"
                            src={brooklyn}/> */}
                             <LazyImage src={brooklyn}  blurredSrc={brooklynLow} alt="Mountain Panorama" />
                        </div>
                     </div>
                </div>

                <div className="flex flex-wrap -m-1 md:-m-2 pt-0 md:p-5 ">
                    <div className="flex flex-wrap w-full">
                        <div className="w-full p-1 md:p-2">
                            {/* <img alt="gallery" loading="lazy" className="gallery block object-cover object-center w-full h-full md:rounded-lg"
                                src={propPlane}/> */}
                                  <LazyImage src={propPlane}  blurredSrc={propPlaneLow} alt="Mountain Panorama" />
                        </div>  
                    </div>
                </div>              

                <div className="flex flex-wrap -m-1 md:-m-2 pt-0 md:p-5">
                    <div className="flex flex-wrap md:w-1/3 w-full">
                        <div className="w-full p-1 md:p-2">
                        {/* <img alt="gallery" loading="lazy" className="gallery block object-cover object-center w-full md:rounded-lg"
                            src={shanghaimetro}/> */}
                              <LazyImage src={shanghaimetro}  blurredSrc={shanghaimetroLow} alt="Mountain Panorama" />
                        </div>
                    </div>

                    <div className="flex flex-wrap md:w-1/3 w-full">
                        <div className="w-full p-1 md:p-2 ">
                        {/* <img alt="gallery" loading="lazy" className="gallery block object-cover object-center w-full md:rounded-lg pb-1 flex items-start"
                            src={shanghai}/> */}
                              <LazyImage src={shanghai}  blurredSrc={shanghaiLow} alt="Mountain Panorama" />
                        </div>
                    </div>
                    <div className="flex flex-wrap md:w-1/3 w-full">
                        <div className="w-full p-1 md:p-2 ">
                        {/* <img alt="gallery" loading="lazy" className="gallery block object-cover object-center w-full md:rounded-lg pt-1"
                            src={shanghaibing}/> */}
                              <LazyImage src={shanghaibing}  blurredSrc={shanghaibingLow} alt="Mountain Panorama" />
                        </div>
                    </div>
                </div>

            </div>
            </section>
            

            <div className='mt-[80px] pb-5 pl-7 pr-7 sm:text-right text-1xl font-bold font-mono'>
           
              <p> a gallery of moments in my life / made with tools provided by RunwayML</p>
            </div>

            <div className="max-w-[1000px] w-full flex justify-around pb-20">
                <div>
                <p className='paragraph text-1xl sm:text-right font-mono text-gray-400'>
                more on twitter @stannostudio
                </p>
                </div>
                </div>     
             
        </div>

        <div className='w-full h-[80px] flex justify-center items-center text-gray-300'>

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


const LazyImage = ({ src, blurredSrc, alt }) => {
    const [ref, isOnScreen] = useOnScreen({
      rootMargin: "0px 0px -100px 0px",
    });
    
    const [isLoaded, setIsLoaded] = useState(false);
  
    const handleImageLoad = () => {
      setIsLoaded(true);
    };
  
    useEffect(() => {
      if (isOnScreen) {
        const img = new Image();
        img.src = src;
        img.onload = handleImageLoad;
      }
    }, [isOnScreen, src]);
  
    return (
      <div ref={ref} style={{ width: "100%", height: "100%" }}>
        <img
          alt={alt}
          src={isLoaded ? src : blurredSrc}
          className={`object-cover object-center w-full h-full transition-all duration-500 ease-in-out ${isLoaded ? 'blur-0' : 'blur-md'}`}
        />
      </div>
    );
  };
  

export default GenAIContent
