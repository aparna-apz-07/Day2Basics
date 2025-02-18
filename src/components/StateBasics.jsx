import { Button } from '@mui/material'
import React, { useState } from 'react'

const StateBasics = () => {
    // var fname="Aparna"
    var[fname,setFname] = useState("Aparna");
    var[car,setCar] = useState("Venue");
    const nameChange = () =>{
        setFname("Suresh");
    };
  return (
    <div>
      <h1>Hello {fname}</h1>
      <Button variant="contained" onClick={nameChange}>Change</Button>
    </div>
  )
}

export default StateBasics
