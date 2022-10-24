import React from 'react'
import HW1 from './HW1';
import HW2 from './HW2';
import Iframe from 'react-iframe';
import agar from '../assets/agar.png'

const NYU = () => {

  return (
    <div name='nyu' className='w-full h-full bg-[#0a192f] text-gray-300'>
        <div className='flex flex-col justify-center items-center w-full h-full'>
           
            <div className='mt-[80px] pb-5 sm:text-right text-1xl font-bold font-mono'>
              <p>Interactive Computing: Project 1.0 </p>
            </div>
              <HW1></HW1>
            <div className='p-10 sm:text-left text-1xl font-mono'>
                <p className='pr-10 pl-10 sm:text-left text-1xl font-mono'>Sept 19, 2022</p>
                <p className='pr-10 pl-10 sm:text-left text-1xl font-mono'>I designed this accidentally while animating various shapes and lines in p5.js. This was a pretty quick assignment so I didn’t think too deep into it. I wrote it in pure p5.js and then used a React p5 wrapper to merge it onto this site - a nice little experiment. </p>
             </div>
             {/* <div className='p-10 sm:text-left text-1xl font-mono'>
                <p className='pr-10 pl-10 sm:text-left text-1xl font-mono'>Oct 17, 2022</p>
                <p className='pt-5 pr-10 pl-10 sm:text-left text-1xl font-mono'>Interactive Ecosystem</p>
                <p className='pt-5 pr-10 pl-10 sm:text-left text-1xl font-mono'>I intended on building an interactive ecosystem with an abstract artistic aesthetic. I’m not ready to specify the details of this aesthetic yet because I find when aiming for abstract visuals, sometimes happy mistakes in the building process can be the best way to discover what really feels right. For assignment 3, a made a single-player game similar to agar.io and I found the process and gameplay quite stimulating. I feel there are many possibilities to continue exploring the dynamics of a free-roaming player through a world with naturally moving objects and interactions. I was hoping to work with a team but the interactive ecosystem group sadly filled up and the other agar.io midterm project requested to work independently. That being said, instead of building from scratch independently, I may branch off from assignment 3 and continue to build. </p>
                <p className='pt-5 pr-10 pl-10 sm:text-left text-1xl font-mono'>At the moment, I imagine continuous player movement with the mouse cursor, enabling intuitive and natural controls that can be adapted to touch presses on mobile. The user will be exploring a vast space in any direction with various elements, with the potential to create streaks of color trails following behind the player object. I’d like to implement a dark and light mode that can be toggled to radically swap the color scheme and I intend to display all the colors from a predefined pallet, catered to the abstract aesthetic while providing a soft viewing experience. Additionally, if time allows, I plan to integrate a service such as Socket.io to enable multiplayer functionality, giving access to players globally to join the same lobby and roam the space together. </p>
            </div> */}
        

            <div className='p-5 sm:text-right text-1xl font-bold font-mono'>
               <p>Interactive Computing: Project 2.0 </p>
            </div>
              <HW2/>
            <div className='p-10 sm:text-left text-1xl font-mono'>
                <p className='pr-10 pl-10 sm:text-left text-1xl font-mono'>Oct 3, 2022</p>
                <p className='pr-10 pl-10 sm:text-left text-1xl font-mono'>I made this pong game in pure p5.js and realized that the complexity of it made it difficult to wrap for React, so I leveraged p5 in-browser editor to simply add it here via iFrame. I’m pretty happy how this turned out; some slight bugs (if you can find them) but overall enjoyable. All the assets I generated in DallE-2 and the sound effects produced by @ha.hahao</p>
             </div>


             <div className='p-5 sm:text-right text-1xl font-bold font-mono'>
               <p>Interactive Computing: Project 3.0 </p>
            </div>
            <div style={{backgroundImage: `url(${agar})`}} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'> 
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
            <div className='p-10 sm:text-left text-1xl font-mono'>
                <p className='pr-10 pl-10 sm:text-left text-1xl font-mono'>Oct 17, 2022</p>
                <p className='pr-10 pl-10 sm:text-left text-1xl font-mono'>
                This is my take on the classic agar.io game from my middle school era. This project is open source with code avalible in the github repo above. All the automated movement is derived from perlin noise. Built for Interactive Computing at NYU w/ Professor Kapp. Sound effects produced by @ha.hahao.
                </p>
             </div>


             <div className='mt-[80px] sm:text-right text-1xl font-bold font-mono'>
              <p className='underline'>Interactive Computing: Midterm Proposal </p>
            </div>
            
            <div className='p-10 sm:text-left text-1xl font-mono'>
                <p className='pr-10 pl-10 sm:text-left text-1xl font-mono'>Oct 17, 2022</p>
                <p className='pt-5 pr-10 pl-10 sm:text-left text-1xl font-mono'>Interactive Ecosystem</p>
                <p className='pt-5 pr-10 pl-10 sm:text-left text-1xl font-mono'>I intended on building an interactive ecosystem with an abstract artistic aesthetic. I’m not ready to specify the details of this aesthetic yet because I find when aiming for abstract visuals, sometimes happy mistakes in the building process can be the best way to discover what really feels right. For assignment 3, a made a single-player game similar to agar.io and I found the process and gameplay quite stimulating. I feel there are many possibilities to continue exploring the dynamics of a free-roaming player through a world with naturally moving objects and interactions. I was hoping to work with a team but the interactive ecosystem group sadly filled up and the other agar.io midterm project requested to work independently. That being said, instead of building from scratch independently, I may branch off from assignment 3 and continue to build. </p>
                <p className='pt-5 pr-10 pl-10 sm:text-left text-1xl font-mono'>At the moment, I imagine continuous player movement with the mouse cursor, enabling intuitive and natural controls that can be adapted to touch presses on mobile. The user will be exploring a vast space in any direction with various elements, with the potential to create streaks of color trails following behind the player object. I’d like to implement a dark and light mode that can be toggled to radically swap the color scheme and I intend to display all the colors from a predefined pallet, catered to the abstract aesthetic while providing a soft viewing experience. Additionally, if time allows, I plan to integrate a service such as Socket.io to enable multiplayer functionality, giving access to players globally to join the same lobby and roam the space together. </p>
            </div>
            {/* <div>
          
                  <Iframe url="https://agar-io-stanno.netlify.app/"
                  width="700px"
                  height="542px"
                  id=""
                  className=""
                  display="block"
                  position="relative"
                  allowFullScreen="true"
                  />
            </div> */}

<div className='mt-[80px] sm:text-right text-1xl font-bold font-mono'>
              <p>Interactive Computing: Project 4.0 </p>
            </div>
            <div>
          
                  <Iframe url="https://editor.p5js.org/stanno/full/1wDZh0JM_"
                  width="800px"
                  height="642px"
                  id=""
                  className=""
                  display="block"
                  position="relative"
                  allowFullScreen="true"
                  />
            </div>
    
            
            <div className='p-10 sm:text-left text-1xl font-mono'>
                <p className='pr-10 pl-10 sm:text-left text-1xl font-mono'>Oct 24, 2022</p>
                <p className='pt-5 pr-10 pl-10 sm:text-left text-1xl font-mono'>Robot Factory...    
                <a className="border bg-purple-600 border-slate-300 hover:border-purple-600" href="https://github.com/stanleywalker1/web-robots" target="_blank" rel="noopener noreferrer">git repo</a>
                </p>
                
                <p className='pt-5 pr-10 pl-10 sm:text-left text-1xl font-mono'>Autonomous array of robots, with a new robot spawning every 4 seconds. Toggle with the arrows to change the direction flow and gain points by leading the robots to the green door on the right side of the factory. This project displays OOP practice and techniques. Optimized to avoid excessive memory use. Built with p5.js for Interactive Computing @ NYU. Try to see if you can build a solution to reset robots that get stuck in an arrow loop in the factory (I didn’t have enough time to implement this but understanding how to approach it is a good exercise).  </p>
             </div>

        </div>
    </div>
  )
}

export default NYU