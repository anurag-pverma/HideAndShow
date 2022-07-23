import React from 'react'
import { useState } from 'react'

export default function Hideshow() {
    const [show, setShow]= useState(true);
  return (
    <div>Hideshow

    {
        show?<h1>Content Is Live Now</h1>:<h3>Content IS Hide Now</h3>
    }

    <button onClick={()=>setShow(true)}>SHOW</button>
    <button onClick={()=>setShow(false)}>HIDE</button>



    </div>
  )
}
