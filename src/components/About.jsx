import React from 'react'
import stannoProfile from '../assets/stannoProfile.png'

import dalle from '../assets/gallery/dalle.png';

import EEUkraine from '../assets/gallery/EmotionEchoUkraine.gif';
import ColorCircles from '../assets/gallery/mouseTrackerColorCircles.gif';

import noodle from '../assets/gallery/noodle.jpg';
import red from '../assets/gallery/red.png';
import synth from '../assets/gallery/synthNoHTML.gif';
import ee from '../assets/gallery/emotionecho.jpg';
import starGrowth from '../assets/gallery/starGrowth.gif';
import spine from '../assets/gallery/spineVid.gif';
import spineI from '../assets/gallery/spine.jpg';
import spikes from '../assets/gallery/spikes.gif';
import lucid from '../assets/gallery/lucid.gif';
import circle from '../assets/gallery/colorCircle.jpeg';
import eeGif from '../assets/gallery/eeGiffy.gif';
import waterpaint from '../assets/gallery/waterpaint.gif';
import colormush from '../assets/gallery/colormush.png';
import Robo from '../assets/robo.jpg'



const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-[#0a192f] text-gray-300'>
        <div className='flex flex-col justify-center items-center w-full h-full'>
            <div className="max-w-[1000px] w-full flex justify-around">
                <div className='sm:text-right pb-8 flex justify-end items-end'>
                    {/* <div className=''> */}
                            <img src={stannoProfile} alt="Logo Image" style={{width: '100px'}}/>
                            <p className='text-4xl px-4 pb-4 font-bold underline underline-offset-4 decoration-pink-600'>
                                About
                            </p>
                           
                    {/* </div> */}
                </div>
                <div></div>
                </div>
                <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
                   <div className='sm:text-right text-2xl font-mono'>
                   <p>Building for digital and physical</p>
                  
                </div>
                <div>
                    {/* <p className='font-mono py-3'>Web Develepemnt, Wearable Tech, WebGL, AR, and generative AI.</p> */}
                    <p className='font-mono py-3'>Current: Ello.com | Former:  AI at Cornell Univeristy, Interactive Media at NYU Shanghai, DJI Technology, Yambo Studio, etc. </p>
                
                </div>



              

            </div>
            <section className="max-w-[1000px] w-full grid sm:grid-cols-1 gap-8 px-4">
            <div className="container px-5 py-2 mx-auto lg:pt-18 md:pt-15 sm:pt-10">
                <div className="flex flex-wrap -m-1 md:-m-2">
                <div className="flex flex-wrap w-1/3">
                    <div className="w-full p-1 md:p-2">
                    <img alt="gallery" className="gallery block object-cover object-center w-full h-full rounded-lg "
                        src={synth}/>
                           </div>
                    <div className="w-full p-1 md:p-2">
                    <img alt="gallery" className="gallery block object-cover object-center w-full h-full rounded-lg"
                        src={EEUkraine}/>
                    </div>
                </div>

                <div className="flex flex-wrap w-1/3">
                 <div className="w-1/2 p-1 md:p-2">
                    <img alt="gallery" className="gallery block object-cover object-center w-full h-full rounded-lg"
                        src={ColorCircles}/>
                    </div>
                    <div className="w-1/2 p-1 md:p-2">
                    <img alt="gallery" className="gallery block object-cover object-center w-full h-full rounded-lg"
                        src={lucid}/>
                    </div>

                    <div className="w-full p-1 md:p-2">
                    <img alt="gallery" className="gallery block object-cover object-center w-full h-full rounded-lg"
                        src={spineI}/>
                    </div>
                    <div className="w-1/2 p-1 md:p-2">
                    <img alt="gallery" className="gallery block object-cover object-center w-full h-full rounded-lg"
                        src={noodle}/>
                    </div>
                    <div className="w-1/2 p-1 md:p-2">
                    <img alt="gallery" className="gallery block object-cover object-center w-full h-full rounded-lg"
                        src={circle}/>
                    </div>
                </div>


                <div className="flex flex-wrap w-1/3">
                    <div className="w-full p-1 md:p-2">
                    <img alt="gallery" className="gallery block object-cover object-center w-full h-full rounded-lg"
                        src={eeGif}/>
                    </div>
                    <div className="w-1/2 p-1 md:p-2">
                    <img alt="gallery" className="gallery block object-cover object-center w-full h-full rounded-lg"
                        src={waterpaint}/>
                    </div>
                    <div className="w-1/2 p-1 md:p-2">
                    <img alt="gallery" className="gallery block object-cover object-center w-full h-full rounded-lg"
                        src={dalle}/>
                    </div>
                    <div className="w-full p-1 md:p-2">
                    <img alt="gallery" className="gallery block object-cover object-center w-full h-full rounded-lg"
                        src={Robo}/>
                    </div>
                </div>
                </div>
            </div>
            </section>
            <div>
                  {/* <p className='text-center font-mono py-3'> New York City - Shanghai - Tel Aviv</p> */}
                </div>
            
        </div>
    </div>
  )
}

export default About