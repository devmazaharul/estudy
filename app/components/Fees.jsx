import React from 'react'
import FeeCom from './sub/FeeCom'
import Sitevalue from '@/utils/Data'

export default function Fees() {
  return (
    <div className='section'>
     <div className='section_head'>
     <h1 className='section_head_title'>Our Fees</h1>
     <p className='section_head_desc'>Lorem ipsum dolor sit amet, consectetur adipiscing aelit, sed do eiusmod</p>
     </div>

    <div className='grid grid-cols-2 md:grid-cols-5'>
     {Sitevalue.fees.map((val,i)=>{
        return <FeeCom key={i} {...val}/>
     })}
     
    </div>
    </div>
  )
}
