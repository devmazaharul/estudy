"use client"
export default function Rutineprint() {
  return (
    <div>
         <div className='w-fit mx-auto print:hidden my-6 '>
        <button onClick={()=>print()} className='w-full text-white rounded-md py-2 px-8 bg-indigo-900'>Print</button>
      </div>
      
    </div>
  )
}
