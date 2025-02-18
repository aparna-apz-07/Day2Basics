import { Button, TextField } from '@mui/material'
import React, { useState } from 'react'

const StateBasics = () => {
    // var fname="Aparna"
    var[fname,setFname] = useState("Aparna");
    var[name, setNname] = useState("");
    const nameChange = () =>{
        setFname(name);
    };
    const inputHandler = (e) =>{
      console.log(e.target.value);
      setNname(e.target.value);
    };
  return (
    <div>
      <h1>Hello {fname}</h1>
      <TextField variant="standard" label="Enter your name" onChange={inputHandler}></TextField><br /><br />
      <Button variant="contained" onClick={nameChange}>Change</Button>
    </div>
  )
 

}

export default StateBasics
