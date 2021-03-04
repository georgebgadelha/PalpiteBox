import React, { useState } from 'react'
import PageTitle from '../components/PageTitle'

const Review = () => {

  const ratings = [1, 2, 3, 4, 5]

  const [form, setForm] = useState({
    Name: '',
    Email: '',
    Phone: '',
    Rating: 0,
  })

  const [success, setSuccess] = useState(false)
  const [feedback, setFeedback] = useState({})

  const save = async () => {
    try {
      const response = await fetch('/api/save', {
        method: 'POST',
        body: JSON.stringify(form)
      })

      const data = await response.json()
      setSuccess(true)
      setFeedback(data)
    } catch (err) {
    }
  }

  const onChange = evt => {
    const value = evt.target.value
    const key = evt.target.name
    setForm(old => ({
      ...old,
      [key]: value
    }))
  }

  return (
    <div className='pt-6'>
    <PageTitle title='Review'/>
      <h1 className='text-center font-bold my-4 text-2xl'>Review and suggestions</h1>
      <p className='text-center mb-6'>Restaurant X always seeks to better serve its customers. <br />
      Therefore, we are always open to listen to your opinion!
      </p>
      {!success && <div className='w-1/4 flex flex-col justify-items-center mx-auto'>
        <label className='font-bold'>Full Name</label>
        <input type="text" className='p-4 block shadow bg-blue-100 my-2 rounded' placeholder='Name' onChange={onChange} name='Name' value={form.Name} />
        <label className='font-bold'>Email</label>
        <input type="text" className='p-4 block shadow bg-blue-100 my-2 rounded' placeholder='Email' onChange={onChange} name='Email' value={form.Email} />
        <label className='font-bold'>Phone</label>
        <input type="text" className='p-4 block shadow bg-blue-100 my-2 rounded' placeholder='Phone' onChange={onChange} name='Phone' value={form.Phone} />
        
        <div className='mt-4 flex justify-items-center justify-evenly'>
        {ratings.map(rating => {
          return (
            <label>{rating} <br/>
            <input type="radio" name='Rating' value={rating} onChange={onChange}/>
            </label>
            )
          })
        }
        </div>

        <div className='mx-auto'>
          <button className='bg-blue-400 px-10 py-4 my-6 font-bold rounded-lg shadow-lg hover:underline' onClick={save}>SAVE 🚀</button>
        </div>
      </div>}
      { success && <div className='w-1/5 flex flex-col justify-items-center mx-auto'>
        <p className='mb-6 bg-blue-100 border-t border-b border-blue-500 text-center text-blue-700 px-4 py-3'>Thank you for contributing with your review/suggestion! 😁</p>
        {
          feedback.showCoupon && 
          <div className='text-center border p-4 shadow-md mb-4'>
            Your coupon: <br />
            <span className='font-bold text-2xl'> {feedback.Coupon}
            </span>
          </div>
        }
        {
          feedback.showCoupon && 
          <div className='text-center border p-4 shadow-md mb-4'>
            <span className='font-bold '> {feedback.Promotion}
            </span>
            <br/> <br/>
            <p className='text-lg font-bold text-red-500 mb-2'>HEY, YOU!</p>
            <p className='italic'>Take a snapshot of this screen and show it to who's serving you!</p>
          </div>
        }
      </div>}
    </div>
  )
}

export default Review