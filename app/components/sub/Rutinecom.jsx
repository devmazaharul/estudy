import Link from 'next/link'
import React from 'react'

export default function Rutinecom({className="",date="",status=false}) {
  return (
    <>
        <div className=' text-center cursor-pointer m-2 hover:bg-gray-50 border p-4 rounded-lg shadow-sm'>
            <h1 className=' py-2 text-2xl font-semibold'>Class-{className }</h1>
            <p className='section_head_desc py-1'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae, iusto.</p>
          
           <div className='flex py-3 items-center justify-between '>
            <Link href={`/rutine/${className}/${date}`} className='bg-gray-700 text-gray-100 px-4 py-1 rounded-sm hover:bg-gray-600'>View</Link>
            <Link href={'#'} className='border  text-gray-700 px-4 py-1 hover:bg-gray-100 rounded-sm'>Save</Link>
           </div>
           <div className='flex float-right py-2 items-center gap-2'>
           <p>{date}</p>
           <div>{status?<p className='text-green-500'>Active</p>:<p className='text-red-500'>Old</p>}</div>
           </div>
        </div>
      
    </>
  )
}
