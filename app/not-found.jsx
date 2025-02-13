"use client"

import { useRouter } from 'next/navigation'
import React, { useEffect } from 'react'


export default function Notfound() {

const path=useRouter()
useEffect(()=>{
   path.replace("/")
},[])


}
