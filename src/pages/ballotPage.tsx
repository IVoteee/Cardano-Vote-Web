import React from 'react';
import { useState } from 'react';
import candidateData from '@/script/candidate'; // import candidate data as an array of objects
import Sidebar from '@/components/Sidebar';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const CandidateCards = ({ candidates, startIndex, endIndex }) => {
    return (
      <div className="flex flex-wrap justify-center">
        {candidates.slice(startIndex, endIndex).map((candidate) => (
            <a href={`/ballot/candidate/${candidate.id}`}>
                <div key={candidate.id} className="hover:scale-105 transition duration-300 mx-4 my-4 w-80 bg-white shadow-lg rounded-lg overflow-hidden">
                <img className="w-full h-48 object-cover" src={candidate.image} alt={candidate.name} />
                <div className="p-4">
                    <h2 className="text-xl font-bold mb-2">{candidate.name}</h2>
                    <p className="text-gray-700 text-base">{candidate.position}</p>
                    <p className="text-gray-700 text-base">{candidate.location}</p>
                </div>
          </div>
            </a>
        ))}
      </div>
    );
  };

export default function BallotPage() {

    const [startIndex, setStartIndex] = useState(0); // initialize startIndex state
    const [endIndex, setEndIndex] = useState(3); // initialize endIndex state
  
    const handlePrevious = () => {
        if (startIndex === 0) { // if at first page, loop to last page
          setStartIndex(candidateData.length - 3);
          setEndIndex(candidateData.length);
        } else { // otherwise, go to previous page
          setStartIndex(startIndex - 3);
          setEndIndex(endIndex - 3);
        }
      };
    
      const handleNext = () => {
        if (endIndex === candidateData.length) { // if at last page, loop to first page
          setStartIndex(0);
          setEndIndex(3);
        } else { // otherwise, go to next page
          setStartIndex(startIndex + 3);
          setEndIndex(endIndex + 3);
        }
      }
  
    const candidates = candidateData.concat(candidateData, candidateData); // create an array of candidates for infinite scrolling
  
    return (
        <div className='flex'>
            <Sidebar/>
            <div className="container mx-auto">
                <h1 className="text-3xl font-bold text-center my-8">Cuộc bầu cử thường niên 2023</h1>
                <div className="flex justify-center items-center my-4">
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-5 px-4 rounded mr-4" onClick={handlePrevious}>
                        <FaChevronLeft />
                    </button>
                    <CandidateCards candidates={candidates} startIndex={startIndex} endIndex={endIndex} />
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-5 px-4 rounded ml-4" onClick={handleNext}>
                        <FaChevronRight />
                    </button>
                </div>
                <div className='text-center pt-10'>
                    <a href='/vote' className='p-10 pt-5 pb-5 mt-10 bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 rounded shadow-lg hover:shadow-xl transition duration-200'>Bỏ phiếu</a>
                </div>
            </div>
        </div>
    );
}