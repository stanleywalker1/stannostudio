//rafc

import React, {useState} from 'react'
import {FaBars, FaTimes, FaGithub, FaLinkedin, FaInstagram, FaTwitter} from 'react-icons/fa'
// import { HiOutlineMail } from 'react-icons/hi';
// import {BsFillPersonLinesFill} from 'react-icons/bs';
import Logo from '../assets/stannologo.png';
import {Link} from 'react-scroll';

const Navbar = () => {
    const [nav, setNav] = useState(false);
    const handleClick = () => setNav(!nav);

  return (
    <div name='nav' className='fixed w-full h-[80px] z-10 flex justify-between items-center px-4 bg-[#0a192f] text-gray-300'>
        <div>
        <a href="https://stanno.us" target="_blank" rel="noopener noreferrer">
            <img src={Logo} alt="Logo Image" style={{width: '150px'}}/>
            </a>
        </div>

        {/* menu */}
        <ul className='hidden md:flex'>
            {/* <li> <Link to="home" smooth={true} duration={500}>
                    Home
                </Link>
            </li>
            <li>
            <Link to="about" smooth={true} duration={500}>
                    About
                </Link>
            </li>
            <li> 
            <Link to="skills" smooth={true} duration={500}>
                    Skills
                </Link>
            </li>
            <li>
            <Link to="projects" smooth={true} duration={500} offset={-80}>
                    Projects
                </Link>
            </li>
            <li>
            <Link to="contact" smooth={true} duration={500} offset={-80}>
                    Contact
                </Link>
            </li> */}
            <li>
                <a href='https://stanno.us/'>
                    Studio home
                </a>
            </li>
            <li>
             <a  className='flex justify-between items-center w-full text-gray-300'
                href='https://www.instagram.com/stannostudio/' target="_blank" rel="noopener noreferrer">
                    <FaInstagram size={30} />
                </a>
             </li>

            <li>
            <a  className='flex justify-between items-center w-full text-gray-300'
                    href='https://twitter.com/stannostudio' target="_blank" rel="noopener noreferrer">
                        <FaTwitter size={30} />
             </a>
            </li>
            <li>
            <a  className='flex justify-between items-center w-full text-gray-300'
                href='https://github.com/stanleywalker1' target="_blank" rel="noopener noreferrer">
                <FaGithub size={30} />
            </a>
             </li>
             <li>
                    <a  className='flex justify-between items-center w-full text-gray-300'
                    href='https://www.linkedin.com/in/stanley-virgint-933b3813b/' target="_blank" rel="noopener noreferrer">
                        <FaLinkedin size={30} />
                    </a>
                </li>

        </ul>
        {/* hamburger menu */}
        <div onClick={handleClick} className='md:hidden z-10 w-[40px] h-[40px] flex justify-center items-center'>
            {!nav ? <FaBars /> : <FaTimes />}
        </div>

        {/* Mobile menu */}
        <ul className={!nav ? 'hidden' : 'absolute z-9 top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center'}>     
            
            {/* <li className='py-6 text-4xl'>
            <Link onClick={handleClick} to="home" smooth={true} duration={500}>
                    Home
                </Link>
            </li>
            <li className='py-6 text-4xl'>
            <Link onClick={handleClick} to="about" smooth={true} duration={500}>
                    About
                </Link>
            </li>
            <li className='py-6 text-4xl'>
            <Link onClick={handleClick} to="skills" smooth={true} duration={500}>
                    Skills
                </Link>
            </li>
            <li className='py-6 text-4xl'>
            <Link onClick={handleClick} to="projects" smooth={true} duration={500} offset={-80}>
                    Projects
                </Link>
            </li>
            <li className='py-6 text-4xl'>
            <Link onClick={handleClick} to="contact" smooth={true} duration={500} offset={-80}>
                    Contact
                </Link>
            </li> */}

           
            <li className='py-6 text-4xl'>
                        <a  className='flex justify-between items-center w-full text-gray-300'
                        href='https://github.com/stanleywalker1' target="_blank" rel="noopener noreferrer">
                        <FaGithub size={30} />
                        </a>
                </li>
                <li className='py-6 text-4xl'>
                        <a  className='flex justify-between items-center w-full text-gray-300'
                        href='https://twitter.com/stannostudio' target="_blank" rel="noopener noreferrer">
                            <FaTwitter size={30} />
                        </a>
                    </li>
                <li className='py-6 text-4xl'>
                    <a  className='flex justify-between items-center w-full text-gray-300'
                    href='https://www.instagram.com/stannostudio/' target="_blank" rel="noopener noreferrer">
                        <FaInstagram size={30} />
                    </a>
                </li>
                <li className='py-6 text-4xl'>
                    <a  className='flex justify-between items-center w-full text-gray-300'
                    href='https://www.linkedin.com/in/stanley-virgint-933b3813b/' target="_blank" rel="noopener noreferrer">
                        <FaLinkedin size={30} />
                    </a>
                </li>
               
            <li className='py-6 text-4xl'>
                <a href='https://stanno.us/'>
                    Studio home
                </a>
            </li>

            <li className='py-2 text-1xl text-gray-500'>
                <a href='https://stanno.us/mitmedialab'>
                    mit portfolio...
                </a>
            </li>

                
            {/* <ul className='flex justify-between w-[260px] p-3 pt-5'>
                <li className=''>
                        <a  className='flex justify-between items-center w-full text-gray-300'
                        href='https://github.com/stanleywalker1' target="_blank" rel="noopener noreferrer">
                        <FaGithub size={30} />
                        </a>
                </li>
                <li className=''>
                        <a  className='flex justify-between items-center w-full text-gray-300'
                        href='https://twitter.com/stannostudio' target="_blank" rel="noopener noreferrer">
                            <FaTwitter size={30} />
                        </a>
                    </li>
                <li className=''>
                    <a  className='flex justify-between items-center w-full text-gray-300'
                    href='https://www.instagram.com/stannostudio/' target="_blank" rel="noopener noreferrer">
                        <FaInstagram size={30} />
                    </a>
                </li>
            </ul> */}


        </ul>

        {/* Social Icons */}
        {/* <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
            <ul>
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600'>
                    <a  className='flex justify-between items-center w-full text-gray-300'
                    href='https://github.com/stanleywalker1' target="_blank" rel="noopener noreferrer">
                       Github <FaGithub size={30} />
                    </a>
                </li>
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600'>
                    <a  className='flex justify-between items-center w-full text-gray-300'
                    href='https://twitter.com/stannostudio' target="_blank" rel="noopener noreferrer">
                        Twitter <FaTwitter size={30} />
                    </a>
                </li>
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600'>
                    <a  className='flex justify-between items-center w-full text-gray-300'
                    href='https://www.instagram.com/stannostudio/' target="_blank" rel="noopener noreferrer">
                       Instagram <FaInstagram size={30} />
                    </a>
                </li>
            </ul>

        </div> */}

    
    </div>
  )
}

export default Navbar