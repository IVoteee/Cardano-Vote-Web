import React, {useState} from 'react'
import Footer from '@/components/Footer'
import Datepicker from "react-tailwindcss-datepicker"; 

const login = () => {
    const [value, setValue] = useState({ 
        startDate: null,
        endDate: null 
    }); 
    const handleValueChange = (newValue) => {
        console.log("newValue:", newValue); 
        setValue(newValue); 
    } 
  return (
    <main>
      <div className='body-bg m-auto py-5'>
        <header className='max-w-lg mx-auto py-5'>
            <h1 className='text-4xl font-bold text-white text-center'>iVote</h1>
        </header>
        <div className='bg-white max-w-lg mx-auto p-8 md:p-12 my-10 rounded-lg shadow-2xl align-middle my-auto'>
            <section className='text-center'>
              <h3 className='font-bold text-2xl'>Chào mừng tới iVote</h3>
              <p className='text-gray-600 pt-2'>Đăng ký tài khoản</p>
            </section>
            <section className='mt-10'>
              <form className='flex-col grid grid-cols-2 gap-4' action="">
                <div className='mb-6 pt-3 rounded bg-gray-300 col-span-2'>
                  <label htmlFor="email" className='block text-gray-700 text-sm font-bold mb-2 ml-3'>Email</label>
                  <input type="text" id='email' className='bg-gray-300 rounded w-full text-gray-700 focus:outline-none border-b-4 border-gray-300 focus:border-blue-600 transition duration-500 px-3 pb-3' />
                </div>
                <div className='mb-6 pt-3 rounded bg-gray-300 col-span-1'>
                  <label htmlFor="username" className='block text-gray-700 text-sm font-bold mb-2 ml-3'>Họ</label>
                  <input type="text" id='username' className='bg-gray-300 rounded w-full text-gray-700 focus:outline-none border-b-4 border-gray-300 focus:border-blue-600 transition duration-500 px-3 pb-3' />
                </div>
                <div className='mb-6 pt-3 rounded bg-gray-300 col-span-1'>
                  <label htmlFor="username" className='block text-gray-700 text-sm font-bold mb-2 ml-3'>Tên</label>
                  <input type="text" id='username' className='bg-gray-300 rounded w-full text-gray-700 focus:outline-none border-b-4 border-gray-300 focus:border-blue-600 transition duration-500 px-3 pb-3' />
                </div>
                <div className='col-span-1'>
                    <label htmlFor="countries" className="block text-gray-700 text-sm font-bold mb-2">Giới tính</label>
                    <select id="countries" className="bg-gray-300 mb-6 pt-3 text-gray-700 text-sm rounded block w-full p-2.5 border-b-4 border-gray-300 focus:border-blue-600 transition duration-500">
                        <option selected value="Male">Nam</option>
                        <option value="Female">Nữ</option>
                    </select>
                </div>
                <div className='col-span-1'>
                    <label htmlFor="countries" className="block text-gray-700 text-sm font-bold mb-2">Ngày sinh</label>
                    <div className='bg-gray-300'>
                        <Datepicker
                            inputClassName="bg-gray-300 pt-3 dark:bg-gray-300 w-full text-gray-900 dark:text-gray-900 rounded border-b-4 border-gray-300 dark:border-gray-300 focus:outline-none focus:border-blue-600 transition duration-500"
                            toggleClassName="rounded-r-lg bg-opacity-40 bg-gray-300 text-gray-900 dark:text-gray-900 hover:bg-blue-800 hover:bg-opacity-60 transition-all duration-150 ease-in-out" 
                            primaryColor={"blue"} 
                            asSingle={true} 
                            value={value} 
                            onChange={handleValueChange}
                            displayFormat={"DD/MM/YYYY"}  
                        /> 
                    </div>
                </div>
                <div className='mb-6 pt-3 rounded bg-gray-300 col-span-2'>
                  <label htmlFor="username" className='block text-gray-700 text-sm font-bold mb-2 ml-3'>Tên tài khoản</label>
                  <input type="text" id='username' className='bg-gray-300 rounded w-full text-gray-700 focus:outline-none border-b-4 border-gray-300 focus:border-blue-600 transition duration-500 px-3 pb-3' />
                </div>
                <div className='mb-6 pt-3 rounded bg-gray-300 col-span-2'>
                  <label htmlFor="password" className='block text-gray-700 text-sm font-bold mb-2 ml-3'>Mật khẩu</label>
                  <input type="password" id='password' className='bg-gray-300 rounded w-full text-gray-700 focus:outline-none border-b-4 border-gray-300 focus:border-blue-600 transition duration-500 px-3 pb-3' />
                </div>
                <button type='submit' className='bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 rounded shadow-lg hover:shadow-xl transition duration-200 col-span-2'>Đăng ký</button>
              </form>
            </section>
        </div>
        <Footer/>
      </div>
    </main>
    
  )
}

export default login