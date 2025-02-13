import Link from 'next/link'
import { PiExamFill } from "react-icons/pi";

import { TbLivePhotoFilled } from "react-icons/tb";

export default function SingleExam({name,className,desc,publishDate,loginDesc,author}) {
  return (
    <div className='rounded-lg w-fit mx-auto text-center hover:bg-gray-100 cursor-text border shadow-sm p-2 '>
        <div>
       <div className='flex items-center justify-between my-2'>
       <PiExamFill className='text-2xl text-gray-800'/>
       <small className='bg-green-100 text-green-600 p-1 capitalize rounded-md'>Class {className} only</small>
       </div>
        
        <p className='text-xl capitalize'>{name}</p>
        <small className='text-gray-700 capitalize'>{desc}</small>
        </div>
        <Link href={'/exam_info'} className='text-blue-500 block py-2 underline text-center w-full'>View details</Link>
       <div className='flex items-center gap-1 float-right'>
       <p><TbLivePhotoFilled className='text-blue-500'/></p>
       <small className=' text-gray-600 capitalize '><i>{publishDate}-{author}</i></small>
       </div>
      
    </div>
  )
}
