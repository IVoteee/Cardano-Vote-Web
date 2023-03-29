import React from 'react'
import Sidebar from '@/components/Sidebar'
import Script from 'next/script'
// import script from '@script/script.js'

const profile = () => {
  return (
    <div className='flex'>
        {/* <Script id="show-banner" strategy='afterInteractive'>
            {`
            const tabIndicator = document.querySelectorAll('[data-toggle="tab"]')
            const tabContent = document.querySelectorAll('.tab-content')

            tabIndicator.forEach(item=>{
                item.addEventListener('click', function(e) {
                    e.preventDefault()

                    tabIndicator.forEach(i=>i.classList.remove('active'))
                    tabContent.forEach(i=>classList.add('hidden'))

                    this.classList.add('active')
                    document.querySelector(this.dataset.target).classList.remove('hidden')
                })
            })`}
        </Script> */}
        <Sidebar/>
        <div className='items-center'>
            <div className='content-center justify-center divide'>
                <div className='text-2xl font-semibold'>
                    <div className="">
                        {/* <div className="w-4/12 z-10 sm:w-3/12 px-4">
                            <img src="https://www.creative-tim.com/learning-lab/tailwind-starter-kit/img/team-2-800x800.jpg" alt="..." class="shadow rounded-full max-w-full h-auto align-middle border-none" />
                        </div>
                        <div className='w-full h-64 z-9 bg-indigo-500'>
                            <img className='object-cover' src="" alt="" />
                        </div> */}
                        <div className='p-4'>
                            <div className="relative">
                                <img className='w-full h-72 object-cover rounded-lg' src="assets/Untitled.png" alt="" />
                                <a href="#" className='absolute top-4 left-4 w-8 h-8 rounded-full bg-white/50 hover:bg-white flex items-center justify-center'>
                                    <i className='flex items-center gap-8'></i>
                                </a>
                            </div>
                            <div className="m-10">
                                <div className='flex items-center gap-4 mt-4'>
                                    <img className='w-28 h-28 object-cover rounded-full' src="https://www.creative-tim.com/learning-lab/tailwind-starter-kit/img/team-2-800x800.jpg" alt="..." class="shadow rounded-full max-w-full h-auto align-middle border-none" />
                                    <div>
                                        <h2 className='text-2xl font-semibold mb-2'>Tên</h2>
                                        <span className='text-lg text-gray-500'>_tenho_</span>
                                    </div>
                                    <a href="" className='py-2 mr-10 px-4 rounded bg-blue-600 flex items-center gap-2 ml-auto text-white hover:bg-blue-700'>
                                        <i className='bx bx-edit-alt'>Edit profile</i>
                                    </a>
                                </div>
                                <p className='text-gray-500 text-lg mt-4 mb-8'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam, nostrum ut. Praesentium optio incidunt, quos quae tempora beatae temporibus! Corrupti voluptatum vel quisquam tempora, ad amet iure laudantium non enim.</p>
                                <div>
                                    <div className="flex items-center gap-8 tab-indicator border-b border-gray-200">
                                        <span data-toggle="tab" data-target="#security" className='active'> Bảo mật </span>
                                        <span data-toggle="tab" data-target="#activities"> Hoạt động </span>
                                        <span data-toggle="tab" data-target="#contact"> Thông tin liên hệ </span>
                                    </div>
                                    <div className='tab-content mt-4' id='security'>
                                        <h2 className='text-2xl font-semibold'>
                                            Bảo mật
                                        </h2>
                                    </div>
                                    <div className='tab-content mt-4 hidden' id='activities'>
                                        <h2 className='text-2xl font-semibold'>
                                            Hoạt động
                                        </h2>
                                    </div>
                                    <div className='tab-content mt-4 hidden' id='contact'>
                                        <h2 className='text-2xl font-semibold'>
                                            Thông tin liên hệ
                                        </h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className=''>
                </div>
            </div>
        </div>
    </div>
  )
}

export default profile