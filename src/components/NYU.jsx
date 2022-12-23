import React from 'react'
import HW1 from './HW1';
import HW2 from './HW2';
import Iframe from 'react-iframe';
import agar from '../assets/agar.png'
import sandbox from '../assets/doodlePreview.png'
import runner from '../assets/runner.png'


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

             <div className='p-5 sm:text-right text-1xl font-bold font-mono'>
               <p>Interactive Computing: Midterm Project </p>
            </div>
            <div style={{backgroundImage: `url(${sandbox})`}} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'> 
            <div className='opacity-0 text-center group-hover:opacity-100'>
                <span className='text-2xl  font-bold text-white tracking-wider'>
                Doodle Sandbox - Multiplayer
                </span>
                <div className='pt-8 text-center'>
                <a href="https://doodle-sandbox.herokuapp.com/" target="_blank" rel="noopener noreferrer">
                            <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                            Live Demo
                            </button>
                        </a>
                <a href="https://github.com/stanleywalker1/doodle-sandbox" target="_blank" rel="noopener noreferrer">
                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Github
                    </button>
                </a>
                    
                </div>
             </div>
            </div>

            <div className='mt-[80px] sm:text-right text-1xl font-bold font-mono'>
              <p className='underline'>Interactive Computing: Final Proposal </p>
            </div>
            
            <div className='p-10 sm:text-left text-1xl font-mono'>
                <p className='pr-10 pl-10 sm:text-left text-1xl font-mono'>Nov 23, 2022</p>
                <p className='pt-5 pr-10 pl-10 sm:text-left text-1xl font-mono'>Runner: Paula & Stanley </p>
                <p className='pt-5 pr-10 pl-10 sm:text-left text-1xl font-mono'>Our idea is still in early development, but we’ve agreed on an infinite runner platform game in which, similarly to Mario and the pipes, the player can access occasionally appearing portals to transfer to a “different universe.” Each universe will contain a randomly generated environment from lists of different backgrounds, enemies, sprites, etc. Each round is meant to be as unique as possible. The goal of the game is to survive as long as one can and get a high score. As the player enters each different universe, the score is maintained, thus in the end it depends solely on how long they lasted; in other words, the varying universes do not impact the score, they are just an artistic feature. Power up’s will also be available, but their functions remain to be determined. Additionally, we plan on setting up a global leaderboard, in which anyone playing the game on the server can be featured if they score high enough! </p>
                <p className='pt-5 pr-10 pl-10 sm:text-left text-1xl font-mono'>The mechanics will require multiple changing states and variables, especially in order to direct the environment and power ups. Enemies will likely have different capabilities and will thus each be a class of their own. Because we will have to find a good amount of externally sourced artwork with similar styles, our aesthetic will likely depend on the content we are able to collect. Based on past experience with this issue, pixelated art appears to be the most common and accessible, so this will likely be the case. However, the architecture of the map itself remains under consideration as neither of us have worked with platform games before. </p>
            </div>

            <div className='mt-[80px] sm:text-right text-1xl font-bold font-mono'>
              <p className='underline'>Interactive Computing: Final Update #1 </p>
            </div>
            
            <div className='p-10 sm:text-left text-1xl font-mono'>
                <p className='pr-10 pl-10 sm:text-left text-1xl font-mono'>Nov 30, 2022</p>
                <p className='pt-5 pr-10 pl-10 sm:text-left text-1xl font-mono'>Start screen is coming together (hooray for custom background art!)
                </p>
                <p className='pt-5 pr-10 pl-10 sm:text-left text-1xl font-mono'>Basic mechanics + rules established:</p>
                <ul className='pr-10 pl-10 sm:text-left text-1xl font-mono'>
                  <p className='pr-10 pl-10 sm:text-left text-1xl font-mono'>
                  - Infinite runner: score kept by constantly increasing var, animated runners using spreadsheet
                  </p>
                  <p className='pr-10 pl-10 sm:text-left text-1xl font-mono'>
                  - End game when collision with enemy or obstacle occurs
                  </p>
                  <p className='pr-10 pl-10 sm:text-left text-1xl font-mono'>
                  - Possibility of multiple lives will be considered depending on final difficulty 
                  </p>
                  <p className='pr-10 pl-10 sm:text-left text-1xl font-mono'>
                  - Accessing portals will change the state from 0 to 1, causing the environment’s characteristics to be reshuffled
                  </p>
                  <p className='pr-10 pl-10 sm:text-left text-1xl font-mono'>
                  - Different arrays for different versions of each element type (background, characters, etc)
                  </p>
                </ul>
            </div>

            <div className='mt-[80px] sm:text-right text-1xl font-bold font-mono'>
              <p className='underline'>Interactive Computing: Final Update #2 </p>
            </div>
            
            <div className='p-10 sm:text-left text-1xl font-mono'>
                <p className='pr-10 pl-10 sm:text-left text-1xl font-mono'>Dec 7, 2022</p>
                <p className='pt-5 pr-10 pl-10 sm:text-left text-1xl font-mono'>Runner: Paula & Stanley </p>
                <p className='pt-5 pr-10 pl-10 sm:text-left text-1xl font-mono'>We have added a new gameplay mode with sample graphics, which includes an environment for the player and moving platforms. The current graphics are acting as placeholders that will be replaced with more polished graphics in a later update. This gameplay mode intends to be built soon to include different modes in the flow direction of the game and provide a more engaging experience for players. </p>
                <p className='pt-5 pr-10 pl-10 sm:text-left text-1xl font-mono'>Additionally, we have implemented simple control mechanics for the player to jump on platforms and to avoid  ~ soon to come ~ obstacles. The controls are mapped to keyboard keys with plans to include a motion detection option to control your player with your hands as well. 
                We want players to interact with the game in a more engaging and immersive way.
                Overall, these updates to our project provide a route for a more polished and engaging experience for players with a environment template to build from and improved controls. 
                </p>
            </div>


            <div style={{backgroundImage: `url(${runner})`}} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'> 
            <div className='opacity-0 text-center group-hover:opacity-100'>
                <span className='text-2xl  font-bold text-white tracking-wider'>
                Infinite Runner
                </span>
                <div className='pt-8 text-center'>
                <a href="https://randorunner.netlify.app/" target="_blank" rel="noopener noreferrer">
                            <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                            Live Demo
                            </button>
                        </a>
                <a href="https://github.com/stanleywalker1/generative-runner" target="_blank" rel="noopener noreferrer">
                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Github
                    </button>
                </a>
                    
                </div>
             </div>
            </div>





        </div>
    </div>
  )
}

export default NYU