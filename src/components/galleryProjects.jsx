import React from 'react'
// import WorkIMG from '../assets/workImg.jpg'
import Green from '../assets/green.jpg'
import Lucid from '../assets/lucidProfile.jpg'
import Robo from '../assets/robo.jpg'
// import Rover from '../assets/rover.jpg'
import Synth from '../assets/synth.jpg'
import Xfolio from '../assets/xfolio.jpg'
import Emotion from '../assets/ee.jpg'
import Coin from '../assets/coin.png'
import HW1 from '../assets/HW1.png'
import AuxVerse from '../assets/AuxVerse.png'
import LedgerPad from '../assets/ledgerpad.png'
import agar from '../assets/agar.png'
import sandbox from '../assets/doodlePreview.png'
import NYU from './NYU'
import firefly from '../assets/firefly.png'
import flashlight from '../assets/flashlight-draw.png'
import temples from '../assets/temples.png'

import { Routes } from 'react-router-dom'
import { Route } from 'react-router-dom'
import {FaGithub, FaTwitter} from 'react-icons/fa'

const Gallery = () => {
    <Routes>
         <Route path='/NYU' element={<NYU/>}/>
    </Routes>
  return (
    
    <div name='projects' className='w-full bg-[#0a192f] text-gray-300 py-4'>
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600'>Projects</p>
                <p className='py-6'>Collection of freelance + university work</p>
            </div>
                
{/* ********************************** Next Grid Item ********************************************** */}      

        {/* grid container */}
            <div className='grid sm:grid-cols-1 md:grid-cols-1 gap-6'>
                 {/* project tile 2 */}
                 <div className='flex-col flex md:flex-row shadow-lg shadow-[#040c16] group container rounded-md mx-auto '>
                    {/* hover effect */}  
                   <div className='text-center basis-1/2 p-3'>
                       <span className='text-2xl font-bold border-b-2 text-gray-300 border-blue-300 tracking-wider'>
                           Synth#Boi Storefront
                       </span>
                       <div className='flex justify-between p-1'>  
                       <p className='sm:text-left text-1xl font-mono'>Tel Aviv, Israel</p>
                       <p className='sm:text-left text-1xl font-mono'>Nov, 2022</p>
                       </div>
                      
                       <ul className="list-disc pt-2 pl-2 pb-2 text-left text-1xl text-gray-400">
                        <li className='sm:text-left text-base font-mono'>Experimented with WebGL and physic libraries to develop a curated interactive storefront for Dissrup Ltd</li>
                        <li className='sm:text-left text-base font-mono'>Art collection by LIŔONA and hand-crafted by Love Hultén</li>
                        <li className='sm:text-left text-base font-mono'> Drove $700K in sales for the professional artists in ~20 minutes</li>
                        <li className='sm:text-left text-base font-mono'>Recognized in  
                        <a className='pl-2 text-gray-300 ' href='https://www.wsj.com/story/lets-get-physical-collectors-want-to-display-nfts-irl-3d42f39b' target="_blank" rel="noopener noreferrer">
                           Wall Street Journal 
                        </a>
                       </li>
                        
                       </ul>
                       <div className="mx-auto flex items-center justify-center">
                         <div className="rounded-md bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 p-1">
                            <div className="flex h-full w-full items-center justify-center bg-gray-800 back">
                             <h1 className="p-1 first-line:text-md font-black text-gray-300"> WebGL - React Three Fiber - Blender</h1>
                            </div>
                         </div>
                        </div>
                       <div className='pt-4 text-center'>
                            <a href="https://dissrup.com/drops/synth-boi" target="_blank" rel="noopener noreferrer">
                                <button className='text-center rounded-lg px-9 py-2 m-2 bg-white text-gray-700 font-bold text-lg'>
                                Demo
                                </button>
                            </a>
                       </div>
                   </div>

                   <div className='opacity-90 text-center group-hover:opacity-100 basis-1/2 p-3'>
                        <img alt="gallery" className="block object-cover object-left-top w-full h-full rounded-lg shadow-md shadow-[#474a4d]"
                                src={Synth}/>
                    </div>
               </div>    
                
{/* ********************************** Next Grid Item ********************************************** */}      

                 {/* project tile 2 */}
                 <div className='flex-col flex md:flex-row shadow-lg shadow-[#040c16] group container rounded-md mx-auto'>
                    {/* hover effect */}  
                   <div className='text-center basis-1/2 p-3'>
                       <span className='text-2xl font-bold border-b-2 text-gray-300 border-blue-300 tracking-wider'>
                       @EmotionEcho
                       </span>
                       <div className='flex justify-between p-1'>  
                       <p className='sm:text-left text-1xl font-mono'>Shanghai, China</p>
                       <p className='sm:text-left text-1xl font-mono'>May, 2021</p>
                       </div>
                       <ul className="list-disc pt-2 pl-2 pb-2 text-left text-1xl text-gray-400">
                        <li className='sm:text-left text-base font-mono'>Interactive system that expresses the sentiment of Twitter posts artistically</li>
                        <li className='sm:text-left text-base font-mono'>Experience the emotions of tweets in real-time and explore the tone of Twitter trends</li>
                        <li className='sm:text-left text-base font-mono'>Adapted to analyze historic tweets within a 7-day timeframe, in addition to a Unity output tool for experimenting with 3D visuals</li>
                        <li className='sm:text-left text-base font-mono'>Developed in Responsive Environments led by Professor Stavros Didakis</li>
                        <li className='sm:text-left text-base font-mono'>Showcased in BlockCreateArt Scholarship Gallery</li>

                       </ul>
                       <div className="mx-auto flex items-center justify-center">
                         <div className="rounded-md bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 p-1">
                            <div className="flex h-full w-full items-center justify-center bg-gray-800 back">
                             <h1 className="p-1 first-line:text-md font-black text-gray-300"> p5 - Unity - Twitter API - Node.js - IBM tone analyzer </h1>
                            </div>
                         </div>
                        </div>
                        <div className='pt-8 flex justify-center'>
                           <a href="https://twitter.com/EmotionEcho" target="_blank" rel="noopener noreferrer">
                               <button className='rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                               <FaTwitter size={30} />
                               </button>
                           </a>
                           <a href="https://www.notion.so/EmotionEcho-96c81c9bfeea420aaf74bd6570b25ebd" target="_blank" rel="noopener noreferrer">
                               <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                               Docs
                               </button>
                           </a>
                       </div>
                   </div>
                   <div className='opacity-90 text-center group-hover:opacity-100 basis-1/2 p-3'>
                        <img alt="gallery" className="block object-cover object-left-top w-full h-full rounded-lg shadow-md shadow-[#474a4d]"
                                src={Emotion}/>
                    </div>
               </div>    

{/* ********************************** Next Grid Item ********************************************** */}
<div className='flex-col flex md:flex-row shadow-lg shadow-[#040c16] group container rounded-md mx-auto'>
                    {/* hover effect */}  
                   <div className='text-center basis-1/2 p-3'>
                       <span className='text-2xl font-bold border-b-2 text-gray-300 border-blue-300 tracking-wider'>
                           Robotario
                       </span>
                       <div className='flex justify-between p-1'>  
                       <p className='sm:text-left text-1xl font-mono'>Shanghai, China</p>
                       <p className='sm:text-left text-1xl font-mono'>Dec, 2019</p>
                       </div>
                       <ul className="list-disc pt-2 pl-2 pb-2 text-left text-1xl text-gray-400">
                        <li className='sm:text-left text-base font-mono'>A swarm of insect-like robots that explores human interaction</li>
                        <li className='sm:text-left text-base font-mono'>Exhibited to the public at the FutureLab West Bund Museum Shanghai and the Machine Art Symposium at New York University Shanghai</li>
                        <li className='sm:text-left text-base font-mono'>Associted peer-revied publication in the Association for Computing Machinery:
                        <p className="italic">Exploration into Perception of Robotic Agency</p></li>
                        <li className='sm:text-left text-base font-mono'>Developed in Intro to Robotics with Professor Rodolfo Cossovich</li>
                       </ul>
                       <div className="mx-auto flex items-center justify-center">
                         <div className="rounded-md bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 p-1">
                            <div className="flex h-full w-full items-center justify-center bg-gray-800 back">
                             <h1 className="p-1 first-line:text-md font-black text-gray-300">Arduino - Fusion360 - Fabrication </h1>
                            </div>
                         </div>
                        </div>
                        <div className='pt-8 text-center'>
                           <a href="https://candied-primula-8e4.notion.site/Robotario-edc376c958544f1a864753cbb0a4d9b3" target="_blank" rel="noopener noreferrer">
                               <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                               Docs
                               </button>
                           </a>
                           <a href="https://dl.acm.org/doi/abs/10.1145/3402597.3402598" target="_blank" rel="noopener noreferrer">
                               <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                               Publication
                               </button>
                           </a>
                       </div>
                   </div>

                   <div className='opacity-90 text-center group-hover:opacity-100 basis-1/2 p-3'>
                        <img alt="gallery" className="block object-cover object-left-top w-full h-full rounded-lg shadow-md shadow-[#474a4d]"
                                src={Robo}/>
                    </div>
               </div>                                      

{/* ********************************** Next Grid Item ********************************************** */}
<div className='flex-col flex md:flex-row shadow-lg shadow-[#040c16] group container rounded-md mx-auto'>
                    {/* hover effect */}  
                   <div className='text-center basis-1/2 p-3'>
                       <span className='text-2xl font-bold border-b-2 text-gray-300 border-blue-300 tracking-wider'>
                         AuxVerse
                       </span>
                       <div className='flex justify-between p-1'>  
                       <p className='sm:text-left text-1xl font-mono'>New York City, USA</p>
                       <p className='sm:text-left text-1xl font-mono'>March, 2022</p>
                       </div>
                       <ul className="list-disc pt-2 pl-2 pb-2 text-left text-1xl text-gray-400">
                        <li className='sm:text-left text-base font-mono'>Develop a 3D environment to collaboratively listen to music with people globally by connecting various technology stacks </li>
                        <li className='sm:text-left text-base font-mono'>Visitors join a central lobby where they can roam around the scenic space and add songs to the queue, as well as vote on which songs to be played next</li>
                        <li className='sm:text-left text-base font-mono'>Each visitors camera is mapped onto their player, enabling the feeling of a virtual listening party</li>
                        <li className='sm:text-left text-base font-mono'>Developed in Real-Time Social Spaces at ITP</li>
                       </ul>
                       <div className="mx-auto flex items-center justify-center">
                         <div className="rounded-md bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 p-1">
                            <div className="flex h-full w-full items-center justify-center bg-gray-800 back">
                             <h1 className="p-1 first-line:text-md font-black text-gray-300"> Spotify API - WebRTC - React Three Fiber - Drei </h1>
                            </div>
                         </div>
                        </div>
                        <div className='pt-8 text-center'>
                            <a href="https://candied-primula-8e4.notion.site/AuxVerse-fb3ae54722494ccb9f5d3c11dbbdddec" target="_blank" rel="noopener noreferrer">
                                <button className='text-center rounded-lg px-9 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                                Docs
                                </button>
                            </a>
                        </div>
                   </div>

                   <div className='opacity-90 text-center group-hover:opacity-100 basis-1/2 p-3'>
                        <img alt="gallery" className="block object-cover object-left-top w-full h-full rounded-lg shadow-md shadow-[#474a4d]"
                                src={AuxVerse}/>
                    </div>
               </div>  
                
              


{/* ********************************** Next Grid Item ********************************************** */}
<div className='flex-col flex md:flex-row shadow-lg shadow-[#040c16] group container rounded-md mx-auto'>
                    {/* hover effect */}  
                   <div className='text-center basis-1/2 p-3'>
                       <span className='text-2xl font-bold border-b-2 text-gray-300 border-blue-300 tracking-wider'>
                         Xfolio
                       </span>
                       <div className='flex justify-between p-1'>  
                       <p className='sm:text-left text-1xl font-mono'>Remote: Shanghai, Moscow</p>
                       <p className='sm:text-left text-1xl font-mono'>July, 2021</p>
                       </div>
                       <ul className="list-disc pt-2 pl-2 pb-2 text-left text-1xl text-gray-400">
                        <li className='sm:text-left text-base font-mono'>Community-driven Ethereum wallet designed for simple digital asset and DeFi management </li>
                        <li className='sm:text-left text-base font-mono'>Built as a Chrome extension while supporting all Ethereum networks, Decentralized Exchanges, and L2 rollups on both desktop and mobile </li>
                        <li className='sm:text-left text-base font-mono'>Developed with Daniel Koshman as part of the ETH Global 2021 Hackathon</li>
                       </ul>
                       <div className="mx-auto flex items-center justify-center">
                         <div className="rounded-md bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 p-1">
                            <div className="flex h-full w-full items-center justify-center bg-gray-800 back">
                             <h1 className="p-1 first-line:text-md font-black text-gray-300"> React - GraphQL - Uniswap - Ethers</h1>
                            </div>
                         </div>
                        </div>
                        <div className='pt-8 flex justify-center'>
                           <a href="https://github.com/exakoss/xfolio-web" target="_blank" rel="noopener noreferrer">
                               <button className='rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                               <FaGithub size={30} />
                               </button>
                           </a>
                           <a href="https://candied-primula-8e4.notion.site/Xfolio-508887ad59b544ecb9cce20eff277d02" target="_blank" rel="noopener noreferrer">
                               <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                               Docs
                               </button>
                           </a>
                       </div>
                   </div>

                   <div className='opacity-90 text-center group-hover:opacity-100 basis-1/2 p-3'>
                        <img alt="gallery" className="block object-cover object-left-top w-full h-full rounded-lg shadow-md shadow-[#474a4d]"
                                src={Xfolio}/>
                    </div>
               </div>  
                 
{/* ********************************** Next Grid Item ********************************************** */}      
<div className='flex-col flex md:flex-row shadow-lg shadow-[#040c16] group container rounded-md mx-auto'>
                    {/* hover effect */}  
                   <div className='text-center basis-1/2 p-3'>
                       <span className='text-2xl font-bold border-b-2 text-gray-300 border-blue-300 tracking-wider'>
                       Doodle Sandbox - Multiplayer
                       </span>
                       <div className='flex justify-between p-1'>  
                       <p className='sm:text-left text-1xl font-mono'>New York City, USA</p>
                       <p className='sm:text-left text-1xl font-mono'>Nov, 2022</p>
                       </div>
                       <ul className="list-disc pt-2 pl-2 pb-2 text-left text-1xl text-gray-400">
                        <li className='sm:text-left text-base font-mono'>An experimental canvas that lets visitors interact and draw with pixels within the same lobby</li>
                        <li className='sm:text-left text-base font-mono'>Concept derived as a way to connect with my friends through a unique medium that does not have many gamified aspects - simply creative </li>
                        <li className='sm:text-left text-base font-mono'>Developed in Interactive Computing with Professor Craig Kapp</li>
                       </ul>
                       <div className="mx-auto flex items-center justify-center">
                         <div className="rounded-md bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 p-1">
                            <div className="flex h-full w-full items-center justify-center bg-gray-800 back">
                             <h1 className="p-1 first-line:text-md font-black text-gray-300"> Javascript - p5 - socket.io</h1>
                            </div>
                         </div>
                        </div>
                        <div className='pt-8 flex justify-center'>
                           <a href="https://github.com/stanleywalker1/doodle-sandbox" target="_blank" rel="noopener noreferrer">
                               <button className='rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                               <FaGithub size={30} />
                               </button>
                           </a>
                           <a href="https://doodle-sandbox.herokuapp.com/" target="_blank" rel="noopener noreferrer">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                                Live Demo
                                </button>
                            </a>
                       </div>
                   </div>
                   <div className='opacity-90 text-center group-hover:opacity-100 basis-1/2 p-3'>
                        <img alt="gallery" className="block object-cover object-left-top w-full h-full rounded-lg shadow-md shadow-[#474a4d]"
                                src={sandbox}/>
                    </div>
               </div>  
                 
{/* ********************************** Next Grid Item ********************************************** */}      
<div className='flex-col flex md:flex-row shadow-lg shadow-[#040c16] group container rounded-md mx-auto'>
                    {/* hover effect */}  
                   <div className='text-center basis-1/2 p-3'>
                       <span className='text-2xl font-bold border-b-2 text-gray-300 border-blue-300 tracking-wider'>
                       Agar.io Remix
                       </span>
                       <div className='flex justify-between p-1'>  
                       <p className='sm:text-left text-1xl font-mono'>New York City, USA</p>
                       <p className='sm:text-left text-1xl font-mono'>Oct, 2022</p>
                       </div>
                       <ul className="list-disc pt-2 pl-2 pb-2 text-left text-1xl text-gray-400">
                        <li className='sm:text-left text-base font-mono'>A remix of the classic agar.io game exploring autonomous objects</li>
                        <li className='sm:text-left text-base font-mono'>Demonstration of autonomous movement with perlin generated randomness</li>
                        <li className='sm:text-left text-base font-mono'>Developed in Interactive Computing with Professor Craig Kapp</li>
                       </ul>
                       <div className="mx-auto flex items-center justify-center">
                         <div className="rounded-md bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 p-1">
                            <div className="flex h-full w-full items-center justify-center bg-gray-800 back">
                             <h1 className="p-1 first-line:text-md font-black text-gray-300"> Javascript - p5</h1>
                            </div>
                         </div>
                        </div>
                        <div className='pt-8 flex justify-center'>
                           <a href="https://github.com/stanleywalker1/agar.io.stanno" target="_blank" rel="noopener noreferrer">
                               <button className='rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                               <FaGithub size={30} />
                               </button>
                           </a>
                           <a href="https://agar-io-stanno.netlify.app/" target="_blank" rel="noopener noreferrer">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                                Live Demo
                                </button>
                            </a>
                       </div>
                   </div>
                   <div className='opacity-90 text-center group-hover:opacity-100 basis-1/2 p-3'>
                        <img alt="gallery" className="block object-cover object-left-top w-full h-full rounded-lg shadow-md shadow-[#474a4d]"
                                src={agar}/>
                    </div>
               </div>  
                 
{/* ********************************** Next Grid Item ********************************************** */}      
<div className='flex-col flex md:flex-row shadow-lg shadow-[#040c16] group container rounded-md mx-auto'>
                    {/* hover effect */}  
                   <div className='text-center basis-1/2 p-3'>
                       <span className='text-2xl font-bold border-b-2 text-gray-300 border-blue-300 tracking-wider'>
                       Lucid Doodle
                       </span>
                       <div className='flex justify-between p-1'>  
                       <p className='sm:text-left text-1xl font-mono'>Shangha, China</p>
                       <p className='sm:text-left text-1xl font-mono'>Fall, 2018</p>
                       </div>
                       <ul className="list-disc p-7 text-left text-1xl font-mono text-gray-400">
                        <li className='sm:text-left text-base font-mono'>My first university project - an interactive LED table exploring human interaction among a digital & physical interface</li>
                        <li className='sm:text-left text-base font-mono'>Lucid Doodle v2 implemented a time-reaction game mode for visitors to play</li>
                        <li className='sm:text-left text-base font-mono'>Lucid Doodle v3 implemented machine learning and voice control - enabling the ability to control the lights through speech from a collection of modes such as "water" and "fire"</li>
                        <li className='sm:text-left text-base font-mono'>Developed in Interaction Lab with Professor Rodolfo Cossovich</li>
                       </ul>
                       <div className="mx-auto flex items-center justify-center">
                         <div className="rounded-md bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 p-1">
                            <div className="flex h-full w-full items-center justify-center bg-gray-800 back">
                             <h1 className="p-1 first-line:text-md font-black text-gray-300"> p5 - Processing - Arduino - Machine Learning</h1>
                            </div>
                         </div>
                        </div>
                       <div className='pt-4 text-center'>
                            <a href="https://candied-primula-8e4.notion.site/Lucid-Doodle-57514e11ed67462db321c24ed4827903" target="_blank" rel="noopener noreferrer">
                                <button className='text-center rounded-lg px-9 py-2 m-2 bg-white text-gray-700 font-bold text-lg'>
                                Docs
                                </button>
                            </a>
                       </div>
                   </div>

                   <div className='opacity-90 text-center group-hover:opacity-100 basis-1/2 p-3'>
                        <img alt="gallery" className="block object-cover object-left-top w-full h-full rounded-lg shadow-md shadow-[#474a4d]"
                                src={Lucid}/>
                    </div>
               </div>   

            </div>
                
{/* ********************************** 2 x 2 Grid Items ********************************************** */}      

               <div className='grid sm:grid-cols-2 md:grid-cols-2 gap-4 p-4 pt-10'>

               <div style={{backgroundImage: `url(${temples})`}} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center object-left-top  mx-auto content-div'>
                    <div className='opacity-0 text-center group-hover:opacity-100'>
                        <span className='text-2xl  font-bold text-white tracking-wider'>
                        NYC synagogue map of the past
                        </span>
                        <div className='pt-8 text-center'>
                        <a href="https://stanno.us/jewsofnewyork" target="_blank" rel="noopener noreferrer">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                                    Demo + Writing
                                    </button>
                                </a>
                        </div>
                    </div>
                </div>

                <div style={{backgroundImage: `url(${flashlight})`}} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                    <div className='opacity-0 text-center group-hover:opacity-100'>
                        <span className='text-2xl  font-bold text-white tracking-wider'>
                        Flashlight Drawing Canvas
                        </span>
                        <div className='pt-8 text-center'>
                        <a href="https://flashdraw.netlify.app/" target="_blank" rel="noopener noreferrer">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                                    Live Demo
                                    </button>
                                </a>
                        <a href="https://github.com/stanleywalker1/flashlight-drawing-space" target="_blank" rel="noopener noreferrer">
                            <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                            Github
                            </button>
                        </a>
                            
                        </div>
                    </div>
                </div>
                

                <div style={{backgroundImage: `url(${firefly})`}} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                    <div className='opacity-0 text-center group-hover:opacity-100'>
                        <span className='text-2xl  font-bold text-white tracking-wider'>
                        VR Firefly Sky
                        </span>
                        <div className='pt-8 text-center'>
                        <a href="https://firefly-vr.netlify.app/index.html" target="_blank" rel="noopener noreferrer">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                                    Live Demo
                                    </button>
                                </a>
                        <a href="https://github.com/stanleywalker1/fireflies" target="_blank" rel="noopener noreferrer">
                            <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                            Github
                            </button>
                        </a>
                            
                        </div>
                    </div>
                </div>

                  {/* project tile 1 */}
                  <div style={{backgroundImage: `url(${HW1})`}} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                    
                    <div className='opacity-0 text-center group-hover:opacity-100'>
                        <span className='text-2xl  font-bold text-white tracking-wider'>
                        NYU - Interactive Computing
                        </span>
                        <div className='pt-8 text-center'>

                            <a href="/NYU">
                                <button className='text-center rounded-lg px-9 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                                Collection of course work
                                </button>
                            </a>
                            
                        </div>
                    </div>
                </div>

               {/* project tile 6 */}
               <div style={{backgroundImage: `url(${Coin})`}} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                    
                    {/* hover effect */}
                   <div className='opacity-0 text-center group-hover:opacity-100'>
                       <span className='text-2xl font-bold text-white tracking-wider'>
                           Coinbase API
                       </span>
                       <div className='pt-8 text-center'>
                           <a href="https://github.com/stanleywalker1/CoinbaseAPI-Experimental" target="_blank" rel="noopener noreferrer">
                               <button className='text-center rounded-lg px-9 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                               Github
                               </button>
                           </a>
                       </div>
                   </div>
               </div>
              
             

                {/* project tile 1 */}
                <div style={{backgroundImage: `url(${LedgerPad})`}} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                        
                        <div className='opacity-0 text-center group-hover:opacity-100'>
                            <span className='text-2xl  font-bold text-white tracking-wider'>
                            LedgerPad - NYU Innovation Course Product 
                            </span>
                            <div className='pt-8 text-center'>

                                <a href="https://docs.google.com/presentation/d/138l7QXOH2RAtbRY_cB6eVd0q2ElzDSUg434O8_7VkRo/edit?usp=sharing">
                                    <button className='text-center rounded-lg px-9 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                                    Pitch Deck
                                    </button>
                                </a>
                                
                            </div>
                        </div>
                    </div>
                 {/* project tile 7 */}
                <div style={{backgroundImage: `url(${Green})`}} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                                    
                        {/* hover effect */}
                    <div className='opacity-0 text-center group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-white tracking-wider'>
                            Green Design
                        </span>
                        <div className='pt-8 text-center'>
                            <a href="https://candied-primula-8e4.notion.site/Green-Design-NYU-c0e9b30dbcf5479398e5eaf91a60e9e0" target="_blank" rel="noopener noreferrer">
                                <button className='text-center rounded-lg px-9 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                                Drawings
                                </button>
                            </a>

                        </div>
                    </div>
                </div>


                
            </div>
        </div>
    </div>
  )
}

export default Gallery