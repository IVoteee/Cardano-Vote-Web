import React, {useState} from 'react'
import { Inter } from 'next/font/google'
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai'

const inter = Inter({ subsets: ['latin'] })

export default function Navbar() {
    const [nav, setNav] = useState(true)

    const handleNav = () => {
        setNav(!nav)
    }
  return (
    <div className='text-white flex bg-blue-600 w-full'>
        <div className='flex max-w-[1240px] justify-between items-center w-full h-24 mx-auto px-4'>
            <h1 className='text-3xl font-bold text-white'>
                iVote
            </h1>
            <ul className='hidden md:flex'>
                <li className='p-4'><a href="">Trang chủ</a></li>
                <li className='p-4'><a href="">Về chúng tôi</a></li>
                <li className='p-4'><a href="">Liên hệ</a></li>
                <li className='p-4'><a href="/login">Đăng nhập</a></li>
                <li className='p-4'><a href="/register">Đăng ký</a></li>
            </ul>
            <div onClick={handleNav} className='block md:hidden'>
                {!nav ? <AiOutlineClose size={20}/> : <AiOutlineMenu size={20} />}
            </div>
        </div>
      <div className={!nav ? 'fixed left-0 top-0 w-[60%] h-full bg-blue-500 ease-in-out duration-500' : 'fixed left-[-100%]'}>
        <h1 className='w-full text-3xl font-bold text-white m-4'>iVote</h1>
        <ul className='p-4 uppercase'>
          <li className='p-4 border-b border-blue-600'>Trang chủ</li>
          <li className='p-4 border-b border-blue-600'>Về chúng tôi</li>
          <li className='p-4 border-b border-blue-600'>Liên hệ</li>
          <li className='p-4 border-b border-blue-600'>Đăng nhập</li>
          <li className='p-4 border-b border-blue-600'>Đăng ký</li>
        </ul>
      </div>
    </div>
  )
}
