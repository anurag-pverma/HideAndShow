import React from 'react'
import { useState } from 'react'

export default function Toggleapp() {
    const [toggle, setToggle] = useState(true);
  return (
    <div>Toggleapp
        {
            toggle?<h2>Output is showing</h2>:<h2>Output is not sowing </h2>
        }

        <button onClick={()=>setToggle(!toggle)}>Toggle</button>

    </div>
  )
}
