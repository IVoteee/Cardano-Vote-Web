import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Sidebar from '../components/Sidebar'
import React, {useState} from 'react'
import Datepicker from "react-tailwindcss-datepicker"; 

const inter = Inter({ subsets: ['latin'] })

export default function createBallot() {
    const [value, setValue] = useState({ 
        startDate: null,
        endDate: null 
    }); 
    const handleValueChange = (newValue) => {
        console.log("newValue:", newValue); 
        setValue(newValue); 
    }

  return (
    <div className='flex'>
        <Sidebar/>
      <div className='p-7'>
          <div className='text-2xl font-semibold'>
            <header className='max-w-lg py-5'>
                <h1 className='text-3xl font-bold text-dark mb-5'>Tạo cuộc bầu cử</h1>
            </header>
            <form className='flex-col grid grid-cols-4 gap-4 w-[37.5vw]' action="">
                <div className='mb-2 rounded col-span-4'>
                  <label htmlFor="title" className='block text-gray-700 text-sm font-bold mb-2 col-span-4'>Tiêu đề cuộc bầu cử</label>
                  <input type="text" id='title' className='bg-gray-300 py-2 text-base rounded w-full text-gray-700 focus:outline-none border-b-4 border-gray-300 focus:border-blue-600 transition duration-500 px-3 pb-3' />
                </div>
                <div className='mb-2 rounded col-span-2'>
                    <label htmlFor="dateStart" className="block text-gray-700 text-sm font-bold mb-2">Ngày bắt đầu</label>
                    <div>
                        <Datepicker
                            inputClassName="bg-gray-300 pt-3 dark:bg-gray-300 w-full text-gray-900 dark:text-gray-900 rounded border-b-4 border-gray-300 dark:border-gray-300 focus:outline-none focus:border-blue-600 transition duration-500"
                            toggleClassName="rounded-r-lg bg-opacity-40 bg-gray-300 text-gray-900 dark:text-gray-900 hover:bg-blue-800 hover:bg-opacity-60 transition-all duration-150 ease-in-out" 
                            primaryColor={"blue"} 
                            value={value} 
                            onChange={handleValueChange}
                            displayFormat={"DD/MM/YYYY"}  
                        /> 
                    </div>
                </div>
                <label className="block text-gray-700 text-sm font-bold col-span-4">Thời gian bắt đầu</label>
                <div className='mb-2 rounded col-span-1'>
                        <select id="hourStart" className="text-base border text-gray-900 rounded border-b-4 border-gray-300 focus:border-blue-600 transition duration-500 block w-full p-2.5 bg-gray-300 placeholder-gray-400">
                        <option value="0">0</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                        <option value="8">8</option>
                        <option value="9">9</option>
                        <option value="10">10</option>
                        <option value="11">11</option>
                        <option value="12">12</option>
                        <option value="13">13</option>
                        <option value="14">14</option>
                        <option value="15">15</option>
                        <option value="16">16</option>
                        <option value="17">17</option>
                        <option value="18">18</option>
                        <option value="19">19</option>
                        <option value="20">20</option>
                        <option value="21">21</option>
                        <option value="22">22</option>
                        <option value="23">23</option>
                    </select>
                </div>
                <div className='mb-2 rounded col-span-1'>
                        <select id="minuteStart" className="text-base border text-gray-900 rounded border-b-4 border-gray-300 focus:border-blue-600 transition duration-500 block w-full p-2.5 bg-gray-300 placeholder-gray-400">
                        <option value="00">00</option>
                        <option value="15">15</option>
                        <option value="30">30</option>
                        <option value="45">45</option>
                    </select>
                </div>
                <div className='col-span-2'></div>
                <label className="block text-gray-700 text-sm font-bold col-span-4">Thời gian kết thúc</label>
                <div className='mb-2 rounded col-span-1'>
                        <select id="hourEnd" className="text-base border text-gray-900 rounded border-b-4 border-gray-300 focus:border-blue-600 transition duration-500 block w-full p-2.5 bg-gray-300 placeholder-gray-400">
                        <option value="0">0</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                        <option value="8">8</option>
                        <option value="9">9</option>
                        <option value="10">10</option>
                        <option value="11">11</option>
                        <option value="12">12</option>
                        <option value="13">13</option>
                        <option value="14">14</option>
                        <option value="15">15</option>
                        <option value="16">16</option>
                        <option value="17">17</option>
                        <option value="18">18</option>
                        <option value="19">19</option>
                        <option value="20">20</option>
                        <option value="21">21</option>
                        <option value="22">22</option>
                        <option value="23">23</option>
                    </select>
                </div>
                <div className='mb-2 rounded col-span-1'>
                        <select id="minuteEnd" className="text-base border text-gray-900 rounded border-b-4 border-gray-300 focus:border-blue-600 transition duration-500 block w-full p-2.5 bg-gray-300 placeholder-gray-400">
                        <option value="00">00</option>
                        <option value="15">15</option>
                        <option value="30">30</option>
                        <option value="45">45</option>
                    </select>
                </div>
                <div className='col-span-2'></div>
                <div className='mb-2 rounded col-span-3'>
                    <label htmlFor="ballotType" className="block text-gray-700 text-sm font-bold mb-2">Kiểu bầu cử</label>
                        <select id="ballotType" className="text-base border text-gray-900 rounded border-b-4 border-gray-300 focus:border-blue-600 transition duration-500 block w-full p-2.5 bg-gray-300 placeholder-gray-400">
                        <option value="highestVote">Lấy từ cao xuống thấp</option>
                        <option value="percentageVote">Lấy theo số phần trăm nhất định</option>
                        <option value="percentageHighest">Lấy từ cao xuống thấp nhưng phải đạt số phần trăm nhất định</option>
                    </select>
                </div>
                <div className='col-span-1'></div>
                <div className='mb-2 rounded col-span-1'>
                  <label htmlFor="title" className='block text-gray-700 text-sm font-bold mb-2 col-span-4'>Số ứng viên</label>
                  <input type="text" id='title' placeholder='1' className='bg-gray-300 py-2 text-base rounded w-full text-gray-700 focus:outline-none border-b-4 border-gray-300 focus:border-blue-600 transition duration-500 px-3 pb-3' />
                </div>
                <div className='mb-2 rounded col-span-1'>
                  <label htmlFor="title" className='block text-gray-700 text-sm font-bold mb-2 col-span-4'>Số ứng viên được chọn</label>
                  <input type="text" id='title' placeholder='1' className='bg-gray-300 py-2 text-base rounded w-full text-gray-700 focus:outline-none border-b-4 border-gray-300 focus:border-blue-600 transition duration-500 px-3 pb-3' />
                </div>
                <div className='mb-2 rounded col-span-1'>
                  <label htmlFor="title" className='block text-gray-700 text-sm font-bold mb-2 col-span-4'>Phần trăm phiếu cần</label>
                  <input type="text" id='title' placeholder='50' className='bg-gray-300 py-2 text-base rounded w-full text-gray-700 focus:outline-none border-b-4 border-gray-300 focus:border-blue-600 transition duration-500 px-3 pb-3' />
                </div>
                <div className='mb-2 rounded col-span-4'>
                  <label htmlFor="Description" className='block text-gray-700 text-sm font-bold mb-2 col-span-4'>Mô tả</label>
                  <textarea id='Description' className='bg-gray-300 h-64 py-3 text-base rounded w-full text-gray-700 focus:outline-none border-b-4 border-gray-300 focus:border-blue-600 transition duration-500 px-3 pb-3' />
                </div>
                <button type='submit' className='bg-blue-600 hover:bg-blue-700 h-12 text-lg text-white font-bold py-2 rounded shadow-lg hover:shadow-xl transition duration-200 col-span-2'>Tạo cuộc bầu cử</button>
            </form>
          </div>
      </div>
    </div>
  )
}
