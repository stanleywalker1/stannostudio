import React from 'react'
import HW1 from './HW1';
import HW2 from './HW2';
import Iframe from 'react-iframe';
import agar from '../assets/agar.png'
import sandbox from '../assets/doodlePreview.png'
import Gallery from './galleryProjects';


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
import stannoProfile from '../assets/stannoProfile.png'

const MIT = () => {

  return (
    <div name='mit' className='w-full h-full bg-[#0a192f] text-gray-300'>
       
        
        <div className='flex flex-col justify-center items-center w-full h-full'>
        <div className='pt-20 pb-1 sm:text-center text-1xl'>
                <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600'>MIT Media Lab Portfolio</p>
                <p className='pt-6'>Developed by Stanley Virgint</p>
            </div>
      

            <section className="overflow-hidden text-gray-700">
            <div className="container px-5 py-2 mx-auto lg:pt-18 md:pt-15 sm:pt-10">
                <div className="flex flex-wrap -m-1 md:-m-2">
                <div className="flex flex-wrap w-1/3">
                    <div className="w-full p-1 md:p-2">
                    <img alt="gallery" className="block object-cover object-center w-full h-full rounded-lg"
                        src={synth}/>
                    </div>
                    <div className="w-full p-1 md:p-2">
                    <img alt="gallery" className="block object-cover object-center w-full h-full rounded-lg"
                        src={EEUkraine}/>
                    </div>
                </div>

                <div className="flex flex-wrap w-1/3">
                 <div className="w-1/2 p-1 md:p-2">
                    <img alt="gallery" className="block object-cover object-center w-full h-full rounded-lg"
                        src={ColorCircles}/>
                    </div>
                    <div className="w-1/2 p-1 md:p-2">
                    <img alt="gallery" className="block object-cover object-center w-full h-full rounded-lg"
                        src={lucid}/>
                    </div>

                    <div className="w-full p-1 md:p-2">
                    <img alt="gallery" className="block object-cover object-center w-full h-full rounded-lg"
                        src={spineI}/>
                    </div>
                    <div className="w-1/2 p-1 md:p-2">
                    <img alt="gallery" className="block object-cover object-center w-full h-full rounded-lg"
                        src={noodle}/>
                    </div>
                    <div className="w-1/2 p-1 md:p-2">
                    <img alt="gallery" className="block object-cover object-center w-full h-full rounded-lg"
                        src={circle}/>
                    </div>
                </div>


                <div className="flex flex-wrap w-1/3">
                    <div className="w-full p-1 md:p-2">
                    <img alt="gallery" className="block object-cover object-center w-full h-full rounded-lg"
                        src={eeGif}/>
                    </div>
                    <div className="w-1/2 p-1 md:p-2">
                    <img alt="gallery" className="block object-cover object-center w-full h-full rounded-lg"
                        src={waterpaint}/>
                    </div>
                    <div className="w-1/2 p-1 md:p-2">
                    <img alt="gallery" className="block object-cover object-center w-full h-full rounded-lg"
                        src={dalle}/>
                    </div>
                    <div className="w-full p-1 md:p-2">
                    <img alt="gallery" className="block object-cover object-center w-full h-full rounded-lg"
                        src={Robo}/>
                    </div>
                </div>
                </div>
            </div>
            </section>

       
            
            <div className='mt-[80px] pb-5 pl-7 pr-7 sm:text-right text-1xl font-bold font-mono'>
              <p>Welcome to my MIT Media Lab portfolio page. Built in React w/ Tailwind CSS. </p>
            </div>

            <div className="max-w-[1000px] w-full flex justify-around pb-20">
                <div className='sm:text-right pl-4 pr-4 pb-8 flex flex-col'>
                    {/* <div className=''> */}
                            <img src={stannoProfile} alt="Logo Image" style={{width: '100px'}}/>
                            <p className='text-3xl px-4 pb-4 font-bold underline underline-offset-4 decoration-pink-600'>
                                About
                            </p>
                           
                    {/* </div> */}
                </div>
                <div>
                <p className='sm:text-left text-1xl pr-4 font-mono text-gray-400'>
                Hi! My name is Stanley. I’m passionate about interactive technologies and immersing myself in diverse cultures and people. I love exploring mediums for creative design with emerging and experimental technologies, both digital and physical. I am fortunate  to have experience in various ecosystems that I attribute to my creativity, including Shanghai, Tel Aviv, and New York City, with an additional 50+ countries explored. 

MIT Media Lab has always been a dream of mine since I discovered it as a child when learning Scratch and its roots with Professor Mitchel Resnick. This interest expanded during my time at NYU’s Interactive Media Arts Program in Shanghai and Interactive Telecommunications Program in New York City. Thank you in advance for your time and attention and I hope you enjoy the highlights of my work. 
                </p>
                </div>
                </div>
    

         

             <Gallery></Gallery>


           
             
        </div>
        
    </div>
    
  )
}

export default MIT