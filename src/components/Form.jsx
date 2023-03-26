import React, { useState } from 'react'
import { Tab } from '@headlessui/react'
import SignIn from './SignIn'
import LogIn from './LogIn'

const TabList = ['Login', 'SignIn']

function classNames (...classes) {
  return classes.filter(Boolean).join(' ')
}

export const Form = () => {
  return (
    <div className='flex flex-col sm:min-w-[33rem] px-4 py-8 bg-white rounded-lg shadow dark:bg-gray-800 sm:px-6 md:px-8 lg:px-10'>
      <div className='self-center mb-6 text-4xl font-bold sm:text-4xl text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500'>
        My Form
      </div>
      <div className='w-full max-w-md px-2 sm:px-0'>
        <Tab.Group>
          <Tab.List
            className='flex space-x-1 rounded-xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-1'
            // onClick={() => {
            //   toast.promise(() => new Promise((resolve) => setTimeout(resolve, 2000)), {
            //     loading: 'Loading',
            //     success: 'Success',
            //     error: 'Error'
            //   })
            // }}
          >
            {TabList.map((tab) => (
              <Tab
                key={tab}
                className={({ selected }) =>
                  classNames(
                    'w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-white',
                    'ring-white ring-opacity-60 ring-offset-2 ring-offset-indigo-400 focus:outline-none focus:ring-2',
                    selected
                      ? 'bg-white shadow text-indigo-700'
                      : 'text-blue-100 hover:bg-white/[0.12] hover:text-white'
                  )}
              > {tab}
              </Tab>
            ))}
          </Tab.List>
          <Tab.Panels>
            <Tab.Panel><LogIn /></Tab.Panel>
            <Tab.Panel><SignIn /></Tab.Panel>
          </Tab.Panels>
        </Tab.Group>
      </div>

    </div>
  )
}
