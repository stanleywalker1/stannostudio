import React from 'react'
// import HTML from '../assets/html.png'
import CSS from '../assets/css.png'
import GITHUB from '../assets/github.png'
import JAVASCRIPT from '../assets/javascript.png'
import REACT from '../assets/react.png'

// import {FaBars, FaTimes, FaGithub, FaLinkedin, FaInstagram, FaTwitter, FaDochub} from 'react-icons/fa'
// import { HiOutlineMail } from 'react-icons/hi';
// import {BsFillPersonLinesFill} from 'react-icons/bs';
// import {CgFileDocument} from 'react-icons/cg';
// import { IconContext } from "react-icons";

const Skills = () => {
  return (
    <div name='skills' className='w-full h-screen bg-[#0a192f] text-gray-300 py-4'>
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div>
                <p className='text-4xl font-bold inline border-b-4 border-pink-600'>Skills</p>
                <p className='py-4'>A few of the classics</p>
            </div>

            <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={REACT} alt="REACT"></img>
                    <p className='my-4'>REACT</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={CSS} alt="CSS"></img>
                    <p className='my-4'>CSS</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={JAVASCRIPT} alt="JAVASCRIPT"></img>
                    <p className='my-4'>JAVASCRIPT</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={GITHUB} alt="GITHUB"></img>
                    <p className='my-4'>GITHUB</p>
                </div>
            </div>
            {/* <a className="underline underline-offset-4 decoration-indigo-500 hover:decoration-4">Resume</a>  */}
           
                <div className='flex sm:text-left text-lg font-bold font-mono'>
                    <p>Incase you want edvidence here's my <a className="border bg-pink-600 border-slate-300 hover:border-pink-600" href="https://drive.google.com/file/d/15U5_ygy44-oGOrjBcoBRwEP6O9PBCI1Y/view?usp=sharing" target="_blank" rel="noopener noreferrer"> resume</a>

                    </p>

                </div>
    
     
        </div>
    </div>
  )
}

export default Skills