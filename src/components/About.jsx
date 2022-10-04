import React from 'react'
import stannoProfile from '../assets/stannoProfile.png'

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
                   <div className='sm:text-right text-2xl font-bold font-mono'>
                   <p>Merging and exploring with tech, digital and physical. </p>
                </div>
                <div>
                    <p className='font-mono'>Interactive technology enthusiasts. Building through a creative lens. Somewhere between New York City, Shanghai & Tel Aviv. 我还可以说中文. </p>
                </div>
            </div>
            
        </div>
    </div>
  )
}

export default About