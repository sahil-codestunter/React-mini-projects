import React from 'react'
import { useParams } from 'react-router-dom'

function User() {
    const {userid}= useParams();
  return (
    <div className='bg-green-700 text-3xl m-4'>User:{userid}</div>
  )
}

export default User