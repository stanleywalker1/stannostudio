import React from 'react'
import {Link} from 'react-scroll';
import {FaArrowUp} from 'react-icons/fa'

const Footer = () => {
  return (

     <div className='w-full h-[80px] flex justify-center items-center bg-[#0a192f] text-gray-300'>

        {/* menu */}
        <ul >
            <li>
                <Link className='flex row items-center text-pink-600'to="home" smooth={true} duration={500}>
                    Back to the top<FaArrowUp className='ml-3'/>
                </Link>
            </li>
        </ul>
    </div>
  )
}

export default Footer