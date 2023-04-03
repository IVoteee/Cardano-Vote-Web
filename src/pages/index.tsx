import React, {useState} from 'react'
import { Inter } from 'next/font/google'
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai'
import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Card from '@/components/Card'
import Footer1 from '@/components/Footer1'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Card />
      <Footer1 />
    </div>
  )
}
