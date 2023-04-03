import React from 'react'
import {
    FaDribbbleSquare,
    FaFacebookSquare,
    FaGithubSquare,
    FaInstagram,
    FaTwitterSquare
} from 'react-icons/fa'

const Footer1 = () => {
  return (
    <div className='w-full bg-blue-500'>
        <div className='max-w-[1420px] mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8 text-gray-300 bg-blue-500'>
            <h1 className='ml-[30%] sm: text-3xl font-bold text-white'>
                iVote
            </h1>
            <p className='py-4'>
                Lorem, ipsum dolor sit amet
            </p>
            <div className='flex justify-between md:w-[75%] my-6'>
                <FaFacebookSquare  size={30}/>
                <FaInstagram  size={30}/>
                <FaTwitterSquare  size={30}/>
                <FaDribbbleSquare  size={30}/>
                <FaGithubSquare  size={30}/>
            </div>
        </div>
        <div className='max-w-[1420px] mx-auto lg:cols-span-2 flex justify-around mt-6 pb-5'>
            <div>
                <h6 className='font-medium text-white'>Hỗ trợ</h6>
                <ul className='text-white'>
                    <li className='py-2 text-sm'>Lorem ipsum dolor</li>
                    <li className='py-2 text-sm'>Lorem ipsum dolor</li>
                    <li className='py-2 text-sm'>Lorem ipsum dolor</li>
                </ul>
            </div>
            <div>
                <h6 className='font-medium text-white'>Hỗ trợ</h6>
                <ul className='text-white'>
                    <li className='py-2 text-sm'>Lorem ipsum dolor</li>
                    <li className='py-2 text-sm'>Lorem ipsum dolor</li>
                    <li className='py-2 text-sm'>Lorem ipsum dolor</li>
                </ul>
            </div>
            <div>
                <h6 className='font-medium text-white'>Hỗ trợ</h6>
                <ul className='text-white'>
                    <li className='py-2 text-sm'>Lorem ipsum dolor</li>
                    <li className='py-2 text-sm'>Lorem ipsum dolor</li>
                    <li className='py-2 text-sm'>Lorem ipsum dolor</li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Footer1