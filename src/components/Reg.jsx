import { Button, TextField, Typography } from '@mui/material'
import React from 'react'

const Reg = () => {
  return (
    <div>
      <Typography variant="h2">Registration Form</Typography>
      <TextField variant="outlined" label="Name"/><br /><br />
      <TextField variant="outlined" label="Age" type="number"/><br /><br />
      <TextField variant="outlined" label="Place"/><br /><br />
      <TextField variant="outlined" label="Email" type="email"/><br /><br />
      <TextField variant="outlined" label="Username"/><br /><br />
      <TextField variant="outlined" label="Password" type="password"/><br /><br />
      <Button variant="contained">Submit</Button>
    </div>
  )
}

export default Reg
