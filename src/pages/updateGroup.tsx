import React from 'react'
import Sidebar from '@/components/Sidebar'

const updateGroup = () => {
  return (
    <div className='flex'>
        <Sidebar/>
        <div className='ml-10 items-center p-7'>
            <div className='content-center justify-center divide'>
                <div className='text-2xl font-semibold'>
                    <header className='max-w-lg py-5 content-center justify-center'>
                        Sửa thông tin nhóm
                    </header>
                    <form className='flex-col grid grid-cols-4 gap-4 w-[37.5vw]' action="">
                        <div className='mb-2 rounded col-span-4'>
                            <label htmlFor="groupName" className='block text-gray-700 text-sm font-bold mb-2 col-span-4'>Tên nhóm</label>
                            <input type="text" id='groupName' className='bg-gray-300 py-2 text-base rounded w-full text-gray-700 focus:outline-none border-b-4 border-gray-300 focus:border-blue-600 transition duration-500 px-3 pb-3' />
                        </div>
                        <div className='mb-2 rounded col-span-4'>
                            <label htmlFor="invite" className='block text-gray-700 text-sm font-bold mb-2 col-span-4'>Thêm thành viên (ID)</label>
                            <input type="text" id='invite' className='bg-gray-300 py-2 text-base rounded w-full text-gray-700 focus:outline-none border-b-4 border-gray-300 focus:border-blue-600 transition duration-500 px-3 pb-3' />
                            <p className='text-xs text-gray-500'>Bạn có thể thêm thành viên bằng cách nhập nhiều ID cùng lúc. VD: 1, 3, 34, 126, ...</p>
                        </div>
                        <div className='col-span-2'></div>
                        <div className='col-span-2'></div>
                        <div className='mb-2 rounded col-span-1'>
                            <label htmlFor="privacy" className="block text-gray-700 text-sm font-bold mb-2">Chọn quyền riêng tư *</label>
                                <select id="privacy" className="text-base border text-gray-900 rounded border-b-4 border-gray-300 focus:border-blue-600 transition duration-500 block w-full p-2.5 bg-gray-300 placeholder-gray-400">
                                <option value="highestVote">Công khai</option>
                                <option value="percentageHighest">Riêng tư</option>
                            </select>
                        </div>
                        <div className='ml-5'>
                            <label htmlFor="fileSelect" className='block text-gray-700 text-sm font-bold mb-2 col-span-4'>Nhập file thành viên</label>
                            <input type="file" id="fileSelect" className='text-lg col-span-2' accept=".csv, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel" />
                        </div>
                        <div className='mb-2 rounded col-span-4'>
                            <label htmlFor="Description" className='block text-gray-700 text-sm font-bold mb-2 col-span-4'>Mô tả</label>
                            <textarea id='Description' className='bg-gray-300 h-64 py-3 text-base rounded w-full text-gray-700 focus:outline-none border-b-4 border-gray-300 focus:border-blue-600 transition duration-500 px-3 pb-3' />
                        </div>
                        <button type='submit' className='bg-blue-600 hover:bg-blue-700 h-12 text-lg text-white font-bold py-2 rounded shadow-lg hover:shadow-xl transition duration-200 col-span-2'>Cập nhật</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
  )
}

export default updateGroup