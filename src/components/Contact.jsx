import React from 'react'

const Contact = () => {
  return (
    <div name='contact' className='w-full h-screen bg-[#0a192f] flex justify-center item-center p-4'>
        <form method='POST' action="https://getform.io/f/dca81586-16d5-4f23-a36f-2ed5e035f4e5" className='flex flex-col max-w-[600px] w-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-pink-600 text-gray-300'>Contact</p>
                <div className='flex'>
                <p className='text-gray-300 py-4 font-mono'>Fill out form below or email <a className="underline underline-offset-4 decoration-indigo-500 hover:decoration-4">stannostudio@gmail.com</a></p>

                 </div>
               

                
            </div>
            <input className='bg-[#ccd6f6] p-2' type="text" placeholder='Name' name='name' />
            <input className='my-4 p-2 bg-[#ccd6f6]' type="email" placeholder='Email' name='email' />
            <textarea className='bg-[#ccd6f6] p-2' name="message" rows="10" placeholder='Message' />
            <button className='text-white border-2 hover:bg-pink-600 hover:border-pink-600 px-4 py-3 my-8 mx-auto flex items-center'>Let's collab</button>
        </form>
    </div>
  )
}

export default Contact