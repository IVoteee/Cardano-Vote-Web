import React from 'react'

const Card = () => {
  return (
    <div className='w-full py-[10rem] px-4 bg-white'>
        <div className='max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8'>
            <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
                <img src="" alt="" className="w-20 mx-auto mt-[-3rem] bg-white" />
                <h2 className='text-2xl font-bold text-center py-8'></h2>
                <p className='text-center text-4xl font-bold'>ABDC</p>
                <div className='text-center font-medium'>
                    <p className='py-2 border-b mx-8 mt-8'>Lorem ipsum dolor sit amet</p>
                    <p className='py-2 border-b mx-8'>Lorem ipsum dolor sit amet</p>
                    <p className='py-2 border-b mx-8'>Lorem ipsum dolor sit amet</p>
                </div>
                <button className='bg-blue-600 w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black'>Start trial</button>
            </div>
            <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
                <img src="" alt="" className="w-20 mx-auto mt-[-3rem] bg-white" />
                <h2 className='text-2xl font-bold text-center py-8'></h2>
                <p className='text-center text-4xl font-bold'>ABDC</p>
                <div className='text-center font-medium'>
                    <p className='py-2 border-b mx-8 mt-8'>Lorem ipsum dolor sit amet</p>
                    <p className='py-2 border-b mx-8'>Lorem ipsum dolor sit amet</p>
                    <p className='py-2 border-b mx-8'>Lorem ipsum dolor sit amet</p>
                </div>
                <button className='bg-blue-600 w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black'>Start trial</button>
            </div>
            <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
                <img src="" alt="" className="w-20 mx-auto mt-[-3rem] bg-white" />
                <h2 className='text-2xl font-bold text-center py-8'></h2>
                <p className='text-center text-4xl font-bold'>ABDC</p>
                <div className='text-center font-medium'>
                    <p className='py-2 border-b mx-8 mt-8'>Lorem ipsum dolor sit amet</p>
                    <p className='py-2 border-b mx-8'>Lorem ipsum dolor sit amet</p>
                    <p className='py-2 border-b mx-8'>Lorem ipsum dolor sit amet</p>
                </div>
                <button className='bg-blue-600 w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black'>Start trial</button>
            </div>
        </div>
    </div>
  )
}

export default Card