import Sidebar from '@/components/Sidebar'
import React from 'react'

const allPages = () => {
  return (
    <div className='flex'>
      <Sidebar/>
      <div className='p-7'>
          <div className='text-2xl font-semibold'>
            <ul>
              <li key="uniqueId2"><a href="/createBallot">/createBallot</a></li>
              <li key="uniqueId1"><a href="/createCandidate">/createCandidate</a></li>
              <li key="uniqueId3"><a href="/vote">/vote</a></li>
              <li key="uniqueId2"><a href="/">/</a></li>
              
              <li key="uniqueId1"><a href="/login">/login</a></li>
              <li key="uniqueId3"><a href="/register">/register</a></li>

              <li key="uniqueId3"><a href="/createGroup">/createGroup</a></li>
              <li key="uniqueId3"><a href="/updateGroup">/updateGroup</a></li>
              
              <li key="uniqueId3"><a href="/profile">/profile</a></li>
              <li key="uniqueId3"><a href="/groupPage">/groupPage</a></li>
            </ul>
          </div>
      </div>
    </div>
  )
}

export default allPages