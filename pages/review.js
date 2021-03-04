import React from 'react'
import Link from 'next/link'

const Review = () => {
  return (
    <div className='pt-6'>
      <h1 className='text-center font-bold my-4 text-2xl'>Review and suggestions</h1>
      <p className='text-center mb-6'>Restaurant X always seeks to better serve its customers. <br />
      Therefore, we are always open to listen to your opinion!
      </p>
      <div className='w-1/5 mx-auto'>
        <label className='font-bold'>Full Name</label>
        <input type="text" className='p-4 block shadow bg-blue-100 my-2 rounded'/>
      </div>
    </div>
  )
}

export default Review