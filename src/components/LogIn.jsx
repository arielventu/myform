import React, { useEffect, useState } from 'react'
import { toast } from 'sonner'

const LogIn = () => {
  const [user, setUser] = useState({
    email: '',
    password: ''
  })
  const [users, setUsers] = useState([])

  useEffect(() => {
    fetch('https://dummyjson.com/users')
      .then(res => res.json())
      .then(data => {
        // console.log(data.users)
        setUsers(data.users)
      })
  }, [])

  const validateLogin = () => {
    const { email, password } = user
    const existEmail = users.find(user => user.email === email)
    const existPassword = users.find(user => user.password === password)
    if (existEmail && existPassword) {
      toast.success(`Welcome ${existEmail.firstName} ${existEmail.lastName}`)
    } else {
      toast.error('Invalid email or password')
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    validateLogin()
    setUser({
      email: '',
      password: ''
    })
  }
  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value
    })
  }

  return (
    <form>
      <div className='space-y-12'>
        <div className='border-b border-gray-900/10 pb-12'>
          <div className='mt-10 grid grid-cols-1 gap-y-8 gap-x-6 sm:grid-cols-6'>
            <div className='sm:col-start-2 col-span-4'>
              <label htmlFor='email' className='block text-sm font-medium leading-6 text-white'>Email address</label>
              <div className='mt-2'>
                <input onChange={handleChange} type='text' name='email' id='email' autoComplete='given-name' className='block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-700 sm:text-sm sm:leading-6' />
              </div>
            </div>
            <div className='sm:col-start-2 col-span-4'>
              <label htmlFor='password' className='block text-sm font-medium leading-6 text-white'>Password</label>
              <div className='mt-2'>
                <input onChange={handleChange} id='password' name='password' type='password' autoComplete='password' className='block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-700 sm:text-sm sm:leading-6' />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='mt-6 flex items-center justify-end gap-x-6'>
        <button type='button' className='text-sm font-semibold leading-6 text-white'>Cancel</button>
        <button onClick={handleSubmit} className='rounded-md bg-indigo-600 py-2 px-3 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'>Save</button>
      </div>
    </form>
  )
}

export default LogIn
