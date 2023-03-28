import React, {useState} from 'react'
import Sidebar from '@/components/Sidebar';

function createCandidate() {
    const [val,setVal]=useState([]);

    const handleAdd=()=>{
        const abc=[...val,[]];
        setVal(abc)
    }
    const handleChange=(onChangeValue, i)=>{
        const inputData=[...val]
        inputData[i]=onChangeValue.target.value;
        setVal(inputData)
    }
    const handleDelete=(i) => {
        const deleteVal=[...val]
        deleteVal.splice(i, 1)
        setVal(deleteVal)
    }
    console.log(val, "data-")
    return (
        <div className='flex'>
            <Sidebar />
            <div className='ml-10 items-center p-7'>
                <div className='content-center justify-center divide'>
                    <div className='text-2xl font-semibold'>
                        <header className='max-w-lg py-5 content-center justify-center'>
                            Thêm ứng viên
                        </header>
                    </div>  
                    <button className='w-36 bg-blue-600 hover:bg-blue-700 h-12 text-white font-bold py-2 rounded shadow-lg hover:shadow-xl transition duration-200' onClick={()=>handleAdd()}>Thêm</button>
                        {val.map((data, i) => {
                            return (
                                <div className='flex flex-row'>
                                    {/* <input className='' value={data} onChange = {e=>handleChange(e, i)} /> */}
                                    <div className='my-6 pt-3 rounded bg-gray-300 col-span-2'>
                                        <label htmlFor="name" className='text-gray-700 w-72 text-sm font-bold mb-2 ml-3'>ID Tài khoản</label>
                                        <input type="text" id='name' value={data} onChange = {e=>handleChange(e, i)} className='bg-gray-300 rounded w-full text-gray-700 focus:outline-none border-b-4 border-gray-300 focus:border-blue-600 transition duration-500 px-3 pb-3' />
                                    </div>
                                    <button className='w-36 my-9 ml-10 pt-3 bg-red-600 hover:bg-red-700 h-12 text-white font-bold py-2 rounded shadow-lg hover:shadow-xl transition duration-200' onClick={()=>handleDelete(i)}>Remove</button>
                                </div>
                            )
                        })}
                        <button type='submit' className='block w-48 my-9 pt-3 bg-blue-600 hover:bg-blue-700 h-12 text-white font-bold py-2 rounded shadow-lg hover:shadow-xl transition duration-200'>Đăng ký danh sách</button>              
                </div>
            </div>
        </div>
    )
}

export default createCandidate