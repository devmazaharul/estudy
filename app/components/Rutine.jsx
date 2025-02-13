import Sitevalue from '@/utils/Data'
import React from 'react'
import Rutinecom from './sub/Rutinecom'

export default function Rutine() {
  return (
    <div className='setion'>

       <div className='section_head'>
        <h1 className='section_head_title'>class Rutine</h1>
        <p className='section_head_desc'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Optio, quisquam deserunt autem minima sunt et adipisci.</p>
       </div>
       
       <div className='grid md:grid-cols-4 grid-cols-2 gap-1'>
        {Sitevalue.classRutine.map((val,i)=>(
        
            <Rutinecom key={i} {...val}/>
       
        ))}

       </div>


    </div>
  )
}
