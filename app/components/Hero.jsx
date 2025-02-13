import Link from 'next/link'
import React from 'react'

export default function Hero() {
  return (
    <div className="bg-[url('/pexels-pixabay-159711.jpg')] bg-no-repeat  bg-cover ">
<div className='bg-[#1c1717d1] w-full h-[500px]'>
    <div className='md:w-1/2 p-2 mx-auto text-center place-content-center w-full h-full'>
    <h1 className='text-3xl text-white my-6 font-semibold'>All-in-One School Management Platform</h1>
    <p className='text-gray-400 my-6'>Manage admissions, exams, fees, result and more—everything you need in one easy-to-use system.</p>
  <Link href={'/result'} className='main_btn my-8'>See result</Link>
    </div>
</div>
    </div>
  )
}
