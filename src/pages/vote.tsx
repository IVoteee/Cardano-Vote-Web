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
        
    const handleOnChange = (position, e) => {
        if (checkedState.filter((i) => i).length >= 3 && e.target.checked) return;
        const updatedCheckedState = checkedState.map((item, index) =>
            index === position ? !item : item
        );

        setCheckedState(updatedCheckedState);

        const totalVote = updatedCheckedState.reduce(
            (sum, currentState, index) => {
            if (currentState === true) {
                sum++;
            }
            if(sum >= limit && currentState === true) {
                sum = limit
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
                    <div className="hero">
                        <div className="container-vote">
                            <form action="">
                                <ul className='vote-list'>
                                    {candidates.map(({ name, id }, index, e) => {
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
                            <p>{total}</p>
                        </div>
                    </div>
                    <button type='submit' className='h-12 w-36 mt-10 bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 rounded shadow-lg hover:shadow-xl transition duration-200'>Bỏ phiếu</button>
                </div>
            </div>
        </div>
    )
}

export default vote