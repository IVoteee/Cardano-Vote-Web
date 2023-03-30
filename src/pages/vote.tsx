import Sidebar from '@/components/Sidebar'
import React, {useEffect, useState} from 'react';
import Script from 'next/script';
import { candidates } from '@/script/voteScript'

const vote = () => {
    
    const initialState = { checkedIds: [] }
    const [checkedState, setCheckedState] = useState(
        new Array(candidates.length).fill(false)
    );

    const [total, setTotal] = useState(0);
    const [limit, setLimit] = useState(3)
        
    const handleOnChange = (position) => {
        if (checkedState.filter((i) => i).length >= limit) checkedState.fill(false);
        const updatedCheckedState = checkedState.map((item, index) =>
            index === position ? !item : item
        );
        setCheckedState(updatedCheckedState);

        const totalVote = updatedCheckedState.reduce(
            (sum, currentState, index) => {
            if (currentState === true) {
                sum++;
            }
            return sum;
            },
            0
        );
      setTotal(totalVote);
    }

    return (
        <div className='flex'>
            <Sidebar />
            <div className='ml-10 items-center p-7'>
                <div className='content-center justify-center divide'>
                    <div className='text-2xl font-semibold'>
                        <header className='max-w-lg py-5 content-center justify-center'>
                            Vote for "Name here"
                        </header>
                    </div>
                    <div className="hero bg-white rounded-lg shadow-lg">
                        <div className="container-vote">
                            <form action="">
                                <ul className='vote-list'>
                                    {candidates.map(({ name }, index, e) => {
                                        return (
                                            <li key={index}>
                                                <div className="row-vote flex">
                                                    <p>{name}</p>
                                                    <label className='label-vote yes flex items-center' htmlFor="">
                                                        <input 
                                                            className='input-vote check' 
                                                            type="checkbox" 
                                                            value={name}
                                                            checked={checkedState[index]} 
                                                            onChange={() => handleOnChange(index, e)} 
                                                        />
                                                    </label>
                                                </div>
                                            </li>
                                        )
                                    })}
                                </ul>
                            </form>
                            <p className='text-red-500'>Phiếu này chỉ cho phép tối đa {limit} người được bầu*</p>
                        </div>
                    </div>
                    <button type='submit' className='h-12 w-36 mt-10 bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 rounded shadow-lg hover:shadow-xl transition duration-200'>Bỏ phiếu</button>
                </div>
            </div>
        </div>
    )
}

export default vote