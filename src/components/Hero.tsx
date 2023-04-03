import React from 'react'

const Hero = () => {
  return (
    <div className='text-blue-600'>
        <div className='max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center'>
            <p className='text-blue-600 font-bold text-3xl p-2'>Bỏ phiếu với iVote</p>
            <div className=' justify-center items-center'>
                <p className='md:text-4xl sm:text-3xl text-xl font-bold'>Nhanh, linh hoạt và tiện lợi</p>
                <button className='bg-blue-600 w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-white'>Tìm hiểu thêm</button>
            </div>
        </div>
    </div>
  )
}

export default Hero