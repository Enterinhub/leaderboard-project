import React from 'react'
import { FaTrophy } from 'react-icons/fa'
import { MdAccessTime } from 'react-icons/md';

export default function TopHeader() {
  return (
    <div className='icons'>
        <span className='name'><FaTrophy style={{ marginRight: '10px', color: 'gold' }} />Name</span>
        <span className='time'><MdAccessTime size={24} />Time</span>
    </div>
  )
}
