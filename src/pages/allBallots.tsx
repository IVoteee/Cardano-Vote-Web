import React from 'react'
import Sidebar from '@/components/Sidebar'
import CurrentVotes from '@/components/CurrentVotes'

const allBallots = () => {
  return (
    <div className='flex'>
        <Sidebar />
        <CurrentVotes />
    </div>
  )
}

export default allBallots