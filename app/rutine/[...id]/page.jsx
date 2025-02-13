import Sitevalue from '@/utils/Data';
import React from 'react'

export default async function page({params}) {

    const {id}=await params;
    const indivitualRutine=Sitevalue.classRutine.find((val)=>{
      return val.className==id[0] && val.date==id[1]
    })


    const makeDay=[,"রবিবার","সোমবার","মঙ্গলবার","বুধবার","বৃহঃস্পতিবার","শনিবার"]



  return (
    <div>

        <div className='section_head'>
            <h1 className='section_head_title'>Class rutine for {indivitualRutine.className}</h1>
            <p className='section_head_desc'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Pariatur vitae animi aliquam.</p>
        </div>

        <div className='w-[95%] mx-auto'>
            <table className="w-full border-collapse  border border-gray-300">
                <thead >
                   <tr className="bg-gray-700 text-center text-white">
                    <td className="p-3 border">Day</td>
                    {indivitualRutine.rutine.map((val,i)=>(
                        <td className="p-3 border" key={i}>{val.name}</td>
                    ))}
                    <td className="p-3 border">Teacher name</td>
                    <td className="p-3 border">Rom</td>
                    <td className="p-3 border">Time</td>
                   </tr>
                </thead>
                <tbody>
                    {makeDay.map((item,index)=>(
                        <tr key={index} className="text-center">
                          <td  className="p-3 border">{item}</td>
                            {indivitualRutine.rutine[0].classDay.map((val)=>(
                                <td className="p-3 border" key={Math.random()}>{makeDay[val]?"✔️":"❌"}</td>
                            ))}
                            <td className="p-3 border">Azim bissash</td>
                            <td className="p-3 border">201</td>
                            <td className="p-3 border">10:30</td>
                           
                        </tr>
                    ))}
                  
                </tbody>
            </table>
        </div>
      
    </div>
  )
}
