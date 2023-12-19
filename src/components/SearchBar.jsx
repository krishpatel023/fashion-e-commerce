import React from 'react'
import Filter from '../assets/icons/filter.svg'
export default function SearchBar() {
  return (
    <div className='w-full h-16 flex justify-evenly items-center'>
      

        <div className='w-[80%] h-10'>
            <div className="group relative h-full">
            <input type="text" className="block w-full h-full rounded-full border-[2px] border-accent-color px-10 shadow-sm transition-all hover:bg-gray-50" placeholder="Search" />
            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center px-2.5 text-gray-500">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5">
                <path fillRule="evenodd" d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z" clipRule="evenodd" />
                </svg>
            </div>
            </div>
        </div>
        <button className='w-24 h-10 rounded-full border-[2px] border-accent-color text-accent-color flex justify-center items-center text-center gap-4'>
          <img src={Filter} className='w-4 h-4' alt="" />
            Filter
        </button>
    </div>
  )
}
