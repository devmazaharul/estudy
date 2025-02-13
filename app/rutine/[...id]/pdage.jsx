import Sitevalue from '@/utils/Data';
import React from 'react'

const page = async({params}) => {
  const {id}=await params;
const indivitualRutine=Sitevalue.classRutine.find((val)=>{
  return val.className==id[0] && val.date==id[1]
})

  return (
  
      <div className="max-w-4xl mx-auto mt-10 p-6   rounded-lg">
      <h2 className="text-2xl font-bold text-center mb-4">Class {indivitualRutine.className} Routine</h2>
      <table className="w-full border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-700 text-white">
            <th className="p-3 border">Time</th>
            <th className="p-3 border">Subject</th>
            <th className="p-3 border">Teacher</th>
            <th className="p-3 border">Day</th>
            <th className="p-3 border">Room</th>
          </tr>
        </thead>
        <tbody>
          {indivitualRutine.rutine.map((period, index) => (
            <tr key={index} className='text-center'>
              <td className="p-3 border">{period.time}</td>
              <td className="p-3 border">{period.name}</td>
              <td className="p-3 border">{period.sir_name}</td>
              <td className="p-3 border">{period.classDay[0]}</td>
              <td className="p-3 border">{period.room || 100}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>

   
  )
}

export default page

