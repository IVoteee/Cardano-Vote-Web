import Sidebar from '@/components/Sidebar'
import React, {useState} from 'react';
import Script from 'next/script';
import { candidates } from '@/script/voteScript'

const vote = () => {
    const [checkedState, setCheckedState] = useState(
        new Array(candidates.length).fill(false)
    );

    const [total, setTotal] = useState(0);

    const handleOnChange = (position) => {

        let limit = 3;

        const updatedCheckedState = checkedState.map((item, index) =>
        index === position ? !item : item
        );

        setCheckedState(updatedCheckedState);

        const totalVote = updatedCheckedState.reduce(
            (sum, currentState, index) => {
                sum = 0;
            if (currentState === true) {
                sum++;
            }
            if (sum == limit) {
                currentState = false;
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
                                    {candidates.map(({ name }, index) => {
                                        return (
                                            <li key={index}>
                                                <div className="row-vote">
                                                    <p>{name}</p>
                                                    <label className='label-vote' htmlFor="">
                                                        <input className='input-vote check' type="checkbox" checked={checkedState[index]} onChange={() => handleOnChange(index)} />
                                                    </label>
                                                </div>
                                            </li>
                                        )
                                    })}
                                </ul>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default vote