import { Button, TextField } from '@mui/material'
import React, { useState } from 'react'

const Task = () => {

   
    var[dname,setDname]=useState();
    const changeH = () =>{
        setDname("Home");
    };
    const changeGa = (e) =>{
      setDname("Gallery")
    };
    const changeA = (e) =>{
        setDname("Apps")
      };

  return (
    
  <div>
        <h1>Welcome to {dname}</h1>
        <Button variant="contained" onClick={changeH}>Home</Button>&nbsp;
        <Button variant="contained" onClick={changeGa}>Gallery</Button>&nbsp;
        <Button variant="contained" onClick={changeA}>Apps</Button>
  </div>
  )
}
 

export default Task
