import React from 'react'

const SignIn = () => {
  return (
    <form>
      <div className='space-y-12'>
        <div className='border-b border-gray-900/10'>
          <div className='mt-5 grid grid-cols-1 gap-y-4 gap-x-6 sm:grid-cols-6'>
            <div className='sm:col-span-3'>
              <label htmlFor='first-name' className='block text-sm font-medium leading-6 text-white'>First name</label>
              <div className='mt-2'>
                <input type='text' name='first-name' id='first-name' autoComplete='given-name' className='block w-full rounded-md border-0 py-1.5 text-white shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-700 sm:text-sm sm:leading-6' />
              </div>
            </div>

            <div className='sm:col-span-3'>
              <label htmlFor='last-name' className='block text-sm font-medium leading-6 text-white'>Last name</label>
              <div className='mt-2'>
                <input type='text' name='last-name' id='last-name' autoComplete='family-name' className='block w-full rounded-md border-0 py-1.5 text-white shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-700 sm:text-sm sm:leading-6' />
              </div>
            </div>

            <div className='sm:col-span-4'>
              <label htmlFor='email' className='block text-sm font-medium leading-6 text-white'>Email address</label>
              <div className='mt-2'>
                <input id='email' name='email' type='email' autoComplete='email' className='block w-full rounded-md border-0 py-1.5 text-white shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-700 sm:text-sm sm:leading-6' />
              </div>
            </div>

            <div className='col-span-full'>
              <label htmlFor='street-address' className='block text-sm font-medium leading-6 text-white'>Street address</label>
              <div className='mt-2'>
                <input type='text' name='street-address' id='street-address' autoComplete='street-address' className='block w-full rounded-md border-0 py-1.5 text-white shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-700 sm:text-sm sm:leading-6' />
              </div>
            </div>

            <div className='sm:col-span-2 sm:col-start-1'>
              <label htmlFor='city' className='block text-sm font-medium leading-6 text-white'>City</label>
              <div className='mt-2'>
                <input type='text' name='city' id='city' autoComplete='address-level2' className='block w-full rounded-md border-0 py-1.5 text-white shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-700 sm:text-sm sm:leading-6' />
              </div>
            </div>

            <div className='sm:col-span-2'>
              <label htmlFor='region' className='block text-sm font-medium leading-6 text-white'>State / Province</label>
              <div className='mt-2'>
                <input type='text' name='region' id='region' autoComplete='address-level1' className='block w-full rounded-md border-0 py-1.5 text-white shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-700 sm:text-sm sm:leading-6' />
              </div>
            </div>

            <div className='sm:col-span-2'>
              <label htmlFor='postal-code' className='block text-sm font-medium leading-6 text-white'>ZIP / Postal code</label>
              <div className='mt-2'>
                <input type='text' name='postal-code' id='postal-code' autoComplete='postal-code' className='block w-full rounded-md border-0 py-1.5 text-white shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-700 sm:text-sm sm:leading-6' />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='mt-6 flex items-center justify-end gap-x-6'>
        <button type='button' className='text-sm font-semibold leading-6 text-white'>Cancel</button>
        <button type='submit' className='rounded-md bg-indigo-600 py-2 px-3 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'>Save</button>
      </div>
    </form>
  )
}

export default SignIn
