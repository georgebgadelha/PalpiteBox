import React from 'react'
import Link from 'next/link'
import useSWR from 'swr'
import PageTitle from '../components/PageTitle'

const fetcher = (...args) => fetch(...args).then(res => res.json())

const Index = () => {

  const { data, error } = useSWR('/api/get-promotion', fetcher)

  return (
    <div>
      <PageTitle title='Welcome' />
      <p className='mt-12 text-center'>Restaurant X always seeks to better serve its customers.<br></br>
      Therefore, we are always open to listen to your opinion!</p>
      <div className='text-center my-12'>
        <Link href='/review'>
          <a className='bg-blue-400 px-6 py-4 font-bold rounded-lg shadow-lg hover:shadow'>Give opinion or suggestion</a>
        </Link>
      </div>
      { !data && <p className='my-12 text-center'>Loading...</p>}
      { !error && data && data.showCoupon &&
        <p className='my-12 text-center'>
          {data.message}
        </p>
      }

    </div>
  )
}

export default Index