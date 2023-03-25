import React from 'react'
import Footer from '@/components/Footer'

const login = () => {
  return (
    <>
      <div className='body-bg m-auto py-5 h-full'>
        <header className='max-w-lg mx-auto py-10'>
          <h1 className='text-4xl font-bold text-white text-center'>iVote</h1>
        </header>
        <div className='bg-white max-w-lg mx-auto p-8 md:p-12 my-10 rounded-lg shadow-2xl align-middle my-auto'>
            <section className='text-center'>
              <h3 className='font-bold text-2xl'>Chào mừng tới iVote</h3>
              <p className='text-gray-600 pt-2'>Đăng nhập</p>
            </section>
            <section className='mt-10'>
              <form className='flex flex-col' action="">
                <div className='mb-6 pt-3 rounded bg-gray-200'>
                  <label htmlFor="username" className='block text-gray-700 text-sm font-bold mb-2 ml-3'>Tên tài khoản</label>
                  <input type="text" id='username' className='bg-gray-200 rounded w-full text-gray-700 focus:outline-none border-b-4 border-gray-300 focus:border-blue-600 transition duration-500 px-3 pb-3' />
                </div>
                <div className='mb-6 pt-3 rounded bg-gray-200'>
                  <label htmlFor="password" className='block text-gray-700 text-sm font-bold mb-2 ml-3'>Mật khẩu</label>
                  <input type="password" id='password' className='bg-gray-200 rounded w-full text-gray-700 focus:outline-none border-b-4 border-gray-300 focus:border-blue-600 transition duration-500 px-3 pb-3' />
                </div>
                <div className='pb-6 text-center'>
                  <a href="" className='text-sm text-blue-600 hover:blue-700 hover:underline mb-6'>Quên mật khẩu?</a>
                </div>
                <button type='submit' className='h-12 bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 rounded shadow-lg hover:shadow-xl transition duration-200'>Đăng nhập</button>
              </form>
            </section>
        </div>
        <Footer/>
        <div className='py-[200px]'>
        </div>
      </div>
    </>
    
  )
}

export default login