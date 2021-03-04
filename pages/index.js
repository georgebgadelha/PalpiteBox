import React from 'react'
import Link from 'next/link'

const Index = () => {
  return (
    <div>
      <p className='mt-12 text-center'>Restaurant X always seeks to better serve its customers.<br></br>
      Therefore, we are always open to listen to your opinion!</p>
      <div className='text-center mt-12'>
        <Link href='/review'>
          <a className='bg-blue-400 px-6 py-4 font-bold rounded-lg shadow-lg hover:shadow'>Give opinion or suggestion</a>
        </Link>
      </div>
      <p className='my-12 text-center'>
        Discount message.
      </p>
    </div>
  )
}

export default Index